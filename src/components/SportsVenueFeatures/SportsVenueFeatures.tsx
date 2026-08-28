import React from "react";
import "./SportsVenueFeatures.css";
import featureBg from "../../images/bg/features-gradient-bg.png";
import { 
  LuCalendarCheck, 
  LuUsers, 
  LuCreditCard, 
  LuHeartHandshake, 
  LuGraduationCap, 
  LuChartColumn, 
  LuZap,
  LuCheck 
} from "react-icons/lu";
import { Icon } from "../common/Icon";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
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
    icon: LuCalendarCheck,
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
    icon: LuUsers,
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
    icon: LuCreditCard,
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
    icon: LuHeartHandshake,
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
    icon: LuGraduationCap,
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
    icon: LuChartColumn,
    iconBg: "rgba(0, 212, 255, 0.15)",
    iconColor: "#00D4FF",
    iconBorder: "rgba(0, 212, 255, 0.3)",
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
            <Icon icon={LuZap} size={14} />
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
                      <Icon icon={card.icon} size={22} />
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
                        <Icon icon={LuCheck} size={10} />
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
