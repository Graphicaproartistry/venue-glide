import React from "react";

const whyChecklist = [
  "Increase bookings",
  "Improve court utilisation",
  "Simplify memberships",
  "Manage coaching programs",
  "Automate administration",
  "Improve customer retention",
  "Increase revenue",
  "Gain valuable business insights",
  "Scale confidently",
];

const IndustryWhyChoose: React.FC = () => {
  return (
    <section
      className="why-sports-banner"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')`,
      }}
    >
      <div className="overlay-dark"></div>
      <div className="container position-relative z-2">
        <div className="row justify-content-end">
          <div className="col-lg-7 col-md-9 wow fadeInUp" data-wow-duration="600ms">
            <div className="why-sports-card">
              <h2 className="card-title">Why Sports Venues Choose VenueGlide</h2>
              <p className="card-desc">
                Sports businesses choose VenueGlide because it delivers more than online bookings. Our platform helps venues:
              </p>

              <ul className="check-grid">
                {whyChecklist.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryWhyChoose;
