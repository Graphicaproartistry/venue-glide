import React from "react";
import { Link } from "react-router-dom";

const ContactFinalCTA: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="contact-section pt-0">
      <div className="container">
        <div className="contact-final-cta-box wow fadeInUp" data-wow-duration="600ms">
          <h2 className="title">Ready to Modernise Your Sports Venue?</h2>
          <p>
            Whether you're exploring new software or ready to transform your operations, our team is here to help.
          </p>
          <p className="mb-4">
            Book a personalised demo, request a consultation or contact us today to discover how VenueGlide OS can support your venue's success.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button onClick={scrollToForm} className="btn-primary-green">
              Contact VenueGlide Today
            </button>
            <Link to="/book-demo" className="btn-outline-glow">
              Book a Personalised Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFinalCTA;
