import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";

const ContactFinalCTA: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="contact-section pt-0">
      <div className="container">
        <div className="contact-final-cta-box">
          <MaskText as="h2" className="title" lines={["Ready to Modernise", "Your Sports Venue?"]} />
          <Reveal direction="up" delay={0.1}>
            <p>
              Whether you're exploring new software or ready to transform
              your operations, our team is here to help.
            </p>
            <p className="mb-4">
              Book a personalised demo, request a consultation or contact us
              today to discover how VenueGlide OS can support your venue's
              success.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2} className="d-flex justify-content-center gap-3 flex-wrap">
            <MagneticButton>
              <button onClick={scrollToForm} className="btn-primary-green" data-cursor="link">
                Contact VenueGlide Today
              </button>
            </MagneticButton>
            <MagneticButton>
              <Link to="/book-demo" className="btn-outline-glow" data-cursor="link">
                Book a Personalised Demo
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactFinalCTA;
