import React from "react";

const industries = [
  "Indoor Cricket Centres",
  "Padel Clubs",
  "Tennis Clubs",
  "Football Centres",
  "Basketball Facilities",
  "Pickleball Clubs",
  "Badminton Centres",
  "Squash Centres",
  "Sports Academies",
  "Community Recreation Centres",
  "Multi-Sport Venues",
];

const ContactIndustries: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Industries We Support
        </h2>
        <p className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          VenueGlide works with:
        </p>

        <div className="industries-grid">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="industry-card wow fadeInUp"
              data-wow-delay={`${(idx % 3) * 80 + 150}ms`}
              data-wow-duration="600ms"
            >
              <i className="far fa-dumbbell"></i>
              <span>{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactIndustries;
