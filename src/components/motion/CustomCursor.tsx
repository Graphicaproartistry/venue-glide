import React, { useEffect, useRef, useState } from "react";

/**
 * Desktop-only custom cursor: a small ring that follows the pointer with a
 * short spring lag, and enlarges with a label when hovering an element
 * marked `data-cursor="view"` / `data-cursor="explore"` (or any link/button,
 * which gets a plain enlargement with no label).
 *
 * Skipped entirely on touch devices (`pointer: coarse`) and for
 * prefers-reduced-motion, so neither group ever loses the native cursor.
 */
const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const canHover =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(canHover);
    if (canHover) document.body.classList.add("has-custom-cursor");
    return () => document.body.classList.remove("has-custom-cursor");
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let renderedX = x;
    let renderedY = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const tick = () => {
      renderedX += (x - renderedX) * 0.18;
      renderedY += (y - renderedY) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${renderedX}px, ${renderedY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [data-cursor]"
      );
      if (!el) {
        setActive(false);
        setLabel(null);
        return;
      }
      setActive(true);
      setLabel(el.getAttribute("data-cursor-label"));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className={`ed-cursor ${active ? "is-active" : ""}`}
      aria-hidden="true"
    >
      {label && <span className="ed-cursor-label">{label}</span>}
    </div>
  );
};

export default CustomCursor;
