import React from "react";

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
        <div className="why-contact-box wow fadeInUp" data-wow-duration="600ms">
          <h2 className="pricing-sec-title text-center mb-3">
            Why Contact VenueGlide?
          </h2>
          <p className="text-center mb-2" style={{ fontSize: "16px", color: "#cbd5e1" }}>
            Our specialists understand the operational challenges sports venues face every day.
          </p>
          <div className="sub-intro text-center">
            We'll help you discover how VenueGlide can:
          </div>

          <div className="why-contact-grid">
            {discoverPoints.map((item, idx) => (
              <div key={idx} className="why-contact-item">
                <i className="far fa-check-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="why-contact-commitments">
            {commitments.map((text, idx) => (
              <div key={idx} className="commitment-badge">
                <i className="far fa-shield-check me-2"></i> {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWhyContact;
