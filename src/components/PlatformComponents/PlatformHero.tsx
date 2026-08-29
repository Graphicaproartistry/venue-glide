import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";
import "../editorial/page-hero.css";

const PlatformHero: React.FC = () => {
  return (
    <section className="ed-page-hero">
      <Reveal direction="up">
        <span className="ed-label">Platform</span>
      </Reveal>

      <MaskText
        as="h1"
        className="ed-display ed-display--sm"
        lines={["One intelligent platform.", "Endless possibilities."]}
      />

      <Reveal direction="up" delay={0.15}>
        <p className="ed-lede">
          VenueGlide OS is a modern, cloud-based Sports Venue Management
          Platform that connects bookings, memberships, payments, customer
          management, point of sale, reporting, coaching and business
          intelligence into one seamless operating system. Whether you manage
          a single indoor sports venue or multiple facilities across
          Australia, VenueGlide gives your team complete control from one
          intuitive dashboard.
        </p>
      </Reveal>

      <Reveal direction="up" delay={0.25} className="ed-hero-actions">
        <MagneticButton>
          <Link className="ed-btn ed-btn--solid" to="/contact" data-cursor="link">
            Book a Personal Demo
          </Link>
        </MagneticButton>
        <MagneticButton>
          <a className="ed-btn ed-btn--ghost" href="#everything-venue-needs" data-cursor="link">
            Explore Features
          </a>
        </MagneticButton>
      </Reveal>
    </section>
  );
};

export default PlatformHero;
