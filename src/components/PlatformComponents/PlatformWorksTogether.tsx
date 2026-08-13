import React from "react";

const checklistItems = [
  "Online bookings",
  "Availability Management",
  "Customer Profile",
  "Membership",
  "Payments",
  "Point of Sale",
  "Coaching programs",
  "Reporting & Analytics",
  "VenueGlide AI",
  "No duplicate customer records.",
  "No manual data entry.",
  "No disconnected software.",
  "Just one intelligent operating system.",
];

const PlatformWorksTogether: React.FC = () => {
  return (
    <section className="platform-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Content & Checklist */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="600ms">
            <h2 className="platform-sec-title">Everything Works Together</h2>
            <p className="platform-sec-desc">
              Unlike traditional software where each module operates independently, VenueGlide connects every part of your business into a single source of truth.
            </p>

            <div className="row">
              <div className="col-12">
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: 0,
                    marginBottom: 0,
                  }}
                >
                  {checklistItems.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        fontSize: "14.5px",
                        lineHeight: "1.8",
                        color: "#cbd5e1",
                        position: "relative",
                        paddingLeft: "24px",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "0",
                          color: "#00ff97",
                          fontWeight: "bold",
                        }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Image Illustration */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
            <div className="platform-img-wrapper">
              <img src="https://images.pexels.com/photos/5256819/pexels-photo-5256819.jpeg" alt="Everything Works Together" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformWorksTogether;
