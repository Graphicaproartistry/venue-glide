import React from "react";
import featureBg from "../../images/bg/features-gradient-bg.png";
import { LuBuilding2, LuServer, LuBoxes, LuSparkles, LuCheck } from "react-icons/lu";
import { Icon } from "../common/Icon";

const PlatformOverviewCards: React.FC = () => {
  return (
    <section
      className="venueglide-overview py-5"
      style={{ backgroundImage: `url(${featureBg})`, background: "linear-gradient(180deg, #080D1F 0%, #00020F 100%)" }}
    >
      <div className="container">
        {/* ROW 1: Card 1 & Card 2 */}
        <div className="row g-4 align-items-stretch mb-4">
          {/* Card 1: Built for Every Sport */}
          <div className="col-lg-6 col-md-6 d-flex wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge blue mb-3">
                  <Icon icon={LuBuilding2} size={24} color="#00D4FF" />
                </div>

                <h3 className="card-title" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px", minHeight: "30px" }}>
                  Built for Every Sport
                </h3>
                <p className="card-desc" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px", minHeight: "44px" }}>
                  VenueGlide OS is tailored specifically for sports and recreation facilities across Australia:
                </p>

                <div className="card-sublabel" style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
                  SUPPORTED FACILITY TYPES:
                </div>

                <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                  {[
                    "Indoor Cricket Arenas & Nets",
                    "Padel & Tennis Clubs",
                    "Football & Futsal Turf Centres",
                    "Basketball & Volleyball Facilities",
                    "Badminton & Pickleball Clubs",
                    "Squash & Racquetball Centres",
                    "Junior & Pro Sports Academies",
                    "Community Recreation Centres",
                    "Multi-Sport Facility Complexes"
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
                Every venue can customise resources, pricing, availability rules and memberships.
              </div>
            </div>
          </div>

          {/* Card 2: A Platform That Grows With Your Business */}
          <div className="col-lg-6 col-md-6 d-flex wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge orange mb-3">
                  <Icon icon={LuServer} size={24} color="#00D4FF" />
                </div>

                <h3 className="card-title" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px", minHeight: "30px" }}>
                  Scalable Enterprise Infrastructure
                </h3>
                <p className="card-desc" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px", minHeight: "44px" }}>
                  Whether operating one venue or a national network of facilities, VenueGlide scales with your business:
                </p>

                <div className="card-sublabel" style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
                  ENTERPRISE CAPABILITIES INCLUDE:
                </div>

                <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                  {[
                    "Multi-location cloud management",
                    "Unlimited staff & coach accounts",
                    "Role-based security permissions",
                    "99.9% Uptime cloud hosting",
                    "REST API & Webhook integrations",
                    "Automated administrative workflows",
                    "Real-time executive reporting",
                    "Centralised member data & CRM",
                    "High availability cloud architecture"
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
                As your sports business expands, VenueGlide seamlessly scales with you.
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Card 3 & Card 4 Side-by-Side */}
        <div className="row g-4 align-items-stretch">
          {/* Card 3: Connect With Your Favourite Business Tools */}
          <div className="col-lg-6 col-md-6 d-flex wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge pink mb-3">
                  <Icon icon={LuBoxes} size={24} color="#00D4FF" />
                </div>

                <h3 className="card-title" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px", minHeight: "30px" }}>
                  Seamless Software Integrations
                </h3>
                <p className="card-desc" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px", minHeight: "44px" }}>
                  VenueGlide integrates seamlessly with your existing software stack and hardware:
                </p>

                <div className="card-sublabel" style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
                  INTEGRATIONS & COMPATIBILITY:
                </div>

                <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                  {[
                    "Stripe & Direct Debit Processing",
                    "Xero & QuickBooks Sync",
                    "Square POS & Hardware Terminals",
                    "Google Calendar & iCal Booking Sync",
                    "Microsoft 365 & Outlook Integration",
                    "Zapier Automated Workflows",
                    "Twilio SMS & Email Notifications",
                    "Mailchimp Marketing Automation",
                    "Smart Door Access & Turnstile Controls"
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
                Unify your entire tech ecosystem into one single operating platform.
              </div>
            </div>
          </div>

          {/* Card 4: VenueGlide Advantages */}
          <div className="col-lg-6 col-md-6 d-flex wow fadeInUp" data-wow-delay="400ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card w-100 d-flex flex-column justify-content-between p-4 p-md-5 rounded-4">
              <div>
                <div className="icon-badge green mb-3">
                  <Icon icon={LuSparkles} size={24} color="#00D4FF" />
                </div>

                <h3 className="card-title" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "12px", minHeight: "30px" }}>
                  Proven Operational Impact
                </h3>
                <p className="card-desc" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px", minHeight: "44px" }}>
                  Thousands of daily venue operations managed smoothly through intelligent cloud automation:
                </p>

                <div className="card-sublabel" style={{ fontSize: "12px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
                  BUSINESS BENEFITS:
                </div>

                <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                  {[
                    "Cut manual admin workload by 15+ hours weekly",
                    "Maximize court occupancy & peak revenue",
                    "Boost player retention & renewal rates",
                    "Eliminate double-bookings with live scheduling",
                    "Gain real-time financial visibility",
                    "Enhance member & player booking experience",
                    "Streamline staff & coach roster management",
                    "Accelerate sports facility revenue growth",
                    "24/7 Priority Australian customer support"
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
                Built to deliver immediate ROI and operational peace of mind.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverviewCards;
