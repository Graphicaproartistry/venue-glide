import React from "react";

const ContactInfoCards: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Contact Information
        </h2>

        <div className="contact-info-grid mt-4">
          {/* Card 1: General Enquiries */}
          <div className="contact-info-card wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
            <div className="contact-info-icon">
              <i className="far fa-envelope"></i>
            </div>
            <h3 className="card-title">General Enquiries</h3>
            <p className="card-text mb-2">Email</p>
            <a href="mailto:sales@venueglide.com" className="card-link">
              sales@venueglide.com
            </a>
          </div>

          {/* Card 2: Customer Support */}
          <div className="contact-info-card wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
            <div className="contact-info-icon">
              <i className="far fa-headset"></i>
            </div>
            <h3 className="card-title">Customer Support</h3>
            <a href="mailto:support@venueglide.com" className="card-link mt-2">
              support@venueglide.com
            </a>
          </div>

          {/* Card 3: Sales Team */}
          <div className="contact-info-card wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
            <div className="contact-info-icon">
              <i className="far fa-user-tie"></i>
            </div>
            <h3 className="card-title">Sales Team</h3>
            <p className="card-text mt-2">
              Speak with one of our Venue Management Specialists.
            </p>
          </div>

          {/* Card 4: Office Hours */}
          <div className="contact-info-card wow fadeInUp" data-wow-delay="400ms" data-wow-duration="600ms">
            <div className="contact-info-icon">
              <i className="far fa-clock"></i>
            </div>
            <h3 className="card-title">Office Hours</h3>
            <p className="card-text mb-1" style={{ fontWeight: 600, color: "#ffffff" }}>
              Monday – Friday
            </p>
            <p className="card-text mb-1">9:00 AM – 6:00 PM</p>
            <p className="card-text" style={{ fontSize: "12px", color: "#00D4ff" }}>
              Australian Eastern Time (AET)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
