import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Dependency-free replacement for wowjs (which is unmaintained, jQuery-era,
 * and was being forced fully-visible site-wide via a `.wow { visibility:
 * visible !important }` CSS override — meaning scroll-reveal animations were
 * effectively broken and only flashed/re-animated content already on screen).
 *
 * Keeps the existing markup contract so none of the ~80 components using it
 * had to change: elements are still marked with `wow <animationName>` plus
 * optional `data-wow-delay` / `data-wow-duration`, and the actual animation
 * keyframes still come from animate.css.
 */
const SELECTOR = ".wow";
const REVEALED_CLASS = "wow-in-view";
// Belt-and-suspenders: if the observer ever misses an element (e.g. one
// added after the initial scan, or nested inside a lazily-rendered parent),
// force everything visible after a short delay rather than leaving it stuck
// invisible forever.
const FORCE_REVEAL_TIMEOUT = 2500;

const revealAll = () => {
  document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
    el.classList.add(REVEALED_CLASS, "animated");
  });
};

const reveal = (el: HTMLElement) => {
  if (el.dataset.wowRevealed === "true") return;
  el.dataset.wowRevealed = "true";

  el.style.animationDelay = el.getAttribute("data-wow-delay") || "0s";
  el.style.animationDuration = el.getAttribute("data-wow-duration") || "800ms";

  // Force a reflow so the browser treats the delay/duration change as a
  // fresh animation start rather than a no-op on an already-settled one.
  void el.offsetWidth;

  el.classList.add("animated", REVEALED_CLASS);
};

const WowInit = () => {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    document
      .querySelectorAll<HTMLElement>(SELECTOR)
      .forEach((el) => observer.observe(el));

    const safetyTimer = window.setTimeout(revealAll, FORCE_REVEAL_TIMEOUT);

    return () => {
      observer.disconnect();
      window.clearTimeout(safetyTimer);
    };
  }, [location.pathname]);

  return null;
};

export default WowInit;
