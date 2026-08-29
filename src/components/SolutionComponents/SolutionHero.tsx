import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";
import "../editorial/page-hero.css";

const SolutionHero: React.FC = () => {
  return (
    <section className="ed-page-hero">
      <Reveal direction="up">
        <span className="ed-label">Solutions</span>
      </Reveal>

      <MaskText
        as="h1"
        className="ed-display ed-display--sm"
        lines={["Complete software solutions", "for every sports venue"]}
      />

      <Reveal direction="up" delay={0.15}>
        <p className="ed-lede">
          Running a successful sports venue requires more than managing
          bookings. VenueGlide OS provides complete business solutions that
          help sports facilities automate operations, improve member
          experiences, increase revenue and reduce administration. Whether you
          manage an indoor cricket centre, padel club, tennis academy or
          multi-sport venue, VenueGlide delivers the technology to help your
          business thrive.
        </p>
      </Reveal>

      <Reveal direction="up" delay={0.25} className="ed-hero-actions">
        <MagneticButton>
          <Link className="ed-btn ed-btn--solid" to="/contact" data-cursor="link">
            Book a Demo
          </Link>
        </MagneticButton>
        <MagneticButton>
          <a className="ed-btn ed-btn--ghost" href="#solutions-grid" data-cursor="link">
            Explore Solutions
          </a>
        </MagneticButton>
      </Reveal>
    </section>
  );
};

export default SolutionHero;
