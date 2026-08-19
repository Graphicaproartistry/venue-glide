import React from "react";

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
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Why Book a Demo?
        </h2>
        <p className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          Every demonstration includes:
        </p>

        <div className="why-book-grid">
          {inclusions.map((item, idx) => (
            <div
              key={idx}
              className="why-book-card wow fadeInUp"
              data-wow-delay={`${(idx % 4) * 80 + 150}ms`}
              data-wow-duration="600ms"
            >
              <i className="far fa-check"></i>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookDemoWhyBook;
