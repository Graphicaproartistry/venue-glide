import React from "react";
import "./SportsVenueFeatures.css";
import featureBg from "../../images/bg/features-gradient-bg.png";

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  iconBorder: string;
  title: string;
  description: string;
  sublabel?: string;
  items: string[];
  delay: string;
}

const featureData: FeatureCardProps[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h2v2H8z" />
        <path d="M14 14h2v2h-2z" />
      </svg>
    ),
    iconBg: "rgba(0, 212, 255, 0.15)",
    iconColor: "#00D4FF",
    iconBorder: "rgba(0, 212, 255, 0.3)",
    title: "Online Booking Management",
    description: "Enable court, field and facility bookings online 24/7 with real-time scheduling.",
    sublabel: "Core Capabilities:",
    items: [
      "Real-time court availability",
      "Interactive venue scheduling",
      "Automated SMS confirmations",
      "Peak & off-peak dynamic rates",
      "Waitlist auto-allocation",
      "Instant QR code check-in"
    ],
    delay: "100ms",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    iconBg: "rgba(20, 184, 166, 0.15)",
    iconColor: "#2dd4bf",
    iconBorder: "rgba(20, 184, 166, 0.3)",
    title: "Membership Management",
    description: "Automate memberships, recurring billing and member perks from one dashboard.",
    sublabel: "Automate Operations:",
    items: [
      "Automated direct debit billing",
      "Family & multi-tier plans",
      "Digital waiver signing",
      "Member attendance tracking",
      "Automated renewal reminders",
      "Loyalty rewards program"
    ],
    delay: "200ms",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="10" y2="15" />
      </svg>
    ),
    iconBg: "rgba(245, 158, 11, 0.15)",
    iconColor: "#fbbf24",
    iconBorder: "rgba(245, 158, 11, 0.3)",
    title: "Sports Facility POS",
    description: "Sell retail equipment, café items, coaching sessions and rentals seamlessly.",
    sublabel: "Point of Sale Integration:",
    items: [
      "Pro shop retail & inventory",
      "Café & food ordering",
      "Equipment hire tracking",
      "Coaching package checkout",
      "Digital gift card redemption",
      "EFT POS hardware sync"
    ],
    delay: "300ms",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    iconBg: "rgba(244, 63, 94, 0.15)",
    iconColor: "#f43f5e",
    iconBorder: "rgba(244, 63, 94, 0.3)",
    title: "Customer CRM",
    description: "Build lasting player relationships with complete historical activity tracking.",
    sublabel: "Customer Insights:",
    items: [
      "Complete player visit timeline",
      "Booking & spending history",
      "Automated re-engagement",
      "Targeted SMS & Email campaigns",
      "Player preference profiles",
      "Integrated communication log"
    ],
    delay: "400ms",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    iconBg: "rgba(129, 140, 248, 0.15)",
    iconColor: "#818cf8",
    iconBorder: "rgba(129, 140, 248, 0.3)",
    title: "Coaching Management",
    description: "Organize coaches, private sessions, junior clinics and group academies.",
    sublabel: "Academy & Coaching:",
    items: [
      "Cricket & Tennis academies",
      "Padel & Football coaching",
      "Private lesson scheduling",
      "Coach roster management",
      "Automated student attendance",
      "Term package payments"
    ],
    delay: "500ms",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    iconBg: "rgba(34, 197, 94, 0.15)",
    iconColor: "#4ade80",
    iconBorder: "rgba(34, 197, 94, 0.3)",
    title: "Business Reporting",
    description: "Gain 360-degree operational visibility into court utilization and revenue.",
    sublabel: "Executive Analytics:",
    items: [
      "Real-time revenue metrics",
      "Peak court utilization stats",
      "Member retention rate analytics",
      "Staff performance reporting",
      "POS sales breakdown",
      "Automated financial exports"
    ],
    delay: "600ms",
  },
];

const SportsVenueFeatures: React.FC = () => {
  return (
    <section
      className="sports-venue-features bg_img"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <div className="sec-title-wrap text-center mb-5">
          <span className="sub-title d-inline-flex align-items-center gap-2 px-3 py-1 mb-2 rounded-pill text-uppercase fw-semibold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Engineered for Sports Venues
          </span>
          <h2 className="sec-title">
            Powerful Features Designed for <br className="d-none d-md-inline" /> Modern Sports Facilities
          </h2>
        </div>

        <div className="row g-4 align-items-stretch">
          {featureData.map((card, idx) => (
            <div className="col-lg-4 col-md-6 d-flex" key={idx}>
              <div
                className="venue-feature-card w-100 d-flex flex-column justify-content-between wow fadeInUp"
                data-wow-delay={card.delay}
                data-wow-duration="600ms"
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div
                      className="icon-box mb-0"
                      style={{
                        backgroundColor: card.iconBg,
                        color: card.iconColor,
                        borderColor: card.iconBorder,
                      }}
                    >
                      {card.icon}
                    </div>
                    <span className="badge rounded-pill" style={{ background: card.iconBg, color: card.iconColor, fontSize: "10px", padding: "5px 10px" }}>
                      Feature 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc" style={{ minHeight: "44px" }}>{card.description}</p>

                  {card.sublabel && (
                    <p className="card-sublabel" style={{ color: card.iconColor, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {card.sublabel}
                    </p>
                  )}
                </div>

                <ul className="feature-list mt-2">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="d-flex align-items-center gap-2 mb-2">
                      <span className="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0" style={{ width: "16px", height: "16px", background: card.iconBg, color: card.iconColor }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.8)", fontWeight: 400 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsVenueFeatures;

