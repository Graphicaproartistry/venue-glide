import React from "react";
import comparisonBg from "../../../images/bg/comparison-bg.png";

const ComparisonSection: React.FC = () => {
  const venueGlideFeatures = [
    "Sports Court & Field Booking Software",
    "Automated Membership Management",
    "Integrated Venue CRM System",
    "Sports Facility Point of Sale (POS)",
    "Instant Payment & Direct Debit Processing",
    "Real-time Executive & Financial Reporting",
    "Smart Marketing & Roster Automation",
    "Native iOS & Android Mobile Apps"
  ];

  const aiQueries = [
    { query: "How much revenue did we generate today?", category: "Financial Insights" },
    { query: "Which members haven't visited recently?", category: "Retention Alert" },
    { query: "Show tomorrow's court booking occupancy.", category: "Schedule Matrix" },
    { query: "Predict next month's peak revenue hours.", category: "AI Forecasting" },
    { query: "Generate a automated monthly financial summary.", category: "Instant Reports" }
  ];

  return (
    <section className="comparison-container mt-5">
      <div className="row g-4">
        {/* ================= LEFT CARD: Why Choose VenueGlide ================= */}
        <div className="col-lg-6">
          <div
            className="comparison-list xb-border bg_img p-4 p-md-5 rounded-4 h-100 pos-rel"
            style={{
              backgroundImage: `url(${comparisonBg})`,
              backgroundSize: "cover",
              border: "1px solid rgba(0, 255, 151, 0.2)",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(12px)"
            }}
          >
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge rounded-pill text-uppercase px-3 py-2 d-inline-flex align-items-center gap-2" style={{ background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF", border: "1px solid rgba(0, 212, 255, 0.3)", fontSize: "11px", letterSpacing: "1px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
                </svg>
                Unified Venue Operating System
              </span>
            </div>

            <h3 className="xb-item--title mb-4" style={{ fontSize: "24px", fontWeight: 700, color: "#fff", lineHeight: "1.3" }}>
              Why Australian Sports Venues Choose VenueGlide
            </h3>

            <div className="row g-3">
              {venueGlideFeatures.map((feature, i) => (
                <div className="col-12 col-sm-6 d-flex" key={i}>
                  <div className="d-flex align-items-center gap-2 p-3 rounded-3 w-100 h-100" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.08)", minHeight: "64px", transition: "all 0.3s ease" }}>
                    <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "22px", height: "22px", borderRadius: "50%", background: "linear-gradient(135deg, #00D4FF 0%, #0088ff 100%)", color: "#0a0f1e" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255, 255, 255, 0.9)", lineHeight: "1.3" }}>
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Center "VS / AI" badge */}
            <span className="comparison-vs-logo xb-border d-none d-lg-flex align-items-center justify-content-center fw-bold" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #00D4FF, #3b82f6)", color: "#000", fontSize: "14px", border: "3px solid #0a0f1e", position: "absolute", right: "-24px", top: "50%", transform: "translateY(-50%)", zIndex: 10, boxShadow: "0 0 20px rgba(0, 212, 255, 0.6)" }}>
              AI
            </span>
          </div>
        </div>

        {/* ================= RIGHT CARD: AI Decisions ================= */}
        <div className="col-lg-6">
          <div
            className="comparison-list xb-border bg_img p-4 p-md-5 rounded-4 h-100"
            style={{
              backgroundImage: `url(${comparisonBg})`,
              backgroundSize: "cover",
              border: "1px solid rgba(0, 212, 255, 0.25)",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(12px)"
            }}
          >
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge rounded-pill text-uppercase px-3 py-2 d-inline-flex align-items-center gap-2" style={{ background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF", border: "1px solid rgba(0, 212, 255, 0.3)", fontSize: "11px", letterSpacing: "1px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
                </svg>
                AI Business Intelligence
              </span>
            </div>

            <h3 className="xb-item--title mb-2" style={{ fontSize: "24px", fontWeight: 700, color: "#fff", lineHeight: "1.3" }}>
              Smarter Decisions Powered by AI
            </h3>
            <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.65)", marginBottom: "20px" }}>
              Ask natural language questions to gain instant venue operational insights:
            </p>

            <div className="d-flex flex-column gap-2 mb-4">
              {aiQueries.map((item, i) => (
                <div className="p-2 px-3 rounded-3 d-flex align-items-center justify-content-between" key={i} style={{ background: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(0, 212, 255, 0.15)" }}>
                  <div className="d-flex align-items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span style={{ fontSize: "13px", color: "#e2e8f0", fontWeight: 500 }}>
                      "{item.query}"
                    </span>
                  </div>
                  <span className="badge rounded-2" style={{ fontSize: "10px", background: "rgba(0, 212, 255, 0.1)", color: "#00D4FF", border: "1px solid rgba(0, 212, 255, 0.2)" }}>
                    {item.category}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-3 text-center d-flex align-items-center justify-content-center gap-2" style={{ background: "linear-gradient(90deg, rgba(0, 212, 255, 0.12) 0%, rgba(59, 130, 246, 0.12) 100%)", border: "1px solid rgba(0, 212, 255, 0.25)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span style={{ fontSize: "13px", color: "#fff", fontWeight: 500 }}>
                VenueGlide AI transforms raw data into actionable revenue strategies in seconds.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

