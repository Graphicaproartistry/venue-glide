import React from "react";
import { motion, useReducedMotion, Variants, HTMLMotionProps } from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport"> {
  direction?: RevealDirection;
  distance?: number;
  delay?: number;
  duration?: number;
  amount?: number;
}

const offset = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

/**
 * Scroll-reveal wrapper built on Framer Motion's `whileInView`, replacing
 * ad-hoc `wow`/animate.css markup for new and redesigned sections. Animates
 * once, and collapses to a plain fade for users with prefers-reduced-motion.
 */
const Reveal: React.FC<RevealProps> = ({
  direction = "up",
  distance = 32,
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  children,
  ...rest
}) => {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...(shouldReduceMotion ? {} : offset(direction, distance)),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
