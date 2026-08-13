import React from "react";

const SolutionApproach: React.FC = () => {
  return (
    <section className="solution-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Content */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="600ms">
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#00ff97",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              Built Around the Way Sports Venues Operate
            </span>
            <h2 className="solution-sec-title">Our Approach</h2>

            <p
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "14px",
              }}
            >
              We don’t believe in one-size-fits-all software.
            </p>

            <p className="solution-sec-desc">
              VenueGlide is designed specifically for sports businesses, with flexible workflows, configurable booking rules, membership options and reporting tools that adapt to your venue—not the other way around.
            </p>

            <p className="solution-sec-desc">
              Whether your goal is to improve efficiency, grow memberships or deliver a better customer experience, VenueGlide provides the tools to help you succeed.
            </p>
          </div>

          {/* Right: Mobile Graphic Mockup */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
            <div className="solution-mobile-mockup">
              <div className="mockup-app-title">VenueGlide OS</div>
              <div className="mockup-input-box mb-3">
                <span>Create Account</span>
                <span style={{ color: "#00ff97" }}>✓</span>
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#94a3b8",
                  textAlign: "left",
                  marginBottom: "6px",
                }}
              >
                Your Email
              </div>
              <div className="mockup-input-box mb-4">
                <span>venue@venueglide.com</span>
                <span style={{ color: "#00ff97" }}>✓</span>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg, #00ff97 0%, #00c875 100%)",
                  color: "#00020f",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "12px",
                  borderRadius: "10px",
                }}
              >
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionApproach;
