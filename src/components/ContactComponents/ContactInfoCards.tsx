import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const ContactInfoCards: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["Contact Information"]} />

        <div className="contact-info-grid mt-4">
          <Reveal direction="up" delay={0.05} className="contact-info-card">
            <div className="contact-info-icon">
              <i className="far fa-envelope"></i>
            </div>
            <h3 className="card-title">General Enquiries</h3>
            <p className="card-text mb-2">Email</p>
            <a href="mailto:sales@venueglide.com" className="card-link">
              sales@venueglide.com
            </a>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="contact-info-card">
            <div className="contact-info-icon">
              <i className="far fa-headset"></i>
            </div>
            <h3 className="card-title">Customer Support</h3>
            <a href="mailto:support@venueglide.com" className="card-link mt-2">
              support@venueglide.com
            </a>
          </Reveal>

          <Reveal direction="up" delay={0.15} className="contact-info-card">
            <div className="contact-info-icon">
              <i className="far fa-map-marker-alt"></i>
            </div>
            <h3 className="card-title">Our Office</h3>
            <p className="card-text mb-0">
              12 Dimboola Road
              <br />
              Broadmeadows, Melbourne
              <br />
              Victoria 3047, Australia
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2} className="contact-info-card">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
