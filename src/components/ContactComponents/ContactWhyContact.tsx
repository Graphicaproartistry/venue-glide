import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const discoverPoints = [
  "Simplify bookings",
  "Improve member experiences",
  "Reduce administration",
  "Increase operational efficiency",
  "Replace disconnected software",
  "Improve reporting",
  "Scale your venue",
];

const commitments = [
  "Every conversation is tailored to your business.",
  "No obligation.",
  "No pressure.",
  "Just practical advice from people who understand sports venue operations.",
];

const ContactWhyContact: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="why-contact-box">
          <div className="text-center">
            <MaskText as="h2" className="pricing-sec-title mb-3" lines={["Why Contact VenueGlide?"]} />
          </div>
          <Reveal direction="up" delay={0.1}>
            <p className="text-center mb-2" style={{ fontSize: "16px", color: "#cbd5e1" }}>
              Our specialists understand the operational challenges sports venues face every day.
            </p>
            <div className="sub-intro text-center">
              We'll help you discover how VenueGlide can:
            </div>
          </Reveal>

          <div className="why-contact-grid">
            {discoverPoints.map((item, idx) => (
              <Reveal key={idx} direction="up" distance={16} delay={Math.min(idx * 0.06 + 0.1, 0.4)} className="why-contact-item">
                <i className="far fa-check-circle"></i>
                <span>{item}</span>
              </Reveal>
            ))}
          </div>

          <div className="why-contact-commitments">
            {commitments.map((text, idx) => (
              <Reveal key={idx} direction="up" distance={12} delay={Math.min(idx * 0.06 + 0.2, 0.4)} className="commitment-badge">
                <i className="far fa-shield-check me-2"></i> {text}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWhyContact;
