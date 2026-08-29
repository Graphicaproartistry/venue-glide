import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";
import "../editorial/page-hero.css";

const PricingHero: React.FC = () => {
  return (
    <section className="ed-page-hero">
      <Reveal direction="up">
        <span className="ed-label">Pricing</span>
      </Reveal>

      <MaskText
        as="h1"
        className="ed-display ed-display--sm"
        lines={["Simple, transparent pricing", "for every sports venue"]}
      />

      <Reveal direction="up" delay={0.15}>
        <p className="ed-lede">
          Flexible plans designed to support sports venues of every size —
          from independent clubs to enterprise multi-location facilities.
          Whether you're launching a new sports venue or managing a national
          network of facilities, VenueGlide OS provides scalable pricing with
          powerful features to help you streamline operations, improve
          customer experiences and grow your business.
        </p>
      </Reveal>

      <Reveal direction="up" delay={0.25} className="ed-hero-actions">
        <MagneticButton>
          <Link className="ed-btn ed-btn--solid" to="/contact" data-cursor="link">
            Book a Personalised Demo
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link className="ed-btn ed-btn--ghost" to="/contact" data-cursor="link">
            Speak with Our Team
          </Link>
        </MagneticButton>
      </Reveal>
    </section>
  );
};

export default PricingHero;
