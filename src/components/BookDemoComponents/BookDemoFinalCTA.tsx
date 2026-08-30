import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";
import MagneticButton from "../motion/MagneticButton";

const BookDemoFinalCTA: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("demo-request-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="book-demo-section pt-0">
      <div className="container">
        <div className="book-demo-final-cta-box">
          <MaskText as="h2" className="title" lines={["Ready to Transform", "Your Sports Venue?"]} />
          <Reveal direction="up" delay={0.1}>
            <p>
              Join sports venues across Australia that are modernising their operations with VenueGlide OS.
            </p>
            <p className="mb-4">
              Discover how one intelligent platform can help your venue simplify operations, increase revenue and deliver exceptional customer experiences.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <MagneticButton>
              <button onClick={scrollToForm} className="btn-primary-green" data-cursor="link">
                Book Your Personalised Demo Today
              </button>
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BookDemoFinalCTA;
