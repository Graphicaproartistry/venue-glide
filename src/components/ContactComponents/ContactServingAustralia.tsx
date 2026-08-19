import React from "react";

const locations = [
  "Melbourne",
  "Sydney",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Canberra",
  "Hobart",
  "Darwin",
  "Regional Australia",
];

const ContactServingAustralia: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Serving Sports Venues Across Australia
        </h2>
        <p className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          VenueGlide proudly supports sports venues across Australia, including:
        </p>

        <div className="australia-grid">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="location-card wow fadeInUp"
              data-wow-delay={`${(idx % 3) * 80 + 150}ms`}
              data-wow-duration="600ms"
            >
              <i className="far fa-location-dot"></i>
              <span>{loc}</span>
            </div>
          ))}
        </div>

        <div className="who-should-closing text-center wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
          We also work with sports organisations and venue operators internationally, delivering cloud-based software that scales from single facilities to enterprise multi-location businesses.
        </div>
      </div>
    </section>
  );
};

export default ContactServingAustralia;
