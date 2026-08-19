import React from "react";

const benefits = [
  "Simplify daily operations",
  "Increase online bookings",
  "Improve member retention",
  "Reduce manual administration",
  "Manage multiple venues",
  "Improve customer experiences",
  "Gain real-time business insights",
  "Scale confidently",
];

const BookDemoWhySportsVenues: React.FC = () => {
  return (
    <section className="book-demo-section">
      <div className="container">
        <div className="who-should-box wow fadeInUp" data-wow-duration="600ms">
          <h2 className="pricing-sec-title text-center mb-3">
            Why Sports Venues Choose VenueGlide
          </h2>
          <div className="sub-intro text-center">
            VenueGlide helps sports venues:
          </div>

          <div className="who-should-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="who-should-item">
                <i className="far fa-check-circle"></i>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="who-should-closing">
            Our platform is trusted by sports venues looking for a modern, connected operating system that supports long-term growth.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemoWhySportsVenues;
