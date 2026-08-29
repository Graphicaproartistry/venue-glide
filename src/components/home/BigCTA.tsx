import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";

/**
 * Closing statement: one oversized line, revealed on scroll, and two ways to
 * act. Deliberately the quietest section on the page apart from the type.
 */
const BigCTA: React.FC = () => (
  <section className="ed-cta">
    <div className="ed-container">
      <MaskText
        as="h2"
        className="ed-display"
        lines={["Run your venue", "like the pros do"]}
      />

      <Reveal direction="up" delay={0.25} className="ed-cta-actions">
        <Link className="ed-btn ed-btn--solid" to="/book-demo">
          Book a demo
        </Link>
        <Link className="ed-btn ed-btn--ghost" to="/pricing">
          See pricing
        </Link>
      </Reveal>
    </div>
  </section>
);

export default BigCTA;
