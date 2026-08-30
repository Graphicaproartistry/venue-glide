import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const steps = [
  {
    step: "Step 1",
    title: "Tell Us About Your Venue",
    desc: "Share your current setup, operational challenges and business goals.",
  },
  {
    step: "Step 2",
    title: "Live Platform Demonstration",
    desc: "We'll demonstrate the modules most relevant to your venue, including bookings, memberships, CRM, payments, reporting and automation.",
  },
  {
    step: "Step 3",
    title: "Recommendations & Questions",
    desc: "We'll answer your questions, discuss implementation options and recommend the best solution for your business.",
  },
];

const BookDemoSteps: React.FC = () => {
  return (
    <section className="book-demo-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["What Happens During the Demo?"]} />
        <Reveal direction="up" delay={0.1}>
          <h3 className="pricing-sec-subtitle">A Simple Three-Step Process</h3>
        </Reveal>

        <div className="demo-steps-grid">
          {steps.map((item, idx) => (
            <Reveal
              key={idx}
              direction="up"
              delay={Math.min(idx * 0.1 + 0.15, 0.4)}
              className="demo-step-card"
            >
              <div className="step-badge">{item.step}</div>
              <h4 className="step-title">{item.title}</h4>
              <p className="step-desc">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookDemoSteps;
