import React from "react";
import "./WhyVenueGlide.css";

// Background image import
import featureBg from "../../images/bg/features-gradient-bg.png";

interface CardData {
  id: number;
  title: string;
  description: string;
  sublabel: string;
  bullets: string[];
  footer: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "More Than Booking Software",
    description:
      "Many businesses rely on separate systems for bookings, memberships, payments, reporting and customer management. VenueGlide OS replaces these disconnected tools with one fully integrated operating system.",
    sublabel: "With a single login, venue managers can:",
    bullets: [
      "Manage online court bookings",
      "Track memberships & auto-renewals",
      "Process payments & direct debits",
      "Operate integrated facility POS",
      "Schedule coaching & academies",
      "Monitor real-time venue performance",
      "Communicate with active members",
      "Generate automated financial reports",
      "Access AI-powered business insights",
    ],
    footer: "Everything works together from one central cloud platform.",
  },
  {
    id: 2,
    title: "Built Specifically for Sports Venues",
    description:
      "Unlike generic booking software, VenueGlide OS has been engineered specifically for modern Australian sports and recreation facilities.",
    sublabel: "Our platform supports:",
    bullets: [
      "Indoor Cricket Arenas & Nets",
      "Padel & Tennis Clubs",
      "Football & Futsal Turf Facilities",
      "Basketball & Volleyball Stadiums",
      "Badminton & Pickleball Clubs",
      "Squash & Racquetball Centres",
      "Community Recreation Hubs",
      "Junior & Pro Sports Academies",
      "Multi-Sport Facility Complexes",
    ],
    footer:
      "Whether managing single or multi-site venues, VenueGlide adapts perfectly.",
  },
  {
    id: 3,
    title: "Technology Built for Growth",
    description:
      "VenueGlide OS is powered by modern cloud infrastructure, enabling venue operators to manage their business securely from anywhere, anytime.",
    sublabel: "Key platform capabilities include:",
    bullets: [
      "24/7 Real-time booking management",
      "Automated membership recurring billing",
      "Integrated sports facility CRM",
      "Hardware-synced Point of Sale (POS)",
      "Secure online payment gateway",
      "Staff & coach roster scheduling",
      "Executive analytics & Xero sync",
      "Multi-location cloud dashboard",
      "AI-driven revenue optimization",
    ],
    footer: "As your sports business scales, VenueGlide grows with you.",
  },
];

const WhyVenueGlide: React.FC = () => {
  return (
    <section
      className="why-venueglide py-5"
      style={{ backgroundImage: `url(${featureBg})`, background: "linear-gradient(180deg, #080D1F 0%, #00020F 100%)" }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="sec-title-wrap text-center mb-5 wow fadeInUp" data-wow-duration="600ms">
          <span className="sub-title d-inline-flex align-items-center gap-2 px-3 py-1 mb-2 rounded-pill text-uppercase fw-semibold" style={{ background: "rgba(0, 212, 255, 0.12)", color: "#00D4FF", border: "1px solid rgba(0, 212, 255, 0.25)", fontSize: "12px", letterSpacing: "1px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            WHY CHOOSE US
          </span>
          <h2 className="sec-title" style={{ fontSize: "38px", fontWeight: 700, color: "#fff" }}>
            Why VenueGlide?
          </h2>
        </div>

        {/* Equalized 3 Cards Row */}
        <div className="row g-4 align-items-stretch">
          {cardData.map((card, idx) => (
            <div key={card.id} className="col-lg-4 col-md-6 d-flex wow fadeInUp" data-wow-delay={`${(idx + 1) * 100}ms`} data-wow-duration="600ms">
              <div 
                className="why-venueglide-card w-100 d-flex flex-column justify-content-between p-4 p-md-4 rounded-4"
                style={{
                  background: "rgba(13, 20, 36, 0.75)",
                  backdropFilter: "blur(12px)",
                  border: idx === 1 ? "1px solid #00D4FF" : "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: idx === 1 ? "0 15px 35px rgba(0, 212, 255, 0.15)" : "0 10px 30px rgba(0, 0, 0, 0.4)",
                  transition: "all 0.3s ease"
                }}
              >
                <div>
                  <h3 className="card-title" style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "12px", minHeight: "48px", display: "flex", alignItems: "center" }}>
                    {card.title}
                  </h3>
                  <p className="card-desc" style={{ fontSize: "13.5px", color: "rgba(255, 255, 255, 0.75)", lineHeight: "1.6", marginBottom: "16px", minHeight: "68px" }}>
                    {card.description}
                  </p>
                  <div className="card-sublabel" style={{ fontSize: "11.5px", color: "#00D4FF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px", minHeight: "26px", display: "flex", alignItems: "center" }}>
                    {card.sublabel}
                  </div>
                  <ul className="feature-list list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                    {card.bullets.map((bullet, index) => (
                      <li key={index} className="d-flex align-items-center gap-2" style={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                        <span className="d-inline-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.15)", color: "#00D4FF" }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer-note pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "12.5px", color: "rgba(255, 255, 255, 0.6)", fontStyle: "italic" }}>
                  {card.footer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVenueGlide;
