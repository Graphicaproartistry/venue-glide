import React from "react";
import { Link } from "react-router-dom";
import "./VenueGlideOverview.css";
import featureBg from "../../images/bg/features-gradient-bg.png";
import { LuShieldCheck, LuCircleCheck, LuTrendingUp, LuBuilding2, LuCheck } from "react-icons/lu";
import { Icon } from "../common/Icon";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";

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
          <Reveal direction="up" delay={0.1} className="col-lg-6 col-md-6 d-flex">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge blue mb-3">
                  <Icon icon={LuShieldCheck} size={24} color="#00D4FF" />
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
                        <Icon icon={LuCheck} size={10} />
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
          </Reveal>

          {/* Card 2: Why Venues Choose VenueGlide */}
          <Reveal direction="up" delay={0.2} className="col-lg-6 col-md-6 d-flex">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge orange mb-3">
                  <Icon icon={LuCircleCheck} size={24} color="#00D4FF" />
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
                        <Icon icon={LuCheck} size={10} />
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
          </Reveal>
        </div>

        {/* ROW 2: Card 3 & Card 4 Side-by-Side */}
        <div className="row g-4 align-items-stretch">
          {/* Card 3: Looking Ahead */}
          <Reveal direction="up" delay={0.1} className="col-lg-6 col-md-6 d-flex">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge pink mb-3">
                  <Icon icon={LuTrendingUp} size={24} color="#00D4FF" />
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
                    "AI (Beta) occupancy forecasting & dynamic pricing",
                    "Advanced member retention analytics",
                    "Automated kiosk & mobile check-in apps",
                    "IoT light & gate access controls integration",
                    "Enterprise multi-centre administration"
                  ].map((item, idx) => (
                    <li key={idx} className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                      <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                        <Icon icon={LuCheck} size={10} />
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
          </Reveal>

          {/* Card 4: Ready to Modernise Your Sports Venue? */}
          <Reveal direction="up" delay={0.2} className="col-lg-6 col-md-6 d-flex">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge green mb-3">
                  <Icon icon={LuBuilding2} size={24} color="#00D4FF" />
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
                        <Icon icon={LuCheck} size={10} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <MagneticButton className="w-100">
                  <Link className="thm-btn agency-btn w-100 text-center py-3" to="/contact" data-cursor="link" style={{ borderRadius: "12px", background: "linear-gradient(135deg, #00D4FF 0%, #0088ff 100%)", color: "#0a0f1e", fontWeight: 700, fontSize: "14px", display: "block" }}>
                    Book Your Personal Demo Today →
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default VenueGlideOverview;
