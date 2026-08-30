import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const benefitsList = [
  "Increase online bookings",
  "Improve member retention",
  "Streamline operations",
  "Automate repetitive tasks",
  "Gain real-time business insights",
  "Scale confidently",
];

const PricingWhySportsVenues: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="why-sports-box">
          <div className="text-center">
            <MaskText as="h2" className="pricing-sec-title mb-4" lines={["Why Sports Venues Choose VenueGlide"]} />
          </div>

          <Reveal direction="up" delay={0.1}>
            <div className="intro-text text-center">
              VenueGlide is more than booking software.
            </div>
            <div className="sub-intro text-center">
              It's a complete operating system that helps sports venues:
            </div>
          </Reveal>

          <div className="why-sports-grid">
            {benefitsList.map((item, idx) => (
              <Reveal key={idx} direction="up" distance={16} delay={Math.min(idx * 0.06 + 0.1, 0.4)} className="why-sports-item">
                <i className="far fa-check-circle"></i>
                <span>{item}</span>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={0.2}>
            <div className="why-sports-closing">
              Whether you manage one venue or multiple locations, VenueGlide provides the tools to support long-term growth.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PricingWhySportsVenues;
