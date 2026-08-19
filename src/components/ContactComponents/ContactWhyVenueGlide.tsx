import React from "react";

const modules = [
  "Online Bookings",
  "Membership Management",
  "CRM",
  "Point of Sale",
  "Payments",
  "Coaching",
  "Reporting",
  "Automation",
  "AI",
];

const ContactWhyVenueGlide: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="why-contact-box wow fadeInUp" data-wow-duration="600ms">
          <h2 className="pricing-sec-title text-center mb-3">
            Why VenueGlide?
          </h2>
          <p className="text-center mb-4" style={{ fontSize: "16px", color: "#cbd5e1" }}>
            Sports venues choose VenueGlide because it combines:
          </p>

          <div className="modules-tags-wrap">
            {modules.map((mod, idx) => (
              <div key={idx} className="module-chip">
                {mod}
              </div>
            ))}
          </div>

          <p className="text-center mb-2" style={{ fontSize: "18px", fontWeight: 700, color: "#00D4ff" }}>
            into one connected operating system.
          </p>
          <div className="who-should-closing text-center mt-3">
            Instead of managing multiple software platforms, your team can manage every aspect of your venue from a single dashboard.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWhyVenueGlide;
