import React from "react";

const whyChooseItems = [
  "Increase online bookings",
  "Improve member retention",
  "Reduce manual administration",
  "Automate repetitive tasks",
  "Streamline staff operations",
  "Improve customer experiences",
  "Increase operational efficiency",
  "Grow revenue",
];

const SolutionWhyChoose: React.FC = () => {
  return (
    <section className="solution-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Content */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="600ms">
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#00ff97",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              A Smarter Way to Run Your Venue
            </span>
            <h2 className="solution-sec-title">Why Businesses Choose VenueGlide</h2>

            <ul className="solution-check-list mt-4">
              {whyChooseItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right: Image Illustration */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
            <div className="solution-img-wrapper">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Why Businesses Choose VenueGlide"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionWhyChoose;
