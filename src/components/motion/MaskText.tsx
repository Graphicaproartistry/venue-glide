import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface MaskTextProps {
  /** Each entry renders as its own masked line. */
  lines: React.ReactNode[];
  /** Element type for the wrapper (the heading itself). */
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  duration?: number;
  /** Animate on scroll into view (default) or immediately on mount. */
  trigger?: "inView" | "mount";
}

/**
 * Editorial line-mask reveal: each line sits in an overflow-hidden track and
 * slides up from below, staggered. This is the signature entrance of the
 * big-type editorial sites this homepage is modelled on, and reads far more
 * deliberate than a plain fade.
 *
 * The wrapper element is the real heading tag and every line is a block-level
 * span inside it, so the markup stays valid and the heading text remains a
 * single accessible string.
 *
 * Collapses to a simple fade when the visitor prefers reduced motion.
 */
const MaskText: React.FC<MaskTextProps> = ({
  lines,
  as = "div",
  className,
  style,
  delay = 0,
  stagger = 0.09,
  duration = 0.9,
  trigger = "inView",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const line: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { y: "110%" },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const animationProps =
    trigger === "mount"
      ? ({ animate: "visible" } as const)
      : ({ whileInView: "visible", viewport: { once: true, amount: 0.4 } } as const);

  return (
    <MotionTag initial="hidden" variants={container} className={className} style={style} {...animationProps}>
      {lines.map((content, idx) => (
        <span className="mask-line" key={idx}>
          <motion.span className="mask-line-inner" variants={line}>
            {content}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};

export default MaskText;
