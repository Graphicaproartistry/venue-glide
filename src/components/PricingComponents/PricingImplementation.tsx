import React from "react";

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
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Implementation & Onboarding
        </h2>
        <h3 className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          A Smooth Transition to VenueGlide
        </h3>

        <div className="implementation-intro wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
          <p>Moving to a new management platform doesn't have to be complicated.</p>
          <p>Our onboarding team works with your venue to ensure a smooth implementation with minimal disruption.</p>
        </div>

        <h4 className="process-header-title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
          Our Process
        </h4>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="process-card wow fadeInUp"
              data-wow-delay={`${(step.num - 1) * 80 + 200}ms`}
              data-wow-duration="600ms"
            >
              <div className="process-num">{step.num}</div>
              <div className="process-title">{step.title}</div>
            </div>
          ))}
        </div>

        <div className="implementation-closing wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
          Whether you're switching from spreadsheets or another venue management system, we'll help you every step of the way.
        </div>
      </div>
    </section>
  );
};

export default PricingImplementation;
