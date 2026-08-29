import React, { useEffect, useState } from "react";

/**
 * Full-screen "burst" reveal on first load, matching the reference site's
 * own technique exactly: a solid layer whose visible area is a growing
 * circle punched out via `mask-composite: exclude` (registered through
 * `@property --ed-burst` in editorial.css so the browser can smoothly
 * interpolate the custom property instead of jumping instantly). The circle
 * grows from 0 to fully off-screen, revealing the page underneath.
 *
 * Mounted once at the app root, so it plays on first load only — not on
 * every in-app route change.
 */
const ScreenLoader: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [skip] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (skip) {
      setMounted(false);
      return;
    }

    const openTimer = window.setTimeout(() => setOpen(true), 250);
    const unmountTimer = window.setTimeout(() => setMounted(false), 1650);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(unmountTimer);
    };
  }, [skip]);

  if (!mounted) return null;

  return (
    <div className="ed-loader" aria-hidden="true">
      <div className={`ed-loader-mask ${open ? "is-open" : ""}`} />
      <span className={`ed-loader-word ${open ? "is-hidden" : ""}`}>VenueGlide</span>
    </div>
  );
};

export default ScreenLoader;
