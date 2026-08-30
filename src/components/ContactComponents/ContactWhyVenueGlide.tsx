import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const modules = [
  "Online Bookings",
  "Membership Management",
  "CRM",
  "Point of Sale",
  "Payments",
  "Coaching",
  "Reporting",
  "Automation",
  "AI",
];

const ContactWhyVenueGlide: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="why-contact-box">
          <div className="text-center">
            <MaskText as="h2" className="pricing-sec-title mb-3" lines={["Why VenueGlide?"]} />
          </div>
          <Reveal direction="up" delay={0.1}>
            <p className="text-center mb-4" style={{ fontSize: "16px", color: "#cbd5e1" }}>
              Sports venues choose VenueGlide because it combines:
            </p>
          </Reveal>

          <div className="modules-tags-wrap">
            {modules.map((mod, idx) => (
              <Reveal key={idx} direction="up" distance={10} delay={Math.min(idx * 0.05 + 0.1, 0.4)} className="module-chip">
                {mod}
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={0.25}>
            <p className="text-center mb-2" style={{ fontSize: "18px", fontWeight: 700, color: "#00D4ff" }}>
              into one connected operating system.
            </p>
            <div className="who-should-closing text-center mt-3">
              Instead of managing multiple software platforms, your team can manage every aspect of your venue from a single dashboard.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactWhyVenueGlide;
