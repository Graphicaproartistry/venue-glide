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
      "Manage online bookings",
      "Track memberships and renewal",
      "Process payments securely",
      "Operate an integrated point of sale",
      "Schedule coaching programs",
      "Monitor venue performance",
      "Communicate with members",
      "Generate real-time reports",
      "Access AI-powered business insights",
    ],
    footer: "Everything works together from one central platform.",
  },
  {
    id: 2,
    title: "Built Specifically for Sports Venues",
    description:
      "Unlike generic booking software, VenueGlide OS has been designed specifically for sports and recreation businesses.",
    sublabel: "Our platform supports:",
    bullets: [
      "Indoor Cricket Centres",
      "Padel Clubs",
      "Tennis Clubs",
      "Football Centres",
      "Basketball Facilities",
      "Badminton Centres",
      "Pickleball Clubs",
      "Squash Centres",
      "Community Recreation Centres",
      "Sports Academies",
      "Multi-Sport Venues",
    ],
    footer:
      "Whether you're managing a single venue or multiple locations, VenueGlide adapts to your operational requirements.",
  },
  {
    id: 3,
    title: "Technology That Works for Your Business",
    description:
      "VenueGlide OS is built using modern cloud infrastructure, enabling venue operators to manage their business securely from anywhere.",
    sublabel: "Key capabilities include:",
    bullets: [
      "Real-time booking management",
      "Membership management",
      "Sports facility CRM",
      "Integrated Point of Sale",
      "Secure online payments",
      "Staff management",
      "Customer communication",
      "Financial reporting",
      "Multi-location management",
      "Business analytics",
      "API integrations",
      "Mobile accessibility",
      "AI-powered insights",
    ],
    footer: "As your business grows, VenueGlide grows with you.",
  },
];

const WhyVenueGlide: React.FC = () => {
  return (
    <section
      className="why-venueglide"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="sec-title-wrap text-center wow fadeInUp" data-wow-duration="600ms">
          <span className="sub-title">Why Choose Us</span>
          <h2 className="sec-title">Why VenueGlide?</h2>
        </div>

        {/* 3 Cards Row */}
        <div className="row g-4 justify-content-center">
          {cardData.map((card, idx) => (
            <div key={card.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(idx + 1) * 100}ms`} data-wow-duration="600ms">
              <div className="why-venueglide-card">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.description}</p>
                <div className="card-sublabel">{card.sublabel}</div>
                <ul className="feature-list">
                  {card.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
                <div className="card-footer-note">{card.footer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVenueGlide;
