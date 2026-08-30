import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

interface GridItem {
  id: number;
  title: string;
  desc: string;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    title: "Smart Booking Engine",
    desc: "Allow customers to book courts, pitches, lanes and facilities online with real-time availability, recurring bookings, dynamic pricing, waitlists and automated confirmations.",
  },
  {
    id: 2,
    title: "Membership Management",
    desc: "Automate memberships, subscriptions, renewals, attendance tracking, family accounts and loyalty programs while improving the member experience.",
  },
  {
    id: 3,
    title: "Customer CRM",
    desc: "Build stronger relationships with complete customer profiles, booking history, communication records, waivers and marketing tools.",
  },
  {
    id: 4,
    title: "Point of Sale",
    desc: "Sell food, drinks, merchandise, coaching sessions and equipment hire through a fully integrated point of sale system connected directly to customer accounts.",
  },
  {
    id: 5,
    title: "Payments",
    desc: "Accept secure online payments, deposits, recurring memberships, refunds and invoices through a native Stripe integration.",
  },
  {
    id: 6,
    title: "Coaching Management",
    desc: "Manage coaches, training programs, private lessons, junior academies, group sessions and schedules from one dashboard.",
  },
  {
    id: 7,
    title: "Reporting & Analytics",
    desc: "Monitor bookings, occupancy, revenue, memberships, customer retention and operational performance through real-time dashboards.",
  },
  {
    id: 8,
    title: "Automations",
    desc: "Reduce repetitive administration through automated reminders, confirmations, invoices, membership renewals and workflow automation.",
  },
  {
    id: 9,
    title: "VenueGlide AI",
    desc: "Ask questions naturally and receive intelligent business insights, occupancy forecasts, financial reports and operational recommendations in seconds.",
  },
  {
    id: 10,
    title: "Multi-Location Management",
    desc: "Manage multiple sports venues from one central platform while maintaining individual venue reporting, pricing and operational control.",
  },
];

const PlatformFeaturesGrid: React.FC = () => {
  return (
    <section className="platform-section" id="everything-venue-needs">
      <div className="container">
        <div className="sec-title-wrap text-center mb-5">
          <MaskText as="h2" className="platform-sec-title" lines={["Everything Your Venue Needs"]} />
        </div>

        <div className="row g-4">
          {gridItems.map((item, idx) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <Reveal
                direction="up"
                distance={20}
                delay={Math.min((idx % 3) * 0.08, 0.24)}
                className="platform-grid-card"
                whileHover={{ y: -6, borderColor: "rgba(0, 212, 255, 0.4)" }}
              >
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.desc}</p>
                <Link to="/contact" className="learn-more-link">
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

export default PlatformFeaturesGrid;
