import React from "react";

interface SolutionItem {
  id: number;
  title: string;
  desc: string;
  iconSvg: React.ReactNode;
  bullets: string[];
}

const solutionItems: SolutionItem[] = [
  {
    id: 1,
    title: "Simplify Facility Bookings",
    desc: "Give customers the ability to book courts, pitches, lanes and facilities online 24/7 with real-time availability, instant confirmations and secure payments.",
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    bullets: [
      "Online bookings",
      "Court scheduling",
      "Recurring reservations",
      "Dynamic pricing",
      "QR check-in",
      "Waitlists",
      "Automated reminders",
    ],
  },
  {
    id: 2,
    title: "Grow and Retain Your Members",
    desc: "Manage memberships, subscriptions and renewals from one platform while improving member engagement through automation and personalised experiences.",
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    bullets: [
      "Membership plans",
      "Family memberships",
      "Direct debit",
      "Attendance tracking",
      "Loyalty rewards",
      "Automated renewals",
      "Digital waivers",
    ],
  },
  {
    id: 3,
    title: "Build Stronger Relationships",
    desc: "Every customer interaction is stored in one central CRM, helping your team provide personalised service and build long-term loyalty.",
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    bullets: [
      "Customer profiles",
      "Booking history",
      "Communication logs",
      "Marketing campaigns",
      "Notes",
      "Preferences",
      "Customer segmentation",
    ],
  },
  {
    id: 4,
    title: "Sell More With Integrated POS",
    desc: "Manage café sales, merchandise, coaching sessions and equipment hire through a fully integrated Point of Sale connected to customer accounts and reporting.",
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    bullets: [
      "Retail",
      "Food & Beverage",
      "Merchandise",
      "Equipment Hire",
      "Coaching Packages",
    ],
  },
  {
    id: 5,
    title: "Manage Coaches and Programs",
    desc: "Schedule coaches, training sessions, private lessons and group programs while keeping attendance, payments and customer communication organised.",
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
    bullets: [
      "Cricket Academies",
      "Tennis Coaching",
      "Football Training",
      "Padel Coaching",
      "Junior Development",
    ],
  },
  {
    id: 6,
    title: "Faster Payments, Better Cash Flow",
    desc: "Accept secure online payments, deposits, memberships and recurring subscriptions with integrated payment gateways.",
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    bullets: [
      "Credit Cards",
      "Digital Wallets",
      "Membership Payments",
      "Deposits",
      "Refunds",
      "Invoicing",
    ],
  },
  {
    id: 7,
    title: "Make Better Business Decisions",
    desc: "Track every aspect of your venue through real-time reporting and analytics.",
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    bullets: [
      "Revenue",
      "Occupancy",
      "Peak Hours",
      "Membership Growth",
      "Staff Performance",
      "Coaching Revenue",
      "POS Sales",
      "Customer Retention",
    ],
  },
  {
    id: 8,
    title: "One Platform for Every Location",
    desc: "Whether you manage one sports centre or twenty venues across Australia, VenueGlide centralises your operations while allowing each location to maintain its own schedules, pricing and reporting.",
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    bullets: [

    ],
  },
  {
    id: 9,
    title: "Intelligence Built into Every Section",
    desc: "VenueGlide AI helps managers analyse business performance, answer operational questions and generate reports in seconds.",
    iconSvg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M19.07 4.93l-14.14 14.14M4.93 4.93l14.14 14.14" />
      </svg>
    ),
    bullets: [
      "Revenue forecasting",
      "Occupancy analysis",
      "Membership trends",
      "Booking insights",
      "Business recommendations",
    ],
  },
];

const SolutionGrid: React.FC = () => {
  return (
    <section className="solution-section" id="solutions-grid">
      <div className="container">
        <div className="sec-title-wrap text-center mb-5 wow fadeInUp" data-wow-duration="600ms">
          <h2 className="solution-sec-title">Online Booking Solution</h2>
        </div>

        <div className="row g-4">
          {solutionItems.map((item, idx) => (
            <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(idx % 3) * 100 + 100}ms`} data-wow-duration="600ms">
              <div className="solution-grid-card">
                <div className="icon-badge">{item.iconSvg}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
                <ul className="solution-bullets">
                  {item.bullets.map((bullet, idx2) => (
                    <li key={idx2}>{bullet}</li>
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

export default SolutionGrid;
