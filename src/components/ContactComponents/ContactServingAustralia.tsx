import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const locations = [
  "Melbourne",
  "Sydney",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Canberra",
  "Hobart",
  "Darwin",
  "Regional Australia",
];

const ContactServingAustralia: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["Serving Sports Venues Across Australia"]} />
        <Reveal direction="up" delay={0.1}>
          <p className="pricing-sec-subtitle">
            VenueGlide proudly supports sports venues across Australia, including:
          </p>
        </Reveal>

        <div className="australia-grid">
          {locations.map((loc, idx) => (
            <Reveal key={idx} direction="up" distance={16} delay={Math.min((idx % 3) * 0.06 + 0.1, 0.34)} className="location-card">
              <i className="far fa-location-dot"></i>
              <span>{loc}</span>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.2} className="who-should-closing text-center">
          Built in Melbourne on cloud infrastructure that scales beyond
          Australia as your venue grows — from a single facility to a
          multi-location operation.
        </Reveal>
      </div>
    </section>
  );
};

export default ContactServingAustralia;
