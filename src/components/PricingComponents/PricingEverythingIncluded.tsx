import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const includedItems = [
  { title: "Secure Cloud Hosting", icon: "far fa-cloud" },
  { title: "Automatic Backups", icon: "far fa-arrows-rotate" },
  { title: "Platform Updates", icon: "far fa-circle-up" },
  { title: "SSL Security", icon: "far fa-shield-check" },
  { title: "Mobile Access", icon: "far fa-mobile" },
  { title: "User Management", icon: "far fa-user-gear" },
  { title: "Reporting Dashboard", icon: "far fa-chart-line" },
  { title: "Data Protection", icon: "far fa-lock" },
  { title: "Ongoing Improvements", icon: "far fa-sparkles" },
];

const PricingEverythingIncluded: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["Everything Included"]} />
        <Reveal direction="up" delay={0.1}>
          <p className="pricing-sec-subtitle">
            Every VenueGlide subscription includes:
          </p>
        </Reveal>

        <div className="everything-grid">
          {includedItems.map((item, idx) => (
            <Reveal
              key={idx}
              direction="up"
              distance={16}
              delay={Math.min((idx % 3) * 0.08 + 0.1, 0.34)}
              className="everything-card"
            >
              <div className="everything-icon">
                <i className={item.icon}></i>
              </div>
              <div className="everything-title">{item.title}</div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.2}>
          <div className="everything-footer-note">
            No hidden platform maintenance costs.
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PricingEverythingIncluded;
