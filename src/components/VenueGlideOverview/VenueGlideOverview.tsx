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
        <div className="row g-4">
          {/* Card 1: Security & Reliability */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card">
              <div className="icon-badge blue">
                {/* Security Shield Icon */}
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              <h3 className="card-title">Security & Reliability</h3>
              <p className="card-desc">
                Your business data is one of your most valuable assets.
                VenueGlide is built with enterprise-grade security, secure cloud
                hosting and modern development practices to help protect your
                information.
              </p>

              <div className="card-sublabel">Our platform includes:</div>
              <ul className="card-list bullets">
                <li>Secure cloud infrastructure</li>
                <li>Encrypted data transmission</li>
                <li>Role-based user permissions</li>
                <li>Automated backups</li>
                <li>Reliable uptime</li>
                <li>Secure payment integrations</li>
                <li>Continuous platform improvements</li>
              </ul>

              <div className="card-footer-text">
                We are committed to delivering a platform businesses can trust.
              </div>
            </div>
          </div>

          {/* Card 2: Why Businesses Choose VenueGlide */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card">
              <div className="icon-badge orange">
                {/* Clock / Checkmark Icon */}
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>

              <h3 className="card-title">Why Businesses Choose VenueGlide</h3>
              <p className="card-desc">
                Sports venues choose VenueGlide because we provide more than
                software — we provide a complete operational platform.
              </p>

              <div className="card-sublabel">Our customers benefit from:</div>
              <ul className="card-list checks">
                <li>Simplified operations</li>
                <li>Increased booking efficiency</li>
                <li>Better customer experiences</li>
                <li>Reduced manual administration</li>
                <li>Improved reporting</li>
                <li>Greater operational visibility</li>
                <li>Business growth through automation</li>
                <li>
                  A single platform instead of multiple disconnected systems
                </li>
              </ul>
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
      </div>
    </section>
  );
};

export default VenueGlideOverview;
