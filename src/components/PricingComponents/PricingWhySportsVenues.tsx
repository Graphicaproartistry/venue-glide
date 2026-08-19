import React from "react";

const benefitsList = [
  "Increase online bookings",
  "Improve member retention",
  "Streamline operations",
  "Automate repetitive tasks",
  "Gain real-time business insights",
  "Scale confidently",
];

const PricingWhySportsVenues: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="why-sports-box wow fadeInUp" data-wow-duration="600ms">
          <h2 className="pricing-sec-title text-center mb-4">
            Why Sports Venues Choose VenueGlide
          </h2>

          <div className="intro-text text-center">
            VenueGlide is more than booking software.
          </div>
          <div className="sub-intro text-center">
            It's a complete operating system that helps sports venues:
          </div>

          <div className="why-sports-grid">
            {benefitsList.map((item, idx) => (
              <div key={idx} className="why-sports-item">
                <i className="far fa-check-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="why-sports-closing">
            Whether you manage one venue or multiple locations, VenueGlide provides the tools to support long-term growth.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingWhySportsVenues;
