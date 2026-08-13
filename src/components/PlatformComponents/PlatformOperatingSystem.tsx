import React from "react";

const PlatformOperatingSystem: React.FC = () => {
  return (
    <section className="platform-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Image Illustration */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="600ms">
            <div className="platform-img-wrapper">
              <img src="https://images.pexels.com/photos/17160705/pexels-photo-17160705.jpeg" alt="The Complete Operating System for Sports Venues" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="150ms" data-wow-duration="600ms">
            <h2 className="platform-sec-title">
              The Complete Operating System for Sports Venues
            </h2>
            <p className="platform-sec-desc">
              Managing a successful sports venue requires more than just a booking calendar. You need a platform that connects every department, every customer interaction and every operational process. VenueGlide OS centralises every aspect of your venue into one connected ecosystem, eliminating duplicate data, reducing manual work and giving your team real-time visibility across your entire business. From the moment a customer books online to payment processing, check-in, coaching, retail purchases and business reporting, every interaction is automatically connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOperatingSystem;
