import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";

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
        <MagneticButton>
          <Link className="ed-btn ed-btn--solid" to="/book-demo" data-cursor="link">
            Book a demo
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link className="ed-btn ed-btn--ghost" to="/pricing" data-cursor="link">
            See pricing
          </Link>
        </MagneticButton>
      </Reveal>
    </div>
  </section>
);

export default BigCTA;
