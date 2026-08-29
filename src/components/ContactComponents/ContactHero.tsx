import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";
import "../editorial/page-hero.css";

const ContactHero: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="ed-page-hero">
      <Reveal direction="up">
        <span className="ed-label">Contact</span>
      </Reveal>

      <MaskText
        as="h1"
        className="ed-display ed-display--sm"
        lines={["Let's build the future", "of your sports venue"]}
      />

      <Reveal direction="up" delay={0.15}>
        <p className="ed-lede">
          Whether you're exploring new software, replacing an existing system
          or planning a new venue, our team is here to help. We understand
          that every sports venue operates differently — whether you're
          managing an indoor cricket centre, a tennis club, a football
          centre, a padel club or a multi-sport facility, we'll help you find
          the right solution for your business. Our team works closely with
          venue owners, managers and organisations across Australia and
          internationally to simplify operations and support long-term
          growth.
        </p>
      </Reveal>

      <Reveal direction="up" delay={0.25} className="ed-hero-actions">
        <MagneticButton>
          <Link className="ed-btn ed-btn--solid" to="/book-demo" data-cursor="link">
            Book a Demo
          </Link>
        </MagneticButton>
        <MagneticButton>
          <button className="ed-btn ed-btn--ghost" onClick={scrollToForm} data-cursor="link">
            Contact Our Team
          </button>
        </MagneticButton>
      </Reveal>
    </section>
  );
};

export default ContactHero;
