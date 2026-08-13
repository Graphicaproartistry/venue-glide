import React from "react";

const departmentItems = [
  "Bookings",
  "Members",
  "Payments",
  "Coaching",
  "Point of Sale",
  "Reporting",
  "VenueGlide AI",
  "Business Growth",
];

const IndustryDepartmentEvolving: React.FC = () => {
  return (
    <section className="industry-section">
      <div className="container">
        {/* Sub-Section 1: One Platform. Every Department Connected. */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="600ms">
            <div className="platform-img-wrapper">
              <img src="https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg" alt="One Platform Every Department Connected" />
            </div>
          </div>

          <div className="col-lg-6 wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
            <h2 className="industry-sec-title">
              One Platform. Every Department Connected.
            </h2>
            <p className="industry-sec-desc">
              VenueGlide brings every part of your venue together.
            </p>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                marginBottom: "20px",
              }}
            >
              {departmentItems.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: "14.5px",
                    color: "#cbd5e1",
                    position: "relative",
                    paddingLeft: "24px",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
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

            <div
              style={{
                fontSize: "13.5px",
                color: "#94a3b8",
                fontStyle: "italic",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                paddingTop: "14px",
              }}
            >
              Every booking, payment, membership and customer interaction is connected, giving your team complete visibility across the entire business.
            </div>
          </div>
        </div>

        {/* Sub-Section 2: Australia's Sports Industry Is Evolving */}
        <div className="row align-items-center g-5 pt-4">
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="600ms">
            <h2 className="industry-sec-title">
              Australia's Sports Industry Is Evolving
            </h2>
            <p className="industry-sec-desc">
              Modern sports venues require more than spreadsheets and disconnected software. Customers expect instant online bookings, mobile access, digital payments and seamless experiences. VenueGlide helps sports facilities embrace digital transformation with a cloud-based platform that supports operational efficiency, customer satisfaction and long-term growth.
            </p>
          </div>

          <div className="col-lg-6 wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
            <div className="platform-img-wrapper">
              <img src="https://images.pexels.com/photos/159400/television-camera-men-outdoors-ballgame-159400.jpeg" alt="Australia Sports Industry Evolving" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryDepartmentEvolving;
