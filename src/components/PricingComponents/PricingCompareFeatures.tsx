import React from "react";

const featureComparisonData = [
  { feature: "Online Booking", starter: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Membership Management", starter: "✓", pro: "✓", enterprise: "✓" },
  { feature: "CRM", starter: "✓", pro: "✓", enterprise: "✓" },
  { feature: "POS", starter: "—", pro: "✓", enterprise: "✓" },
  { feature: "Coaching", starter: "—", pro: "✓", enterprise: "✓" },
  { feature: "Automation", starter: "—", pro: "✓", enterprise: "✓" },
  { feature: "AI Insights", starter: "—", pro: "✓", enterprise: "✓" },
  { feature: "Multi-Venue", starter: "—", pro: "—", enterprise: "✓" },
  { feature: "API Access", starter: "Limited", pro: "✓", enterprise: "Advanced" },
  { feature: "Priority Support", starter: "—", pro: "✓", enterprise: "✓" },
  { feature: "Dedicated Success Manager", starter: "—", pro: "—", enterprise: "✓" },
];

const PricingCompareFeatures: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Compare Features
        </h2>

        <div className="compare-table-wrapper wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>Starter</th>
                <th>Professional</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {featureComparisonData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.feature}</td>
                  <td>
                    {row.starter === "✓" ? (
                      <span className="compare-check">✓</span>
                    ) : row.starter === "—" ? (
                      <span className="compare-dash">—</span>
                    ) : (
                      row.starter
                    )}
                  </td>
                  <td>
                    {row.pro === "✓" ? (
                      <span className="compare-check">✓</span>
                    ) : row.pro === "—" ? (
                      <span className="compare-dash">—</span>
                    ) : (
                      row.pro
                    )}
                  </td>
                  <td>
                    {row.enterprise === "✓" ? (
                      <span className="compare-check">✓</span>
                    ) : row.enterprise === "—" ? (
                      <span className="compare-dash">—</span>
                    ) : (
                      row.enterprise
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingCompareFeatures;
