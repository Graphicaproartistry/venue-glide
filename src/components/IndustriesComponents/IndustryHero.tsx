import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";
import "../editorial/page-hero.css";

const IndustryHero: React.FC = () => {
  return (
    <section className="ed-page-hero">
      <Reveal direction="up">
        <span className="ed-label">Industries</span>
      </Reveal>

      <MaskText
        as="h1"
        className="ed-display ed-display--sm"
        lines={["Industry-specific software", "for every sports venue"]}
      />

      <Reveal direction="up" delay={0.15}>
        <p className="ed-lede">
          Every sport operates differently. From court bookings and coaching
          schedules to memberships and tournaments, VenueGlide OS adapts to
          the unique requirements of your venue. Whether you're running a
          single indoor sports centre or managing multiple locations across
          Australia, VenueGlide provides purpose-built solutions designed to
          help your venue operate more efficiently, improve customer
          experiences and increase revenue.
        </p>
      </Reveal>

      <Reveal direction="up" delay={0.25} className="ed-hero-actions">
        <MagneticButton>
          <Link className="ed-btn ed-btn--solid" to="/contact" data-cursor="link">
            Book a Personal Demo
          </Link>
        </MagneticButton>
        <MagneticButton>
          <a className="ed-btn ed-btn--ghost" href="#industries-grid" data-cursor="link">
            Explore Industry Solutions
          </a>
        </MagneticButton>
      </Reveal>
    </section>
  );
};

export default IndustryHero;
