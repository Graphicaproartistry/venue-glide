import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

interface CardItem {
  id: number;
  title: string;
  desc: string;
  badgeClass: string;
  iconSvg: React.ReactNode;
  bullets: string[];
  slug?: string;
}

const cardItems: CardItem[] = [
  {
    id: 1,
    title: "Indoor Cricket Centres",
    slug: "indoor-cricket-booking-software",
    desc: "Manage lane bookings, memberships, competitions, coaching sessions, birthday parties, tournaments and café sales from one connected platform.",
    badgeClass: "blue",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
    bullets: [
      "Indoor Cricket Centres",
      "Cricket Academies",
      "Training Facilities",
      "Lane Booking",
      "Competition Scheduling",
      "Coaching Management",
      "Memberships",
      "POS",
      "Online Payments",
    ],
  },
  {
    id: 2,
    title: "Padel Clubs",
    slug: "padel-club-management-software",
    desc: "Simplify court bookings, coaching programs, social competitions and member management while maximising court utilisation.",
    badgeClass: "green",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      </svg>
    ),
    bullets: [
      "Court Booking",
      "Coaching Programs",
      "Memberships",
      "Mobile Booking",
      "Court Availability",
      "Payment Processing",
    ],
  },
  {
    id: 3,
    title: "Tennis Clubs",
    slug: "tennis-club-booking-software",
    desc: "Manage tennis court bookings, memberships, coaching, tournaments and club operations through one modern platform.",
    badgeClass: "pink",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M6 12a6 6 0 0 1 6-6M18 12a6 6 0 0 1-6 6" />
      </svg>
    ),
    bullets: [
      "Court Scheduling",
      "Coaching Programs",
      "Club Memberships",
      "Competition Management",
      "Online Payments",
      "Reporting",
    ],
  },
  {
    id: 4,
    title: "Football Centres",
    slug: "football-turf-booking-software",
    desc: "Run five-a-side football venues with advanced pitch scheduling, league management, casual bookings and customer management.",
    badgeClass: "green",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
    bullets: [
      "Pitch Booking",
      "League Scheduling",
      "Team Management",
      "Customer CRM",
      "Payments",
      "Reporting",
    ],
  },
  {
    id: 5,
    title: "Basketball Facilities",
    slug: "basketball-court-booking-software",
    desc: "Manage court hire, coaching sessions, competitions, memberships and retail sales from one platform.",
    badgeClass: "blue",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
      </svg>
    ),
    bullets: [
      "Court Bookings",
      "Coaching",
      "Team Programs",
      "Memberships",
      "POS",
      "Analytics",
    ],
  },
  {
    id: 6,
    title: "Sports Academies",
    desc: "Organise player development, coaching schedules, attendance tracking, memberships and payments.",
    badgeClass: "green",
    iconSvg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    bullets: [
      "Cricket Academies",
      "Football Academies",
      "Tennis Academies",
      "Multi-Sport Academies",
    ],
  },
];



const IndustryGrid: React.FC = () => {
  return (
    <section className="industry-section" id="industries-grid">
      <div className="container">
        <div className="sec-title-wrap text-center mb-5">
          <MaskText as="h2" className="industry-sec-title" lines={["Built Around the Way", "Your Sport Operates"]} />
          <Reveal direction="up" delay={0.1}>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                color: "#cbd5e1",
                maxWidth: "860px",
                margin: "0 auto",
              }}
            >
              Whether you run a high-volume indoor cricket venue, a multi-court padel
              club or a fast-growing sports academy, generic booking systems often
              fall short. VenueGlide OS is built around the actual rules, court
              structures, membership models and booking behaviors of modern sports
              venues. From recurring team registrations to casual court hire and
              coaching academies, VenueGlide adapts to your venue.
            </p>
          </Reveal>
        </div>

        {/* 6 Cards Grid */}
        <div className="row g-4">
          {cardItems.map((card, idx) => (
            <div key={card.id} className="col-lg-4 col-md-6">
              <Reveal
                direction="up"
                distance={20}
                delay={Math.min((idx % 3) * 0.08, 0.24)}
                className="industry-grid-card"
                whileHover={{ y: -6, borderColor: "rgba(0, 212, 255, 0.4)" }}
              >
                <div className={`icon-badge ${card.badgeClass}`}>
                  {card.iconSvg}
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <div className="card-sublabel">Key Features:</div>
                <ul className="industry-bullets">
                  {card.bullets.map((bullet, idx2) => (
                    <li key={idx2}>{bullet}</li>
                  ))}
                </ul>
                <Link to={card.slug ? `/industries/${card.slug}` : "/contact"} className="learn-more-link">
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default IndustryGrid;
