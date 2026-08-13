import React from "react";

const industriesList = [
  "Indoor Cricket Centres",
  "Padel Clubs",
  "Tennis Clubs",
  "Football Centres",
  "Basketball Stadiums",
  "Badminton Centres",
  "Pickleball Clubs",
  "Squash Centres",
  "Sports Academies",
  "Community Recreation Centres",
  "Multi-Sport Venues",
];

const SolutionIndustries: React.FC = () => {
  return (
    <section className="solution-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Image Illustration */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="600ms">
            <div className="solution-img-wrapper">
              <img
                src="https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg"
                alt="Industries We Support"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
            <h2 className="solution-sec-title">Industries We Support</h2>
            <p className="solution-sec-desc">
              Our solutions are trusted by a wide range of sports and recreation businesses.
            </p>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                marginBottom: "24px",
              }}
            >
              {industriesList.map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "14.5px",
                    lineHeight: "1.8",
                    color: "#cbd5e1",
                    position: "relative",
                    paddingLeft: "22px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "2px",
                      top: "-1px",
                      color: "#00ff97",
                      fontSize: "16px",
                    }}
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div
              style={{
                fontSize: "13.5px",
                lineHeight: "1.6",
                color: "#94a3b8",
                fontStyle: "italic",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                paddingTop: "14px",
              }}
            >
              Every venue has unique operational requirements, and VenueGlide can be configured to match your business model.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionIndustries;
