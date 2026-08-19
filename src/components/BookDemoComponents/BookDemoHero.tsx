import React from "react";
import featureBg from "../../images/bg/features-gradient-bg.png";

const BookDemoHero: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("demo-request-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="book-demo-hero-banner"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      <div className="container">
        <h1 className="hero-title wow fadeInUp" data-wow-duration="600ms">
          See VenueGlide OS in Action
        </h1>
        <h2 className="hero-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          Discover how VenueGlide can simplify operations, increase bookings and help your sports venue grow.
        </h2>
        <p className="hero-desc wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
          Every sports venue is different. That's why every VenueGlide demonstration is personalised around your business, your workflows and your operational goals.
        </p>
        <p className="hero-desc wow fadeInUp" data-wow-delay="250ms" data-wow-duration="600ms">
          During your live demo, our specialists will show you exactly how VenueGlide can improve bookings, memberships, customer management, reporting and day-to-day venue operations.
        </p>
        <div className="hero-btns wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
          <button onClick={scrollToForm} className="btn-primary-green">
            Schedule Your Personalised Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDemoHero;
