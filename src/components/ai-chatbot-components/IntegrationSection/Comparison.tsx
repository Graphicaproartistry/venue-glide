import React from "react";
import comparisonBg from "../../../images/bg/comparison-bg.png";

interface ComparisonItem {
  title: string;
  icon: string;
  points: string[];
}

const ComparisonSection: React.FC = () => {
  const comparisons: ComparisonItem[] = [
    {
      title: "Why Australian Sports Venues Choose VenueGlide",
      icon: "✅",
      points: [
        " Sports booking software",
        "Membership management",
        "Venue CRM",
        "POS",
        "Payment processing",
        " Reporting",
        "  Automation",
        "  AI",
        "  Mobile apps",
        "  into one connected operating system.",
      ],
    },
    {
      title: "Smarter Decisions Powered by Artificial Intelligence",
      icon: "✅",
      points: [
        "Ask questions naturally.",
        "Examples",
        "How much revenue did we generate today?",
        "Which members haven't visited recently?",
        "Show tomorrow's bookings.",
        "Predict next month's occupancy.",
        "Generate a financial report.",
        "VenueGlide AI transforms your venue data into meaningful business insights in seconds",
      ],
    },
  ];

  return (
    <section className="comparison-container mt-5">
      <div className="row mt-none-30">
        {comparisons.map((block, index) => (
          <div className="col-lg-6 mt-30" key={index}>
            <div
              className={`comparison-list xb-border bg_img ${
                index === 0 ? "comparison--without" : "comparison--with"
              }`}
              style={{ backgroundImage: `url(${comparisonBg})` }}
            >
              <h3 className="xb-item--title">{block.title}</h3>

              <ul className="xb-item--list list-unstyled">
                {block.points.map((point, i) => (
                  <li key={i}>
                    <span className="comparison-icon">{block.icon}</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Center "v/s" icon only on first block */}
              {index === 0 && (
                <span className="comparison-vs-logo xb-border">AI</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
