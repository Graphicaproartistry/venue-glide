import React from "react";

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
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Everything Included
        </h2>
        <p className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          Every VenueGlide subscription includes:
        </p>

        <div className="everything-grid">
          {includedItems.map((item, idx) => (
            <div
              key={idx}
              className="everything-card wow fadeInUp"
              data-wow-delay={`${(idx % 3) * 100 + 150}ms`}
              data-wow-duration="600ms"
            >
              <div className="everything-icon">
                <i className={item.icon}></i>
              </div>
              <div className="everything-title">{item.title}</div>
            </div>
          ))}
        </div>

        <div className="everything-footer-note wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
          No hidden platform maintenance costs.
        </div>
      </div>
    </section>
  );
};

export default PricingEverythingIncluded;
