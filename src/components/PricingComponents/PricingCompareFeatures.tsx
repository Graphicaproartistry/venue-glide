import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

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
        <MaskText as="h2" className="pricing-sec-title" lines={["Compare Features"]} />

        <Reveal direction="up" delay={0.1} className="compare-table-wrapper">
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
        </Reveal>
      </div>
    </section>
  );
};

export default PricingCompareFeatures;
