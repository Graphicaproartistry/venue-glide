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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    iconBg: "rgba(59, 130, 246, 0.15)",
    iconColor: "#60a5fa",
    iconBorder: "rgba(59, 130, 246, 0.3)",
    title: "Online Booking Management",
    description: "Allow customers to book courts, fields, lanes and facilities online 24/7. Features include:",
    items: [
      "Real-time availability",
      "Court scheduling",
      "Court scheduling",
      "Recurring bookings",
      "Automated confirmations",
      "Dynamic pricing",
      "Peak & off-peak pricing",
      "Waitlists",
      "QR Check-in",
    ],
    delay: "100ms",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
    iconBg: "rgba(20, 184, 166, 0.15)",
    iconColor: "#2dd4bf",
    iconBorder: "rgba(20, 184, 166, 0.3)",
    title: "Membership Management Software",
    description: "Manage every membership from one central dashboard.",
    sublabel: "Automate",
    items: [
      "Membership renewals",
      "Direct debit",
      "Family memberships",
      "Attendance tracking",
      "Loyalty programs",
      "Member communication",
      "Digital waivers",
    ],
    delay: "200ms",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    iconBg: "rgba(245, 158, 11, 0.15)",
    iconColor: "#fbbf24",
    iconBorder: "rgba(245, 158, 11, 0.3)",
    title: "Sports Facility POS",
    description: "Sell everything from one integrated Point of Sale.",
    sublabel: "Perfect for",
    items: [
      "Café",
      "Merchandise",
      "Coaching",
      "Equipment hire",
      "Retail",
      "Food & beverages",
      "Gift cards",
    ],
    delay: "300ms",
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
    iconBg: "rgba(244, 63, 94, 0.15)",
    iconColor: "#f43f5e",
    iconBorder: "rgba(244, 63, 94, 0.3)",
    title: "Customer Relationship Management",
    description: "Understand every customer.",
    sublabel: "Track",
    items: [
      "Visit history",
      "Bookings",
      "Memberships",
      "Communication",
      "Payments",
      "Preferences",
      "Marketing campaigns",
    ],
    delay: "400ms",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
    iconBg: "rgba(129, 140, 248, 0.15)",
    iconColor: "#818cf8",
    iconBorder: "rgba(129, 140, 248, 0.3)",
    title: "Coaching Management",
    description: "Manage coaches, sessions and programs.",
    sublabel: "Perfect for",
    items: [
      "Cricket coaching",
      "Tennis coaching",
      "Football academies",
      "Padel coaching",
      "Junior programs",
    ],
    delay: "500ms",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    iconBg: "rgba(34, 197, 94, 0.15)",
    iconColor: "#4ade80",
    iconBorder: "rgba(34, 197, 94, 0.3)",
    title: "Business Reporting",
    description: "Gain complete visibility across your venue.",
    sublabel: "View",
    items: [
      "Revenue",
      "Occupancy",
      "Member retention",
      "Attendance",
      "Peak hours",
      "Staff performance",
      "Coaching revenue",
      "POS sales",
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
        <div className="sec-title-wrap text-center">
          <h2 className="sec-title">
            Powerful Features Designed for <br className="d-none d-md-inline" /> Sports Venues
          </h2>
        </div>

        <div className="row g-4">
          {featureData.map((card, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div
                className="venue-feature-card wow fadeInUp"
                data-wow-delay={card.delay}
                data-wow-duration="600ms"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundColor: card.iconBg,
                    color: card.iconColor,
                    borderColor: card.iconBorder,
                  }}
                >
                  {card.icon}
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.description}</p>
                {card.sublabel && (
                  <p className="card-sublabel">{card.sublabel}</p>
                )}
                <ul className="feature-list">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
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
