import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const benefits = [
  "Simplify daily operations",
  "Increase online bookings",
  "Improve member retention",
  "Reduce manual administration",
  "Manage multiple venues",
  "Improve customer experiences",
  "Gain real-time business insights",
  "Scale confidently",
];

const BookDemoWhySportsVenues: React.FC = () => {
  return (
    <section className="book-demo-section">
      <div className="container">
        <div className="who-should-box">
          <div className="text-center">
            <MaskText as="h2" className="pricing-sec-title mb-3" lines={["Why Sports Venues Choose VenueGlide"]} />
          </div>
          <Reveal direction="up" delay={0.1}>
            <div className="sub-intro text-center">
              VenueGlide helps sports venues:
            </div>
          </Reveal>

          <div className="who-should-grid">
            {benefits.map((benefit, idx) => (
              <Reveal key={idx} direction="up" distance={10} delay={Math.min(idx * 0.05 + 0.15, 0.45)} className="who-should-item">
                <i className="far fa-check-circle"></i>
                <span>{benefit}</span>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={0.3}>
            <div className="who-should-closing">
              Our platform is trusted by sports venues looking for a modern, connected operating system that supports long-term growth.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BookDemoWhySportsVenues;
