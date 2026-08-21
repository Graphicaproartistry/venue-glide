import React from "react";
import { Link } from "react-router-dom";
import "./VenueGlideOverview.css";
import featureBg from "../../images/bg/features-gradient-bg.png";

const VenueGlideOverview: React.FC = () => {
  return (
    <section
      className="venueglide-overview py-5"
      style={{ backgroundImage: `url(${featureBg})`, background: "linear-gradient(180deg, #00020F 0%, #080D1F 100%)" }}
    >
      <div className="container">
        {/* ROW 1: Card 1 & Card 2 */}
        <div className="row g-4 align-items-stretch mb-4">
          {/* Card 1: Security & Reliability */}
          <div className="col-lg-6 col-md-6 d-flex wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge blue mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <h3 className="card-title" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px", minHeight: "56px", display: "flex", alignItems: "center" }}>
                  Security & Reliability
                </h3>
                <p className="card-desc" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px", minHeight: "72px" }}>
                  Your business data is one of your most valuable assets. VenueGlide is built with enterprise-grade security, secure cloud hosting and modern development practices.
                </p>

                <div className="card-sublabel" style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px", minHeight: "26px", display: "flex", alignItems: "center" }}>
                  OUR PLATFORM INCLUDES:
                </div>

                <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                  {[
                    "Secure cloud infrastructure",
                    "Encrypted data transmission",
                    "Role-based user permissions",
                    "Automated daily cloud backups",
                    "99.9% Reliable platform uptime",
                    "PCI-compliant payment integrations",
                    "Continuous security updates"
                  ].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                      <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer-text pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "12.5px", color: "rgba(255, 255, 255, 0.6)", fontStyle: "italic" }}>
                We are committed to delivering a platform Australian businesses can trust.
              </div>
            </div>
          </div>

          {/* Card 2: Why Venues Choose VenueGlide */}
          <div className="col-lg-6 col-md-6 d-flex wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge orange mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>

                <h3 className="card-title" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px", minHeight: "56px", display: "flex", alignItems: "center" }}>
                  Why Venues Choose VenueGlide
                </h3>
                <p className="card-desc" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px", minHeight: "72px" }}>
                  Sports venues choose VenueGlide because we provide more than software — we provide a complete operational platform for growth:
                </p>

                <div className="card-sublabel" style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px", minHeight: "26px", display: "flex", alignItems: "center" }}>
                  CUSTOMER BENEFITS:
                </div>

                <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                  {[
                    "Simplified 24/7 venue operations",
                    "Increased booking efficiency & court utilization",
                    "Exceptional player & member booking experience",
                    "15+ Hours weekly manual admin saved",
                    "Real-time executive financial reporting",
                    "360-Degree operational visibility",
                    "Single unified OS replacing disconnected tools"
                  ].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                      <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer-text pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "12.5px", color: "rgba(255, 255, 255, 0.6)", fontStyle: "italic" }}>
                Built to deliver immediate ROI and administrative peace of mind.
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Card 3 & Card 4 Side-by-Side */}
        <div className="row g-4 align-items-stretch">
          {/* Card 3: Looking Ahead */}
          <div className="col-lg-6 col-md-6 d-flex wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge pink mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                <h3 className="card-title" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px", minHeight: "56px", display: "flex", alignItems: "center" }}>
                  Looking Ahead
                </h3>
                <p className="card-desc" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px", minHeight: "72px" }}>
                  The sports industry continues to evolve, and so do we. VenueGlide is committed to investing in emerging technologies to help sports venues remain competitive.
                </p>

                <div className="card-sublabel" style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px", minHeight: "26px", display: "flex", alignItems: "center" }}>
                  OUR FUTURE ROADMAP FOCUS:
                </div>

                <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                  {[
                    "AI-Driven occupancy forecasting & dynamic pricing",
                    "Advanced member retention analytics",
                    "Automated kiosk & mobile check-in apps",
                    "IoT light & gate access controls integration",
                    "Enterprise multi-centre administration"
                  ].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                      <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer-text pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "12.5px", color: "rgba(255, 255, 255, 0.6)", fontStyle: "italic" }}>
                Building technology that helps sports venues operate smarter and grow.
              </div>
            </div>
          </div>

          {/* Card 4: Ready to Modernise Your Sports Venue? */}
          <div className="col-lg-6 col-md-6 d-flex wow fadeInUp" data-wow-delay="400ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge green mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>

                <h3 className="card-title" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px", minHeight: "56px", display: "flex", alignItems: "center" }}>
                  Ready to Modernise Your Sports Venue?
                </h3>
                <p className="card-desc" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px", minHeight: "72px" }}>
                  Whether you manage an indoor cricket centre, a padel club, a tennis facility or a multi-sport complex, VenueGlide OS provides everything you need.
                </p>

                <div className="card-sublabel" style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px", minHeight: "26px", display: "flex", alignItems: "center" }}>
                  NEXT STEPS FOR YOUR VENUE:
                </div>

                <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                  {[
                    "Schedule a 1-on-1 personalized platform walkthrough",
                    "Customized software setup tailored to your facility",
                    "Dedicated Australian onboarding specialist team"
                  ].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                      <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <Link className="thm-btn agency-btn w-100 text-center py-3" to="/contact" style={{ borderRadius: "12px", background: "linear-gradient(135deg, #00D4FF 0%, #0088ff 100%)", color: "#0a0f1e", fontWeight: 700, fontSize: "14px", display: "block" }}>
                  Book Your Personal Demo Today →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueGlideOverview;
