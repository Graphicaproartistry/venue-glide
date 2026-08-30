import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const processSteps = [
  { num: 1, title: "1. Discovery & Planning" },
  { num: 2, title: "2. Platform Configuration" },
  { num: 3, title: "3. Data Migration" },
  { num: 4, title: "4. Team Training" },
  { num: 5, title: "5. Go Live" },
  { num: 6, title: "6. Ongoing Success & Support" },
];

const PricingImplementation: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["Implementation & Onboarding"]} />
        <Reveal direction="up" delay={0.1}>
          <h3 className="pricing-sec-subtitle">A Smooth Transition to VenueGlide</h3>
        </Reveal>

        <Reveal direction="up" delay={0.15} className="implementation-intro">
          <p>Moving to a new management platform doesn't have to be complicated.</p>
          <p>Our onboarding team works with your venue to ensure a smooth implementation with minimal disruption.</p>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <h4 className="process-header-title">Our Process</h4>
        </Reveal>

        <div className="process-grid">
          {processSteps.map((step) => (
            <Reveal
              key={step.num}
              direction="up"
              distance={16}
              delay={Math.min((step.num - 1) * 0.06 + 0.15, 0.5)}
              className="process-card"
            >
              <div className="process-num">{step.num}</div>
              <div className="process-title">{step.title}</div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.25} className="implementation-closing">
          Whether you're switching from spreadsheets or another venue management system, we'll help you every step of the way.
        </Reveal>
      </div>
    </section>
  );
};

export default PricingImplementation;
