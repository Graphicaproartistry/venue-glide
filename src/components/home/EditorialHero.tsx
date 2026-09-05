import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import MaskText from "../motion/MaskText";
import MagneticButton from "../motion/MagneticButton";
import heroImage from "../../images/sports/basketball.png";

/**
 * Full-bleed opening statement: a cinematic venue photograph that drifts
 * slowly on scroll behind an oversized uppercase headline revealed line by
 * line. The header above it is transparent, so this reads as one unbroken
 * frame rather than a boxed-in banner.
 */
const EditorialHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Photograph drifts down slower than the page, and dims slightly as the
  // headline scrolls away — a restrained parallax, not a gimmick.
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section className="ed-hero" ref={sectionRef}>
      <motion.div
        className="ed-hero-media"
        style={shouldReduceMotion ? undefined : { y: mediaY, scale: mediaScale }}
      >
        <img src={heroImage} alt="A packed indoor arena on game night" />
      </motion.div>

      <motion.div
        className="ed-hero-inner"
        style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="ed-container">
          <motion.span
            className="ed-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Melbourne's Sports Venue Operating System
          </motion.span>

          <MaskText
            as="h1"
            className="ed-display ed-hero-title"
            trigger="mount"
            delay={0.25}
            lines={["Every court.", "Every booking.", "One system."]}
          />

          <div className="ed-hero-bottom">
            <motion.p
              className="ed-lede"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Bookings, memberships, coaching, payments, POS and staffless
              access — run your entire venue from one platform built for
              Melbourne sports facilities and trusted Australia-wide.
            </motion.p>

            <motion.div
              className="ed-hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton>
                <Link className="ed-btn ed-btn--solid" to="/book-demo" data-cursor="link">
                  Book a demo
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link className="ed-btn ed-btn--ghost" to="/platform" data-cursor="link">
                  Explore the platform
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EditorialHero;
