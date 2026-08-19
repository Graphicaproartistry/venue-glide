import React from "react";

const venueTypes = [
  "Indoor Cricket Centres",
  "Padel Clubs",
  "Tennis Clubs",
  "Football Centres",
  "Basketball Facilities",
  "Badminton Centres",
  "Pickleball Clubs",
  "Squash Clubs",
  "Multi-Sport Venues",
  "Recreation Centres",
  "Sports Academies",
];

const BookDemoWhoShouldBook: React.FC = () => {
  return (
    <section className="book-demo-section">
      <div className="container">
        <div className="who-should-box wow fadeInUp" data-wow-duration="600ms">
          <h2 className="pricing-sec-title text-center mb-3">
            Who Should Book a Demo?
          </h2>
          <p className="text-center mb-2" style={{ fontSize: "16px", color: "#cbd5e1" }}>
            VenueGlide is designed for organisations of every size.
          </p>
          <div className="sub-intro text-center">
            Perfect for:
          </div>

          <div className="who-should-grid">
            {venueTypes.map((venue, idx) => (
              <div key={idx} className="who-should-item">
                <i className="far fa-check-circle"></i>
                <span>{venue}</span>
              </div>
            ))}
          </div>

          <div className="who-should-closing">
            Whether you're opening a new venue or replacing outdated software, our team will demonstrate how VenueGlide can support your business.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemoWhoShouldBook;
