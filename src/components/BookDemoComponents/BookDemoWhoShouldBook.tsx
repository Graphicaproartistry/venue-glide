import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

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
        <div className="who-should-box">
          <div className="text-center">
            <MaskText as="h2" className="pricing-sec-title mb-3" lines={["Who Should Book a Demo?"]} />
          </div>
          <Reveal direction="up" delay={0.1}>
            <p className="text-center mb-2" style={{ fontSize: "16px", color: "#cbd5e1" }}>
              VenueGlide is designed for organisations of every size.
            </p>
            <div className="sub-intro text-center">
              Perfect for:
            </div>
          </Reveal>

          <div className="who-should-grid">
            {venueTypes.map((venue, idx) => (
              <Reveal key={idx} direction="up" distance={10} delay={Math.min(idx * 0.05 + 0.15, 0.45)} className="who-should-item">
                <i className="far fa-check-circle"></i>
                <span>{venue}</span>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={0.3}>
            <div className="who-should-closing">
              Whether you're opening a new venue or replacing outdated software, our team will demonstrate how VenueGlide can support your business.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BookDemoWhoShouldBook;
