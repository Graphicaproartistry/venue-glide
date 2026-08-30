import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const inclusions = [
  "Live Product Walkthrough",
  "Personalised Consultation",
  "Workflow Recommendations",
  "Feature Demonstration",
  "Questions & Answers",
  "Platform Overview",
  "Industry Best Practices",
  "No Obligation",
];

const BookDemoWhyBook: React.FC = () => {
  return (
    <section className="book-demo-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["Why Book a Demo?"]} />
        <Reveal direction="up" delay={0.1}>
          <p className="pricing-sec-subtitle">Every demonstration includes:</p>
        </Reveal>

        <div className="why-book-grid">
          {inclusions.map((item, idx) => (
            <Reveal
              key={idx}
              direction="up"
              distance={10}
              delay={Math.min((idx % 4) * 0.06 + 0.15, 0.4)}
              className="why-book-card"
            >
              <i className="far fa-check"></i>
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookDemoWhyBook;
