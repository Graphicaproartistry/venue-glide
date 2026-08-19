import React from "react";

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
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          What Happens During the Demo?
        </h2>
        <h3 className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          A Simple Three-Step Process
        </h3>

        <div className="demo-steps-grid">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="demo-step-card wow fadeInUp"
              data-wow-delay={`${idx * 100 + 150}ms`}
              data-wow-duration="600ms"
            >
              <div className="step-badge">{item.step}</div>
              <h4 className="step-title">{item.title}</h4>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookDemoSteps;
