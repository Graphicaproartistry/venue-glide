import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

interface GridItem {
  id: number;
  title: string;
  desc: string;
  comingSoon?: boolean;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    title: "Smart Booking Engine",
    desc: "Allow customers to book courts, pitches, lanes and facilities online with real-time availability, recurring bookings, dynamic pricing, waitlists and automated confirmations.",
  },
  {
    id: 2,
    title: "Dynamic Venue & Sport Configuration",
    desc: "Set up your own lanes, courts, sports and paid add-on services to match exactly how your venue runs — a modern, fully customisable interface configured to your venue, not a rigid one-size-fits-all template.",
  },
  {
    id: 3,
    title: "Membership Management",
    desc: "Automate memberships, subscriptions, renewals, attendance tracking, family accounts and loyalty programs while improving the member experience.",
  },
  {
    id: 4,
    title: "Customer CRM",
    desc: "Build stronger relationships with complete customer profiles, booking history, communication records, waivers and marketing tools.",
  },
  {
    id: 5,
    title: "Customer Self-Service Portal",
    desc: "Give every customer their own account to book, view and manage their own upcoming and past bookings — without calling or emailing your front desk.",
  },
  {
    id: 6,
    title: "Point of Sale & Invoicing",
    desc: "Sell food, drinks, merchandise, coaching sessions and equipment hire through a fully integrated POS connected to customer accounts, with invoices generated automatically and printable at the venue.",
  },
  {
    id: 7,
    title: "Walk-In & Front Desk Bookings",
    desc: "Register walk-in customers and process on-the-spot bookings from the front desk in seconds, alongside your online booking calendar.",
  },
  {
    id: 8,
    title: "Inventory Management",
    desc: "Track equipment, retail stock and consumables across one or multiple venues, with visibility into what's on hand and what needs reordering.",
  },
  {
    id: 9,
    title: "Payments",
    desc: "Accept secure online payments, deposits, recurring memberships, refunds and invoices through a native Stripe integration.",
  },
  {
    id: 10,
    title: "Coaching Management",
    desc: "Manage coaches, training programs, private lessons, junior academies, group sessions and schedules from one dashboard.",
  },
  {
    id: 11,
    title: "Reporting & Analytics",
    desc: "Monitor bookings, occupancy, revenue, memberships, customer retention and operational performance through real-time dashboards.",
  },
  {
    id: 12,
    title: "Automations",
    desc: "Reduce repetitive administration through automated reminders, confirmations, invoices, membership renewals and workflow automation.",
  },
  {
    id: 13,
    title: "VenueGlide AI",
    desc: "Ask questions naturally and receive intelligent business insights, occupancy forecasts, financial reports and operational recommendations in seconds.",
  },
  {
    id: 14,
    title: "Role-Based Staff Access",
    desc: "Give owners, managers, admins and front-desk staff exactly the access their role needs, with permission levels that match your team structure.",
  },
  {
    id: 15,
    title: "Multi-Location Management",
    desc: "Manage multiple sports venues from one central platform while maintaining individual venue reporting, pricing and operational control.",
  },
  {
    id: 16,
    title: "Mobile App",
    desc: "A dedicated VenueGlide mobile app for Android and iOS is in development, bringing bookings, notifications and venue management on the go for staff and customers alike.",
    comingSoon: true,
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
                <h3 className="card-title">
                  {item.title}
                  {item.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
                </h3>
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
