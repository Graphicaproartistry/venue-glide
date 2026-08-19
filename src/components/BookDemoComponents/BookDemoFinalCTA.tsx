import React from "react";

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
        <div className="book-demo-final-cta-box wow fadeInUp" data-wow-duration="600ms">
          <h2 className="title">Ready to Transform Your Sports Venue?</h2>
          <p>
            Join sports venues across Australia that are modernising their operations with VenueGlide OS.
          </p>
          <p className="mb-4">
            Discover how one intelligent platform can help your venue simplify operations, increase revenue and deliver exceptional customer experiences.
          </p>
          <div>
            <button onClick={scrollToForm} className="btn-primary-green">
              Book Your Personalised Demo Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemoFinalCTA;
