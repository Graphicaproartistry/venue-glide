import React from "react";

const PlatformBuiltSpecifically: React.FC = () => {
  return (
    <section className="platform-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Content */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="600ms">
            <h2 className="platform-sec-title">
              Built Specifically for Sports Venues
            </h2>
            <p className="platform-sec-desc">
              Most venue operators rely on several disconnected systems to manage daily operations. VenueGlide replaces those fragmented tools with one unified platform designed specifically for the sports industry. Whether you operate an indoor cricket centre, a padel club, a tennis academy or a multi-sport venue, every feature has been designed around the way sports facilities actually operate.
            </p>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
            <div className="platform-dashboard-mockup">
              <div className="mockup-header">
                <span className="title">Venue Performance Dashboard</span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#00ff97",
                    background: "rgba(0,255,151,0.1)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                  }}
                >
                  ● Live Data
                </span>
              </div>

              <div className="mockup-stats-row mb-4">
                <div className="mockup-stat-box">
                  <div className="label">Total Bookings</div>
                  <div className="val">12,325</div>
                  <div className="change">↑ +12.4%</div>
                </div>
                <div className="mockup-stat-box">
                  <div className="label">Active Members</div>
                  <div className="val">1,061</div>
                  <div className="change">↑ +8.2%</div>
                </div>
                <div className="mockup-stat-box">
                  <div className="label">Monthly Revenue</div>
                  <div className="val">$118,095</div>
                  <div className="change">↑ +15.3%</div>
                </div>
              </div>

              {/* Progress Bar / Activity */}
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "13px",
                    color: "#cbd5e1",
                    marginBottom: "8px",
                  }}
                >
                  <span>Court Utilization Rate</span>
                  <span style={{ color: "#00ff97", fontWeight: "bold" }}>
                    89.4%
                  </span>
                </div>
                <div
                  style={{
                    height: "8px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "89.4%",
                      height: "100%",
                      background: "linear-gradient(90deg, #00ff97, #00c875)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformBuiltSpecifically;
