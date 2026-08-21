import React from "react";
import "./VenueGlideOverview.css";
import featureBg from "../../images/bg/features-gradient-bg.png";

const VenueGlideOverview: React.FC = () => {
  return (
    <section
      className="venueglide-overview"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      {/* Side Decorative Dot Grid SVGs */}
      <svg
        className="dot-grid-left"
        viewBox="0 0 160 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="dot-pattern-left"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="2" fill="#00ff97" />
        </pattern>
        <rect width="160" height="320" fill="url(#dot-pattern-left)" />
      </svg>

      <svg
        className="dot-grid-right"
        viewBox="0 0 160 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="dot-pattern-right"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="2" fill="#00ff97" />
        </pattern>
        <rect width="160" height="320" fill="url(#dot-pattern-right)" />
      </svg>

      <div className="container">
        <div className="row g-4 align-items-stretch">
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

                <h3 className="card-title" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>
                  Security & Reliability
                </h3>
                <p className="card-desc" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px" }}>
                  Your business data is one of your most valuable assets. VenueGlide is built with enterprise-grade security, secure cloud hosting and modern development practices.
                </p>

                <div className="card-sublabel" style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
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

          {/* Card 2: Why Businesses Choose VenueGlide */}
          <div className="col-lg-6 col-md-6 d-flex wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge orange mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>

                <h3 className="card-title" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>
                  Why Venues Choose VenueGlide
                </h3>
                <p className="card-desc" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px" }}>
                  Sports venues choose VenueGlide because we provide more than software — we provide a complete operational platform for growth:
                </p>

                <div className="card-sublabel" style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
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

        {/* Card 3: Looking Ahead */}
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
          <div className="venueglide-overview-card">
            <div className="icon-badge pink">
              {/* Users / Future Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>

            <h3 className="card-title">Looking Ahead</h3>
            <p className="card-desc">
              The sports industry continues to evolve, and so do we. VenueGlide
              is committed to investing in emerging technologies including
              artificial intelligence, predictive analytics, automation and
              mobile experiences to help sports venues remain competitive in an
              increasingly digital landscape.
            </p>

            <div className="card-sublabel">
              As we continue to expand across Australia and beyond, our focus
              remains the same:
            </div>

            <div className="card-callout-box">
              Building technology that helps sports venues operate smarter, serve
              customers better and achieve sustainable growth.
            </div>
          </div>
        </div>

        {/* Card 4: Ready to Modernise Your Sports Venue? */}
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="600ms">
          <div className="venueglide-overview-card">
            <div className="icon-badge green">
              {/* Laptop / Monitor Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>

            <h3 className="card-title ">
              Ready to Modernise Your Sports Venue?
            </h3>
            <p className="card-desc">
              Whether you manage an indoor cricket centre, a padel club, a tennis
              facility or a multi-sport venue, VenueGlide OS provides
              everything you need to streamline operations and grow your
              business.
            </p>

            <div className="card-cta-box m-0">
              <p>
                Book a personalised demo today and discover why VenueGlide is
                becoming the trusted Sports Venue Management Software for
                Australian venues.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueGlideOverview;
