import React from "react";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";
import "../editorial/page-hero.css";

const BookDemoHero: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("demo-request-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="ed-page-hero">
      <Reveal direction="up">
        <span className="ed-label">Book a Demo</span>
      </Reveal>

      <MaskText
        as="h1"
        className="ed-display ed-display--sm"
        lines={["See VenueGlide OS", "in action"]}
      />

      <Reveal direction="up" delay={0.15}>
        <p className="ed-lede">
          Discover how VenueGlide can simplify operations, increase bookings
          and help your sports venue grow. Every sports venue is different —
          that's why every VenueGlide demonstration is personalised around
          your business, your workflows and your operational goals. During
          your live demo, our specialists will show you exactly how
          VenueGlide can improve bookings, memberships, customer management,
          reporting and day-to-day venue operations.
        </p>
      </Reveal>

      <Reveal direction="up" delay={0.25} className="ed-hero-actions">
        <MagneticButton>
          <button className="ed-btn ed-btn--solid" onClick={scrollToForm} data-cursor="link">
            Schedule Your Personalised Demo
          </button>
        </MagneticButton>
      </Reveal>
    </section>
  );
};

export default BookDemoHero;
