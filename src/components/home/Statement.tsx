import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, MotionValue } from "framer-motion";

const TEXT =
  "Most venues run on a patchwork of booking tools, spreadsheets and paper waivers. VenueGlide replaces all of it with one connected system your whole team actually uses.";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

/**
 * A single word that brightens as the section scrubs past it. Each word owns a
 * slice of the section's scroll range, so the sentence "writes itself" from
 * left to right as the reader scrolls.
 */
const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span className="ed-statement-word" style={{ opacity }}>
      {children}
    </motion.span>
  );
};

const Statement: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = TEXT.split(" ");

  return (
    <section className="ed-section ed-section--alt">
      <div className="ed-container" ref={ref}>
        <span className="ed-label">The problem</span>
        {shouldReduceMotion ? (
          <p className="ed-statement">{TEXT}</p>
        ) : (
          <p className="ed-statement" aria-label={TEXT}>
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]} aria-hidden="true">
                  {word}
                </Word>
              );
            })}
          </p>
        )}
      </div>
    </section>
  );
};

export default Statement;
