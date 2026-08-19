import React from "react";

const features = [
  {
    title: "Online Booking Management",
    desc: "See how customers book courts, facilities and coaching online in real time.",
    icon: "far fa-calendar-check",
  },
  {
    title: "Membership Management",
    desc: "Discover how memberships, renewals, attendance and loyalty programs are automated.",
    icon: "far fa-id-card",
  },
  {
    title: "Customer CRM",
    desc: "View complete customer profiles, booking history, communication and marketing tools.",
    icon: "far fa-users-gear",
  },
  {
    title: "Point of Sale",
    desc: "Explore café, retail, merchandise and equipment hire workflows.",
    icon: "far fa-cash-register",
  },
  {
    title: "Coaching Management",
    desc: "Learn how coaches, lessons, academies and player development programs are managed.",
    icon: "far fa-user-graduate",
  },
  {
    title: "Reporting & Analytics",
    desc: "See live business dashboards and performance reports.",
    icon: "far fa-chart-mixed",
  },
  {
    title: "VenueGlide AI",
    desc: "Experience AI-powered reporting, forecasting and operational insights.",
    icon: "far fa-brain-circuit",
  },
];

const BookDemoWhatYouSee: React.FC = () => {
  return (
    <section className="book-demo-section">
      <div className="container">
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          What You'll See
        </h2>
        <h3 className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          A Demo Tailored to Your Venue
        </h3>

        <div className="what-you-see-intro wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
          <p>No generic presentations.</p>
          <p>No pre-recorded videos.</p>
          <p>Every demonstration is customised for your venue.</p>
          <p style={{ color: "#cbd5e1", marginTop: "8px" }}>
            We'll walk you through the features that matter most to your business.
          </p>
        </div>

        <div className="what-you-see-grid">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="what-you-see-card wow fadeInUp"
              data-wow-delay={`${(idx % 3) * 100 + 200}ms`}
              data-wow-duration="600ms"
            >
              <div className="card-icon-box">
                <i className={item.icon}></i>
              </div>
              <h4 className="card-title">{item.title}</h4>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookDemoWhatYouSee;
