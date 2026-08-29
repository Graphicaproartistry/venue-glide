import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /** How strongly the button follows the cursor, 0-1. */
  strength?: number;
}

/**
 * Wraps a button/link so it pulls slightly toward the cursor within its own
 * bounds and springs back on leave. Desktop-only in effect — on a touch
 * device there's no persistent pointer position to react to, so it just
 * behaves like a normal wrapper; reduced-motion users get the same.
 */
const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  strength = 0.35,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate3d(${relX * strength}px, ${relY * strength}px, 0)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <motion.div
      ref={ref}
      className={`ed-magnetic ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
