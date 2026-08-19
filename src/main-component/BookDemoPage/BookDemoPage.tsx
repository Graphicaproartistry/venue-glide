import React, { Fragment, useEffect } from "react";
import Header from "../../components/Header/Header";
import BookDemoHero from "../../components/BookDemoComponents/BookDemoHero";
import BookDemoWhatYouSee from "../../components/BookDemoComponents/BookDemoWhatYouSee";
import BookDemoWhoShouldBook from "../../components/BookDemoComponents/BookDemoWhoShouldBook";
import BookDemoSteps from "../../components/BookDemoComponents/BookDemoSteps";
import BookDemoWhyBook from "../../components/BookDemoComponents/BookDemoWhyBook";
import BookDemoWhySportsVenues from "../../components/BookDemoComponents/BookDemoWhySportsVenues";
import BookDemoFAQ from "../../components/BookDemoComponents/BookDemoFAQ";
import BookDemoForm from "../../components/BookDemoComponents/BookDemoForm";
import BookDemoFinalCTA from "../../components/BookDemoComponents/BookDemoFinalCTA";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import "../../components/BookDemoComponents/BookDemo.css";

const BookDemoPage: React.FC = () => {
  useEffect(() => {
    // SEO Title
    document.title = "Book a Demo | Sports Venue Management Software Demo | VenueGlide OS";

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Book a personalised VenueGlide OS demo and discover how our sports venue management software helps automate bookings, memberships, payments, CRM, reporting and daily operations."
    );
  }, []);

  return (
    <Fragment>
      <div className="book-demo-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <BookDemoHero />
            <BookDemoWhatYouSee />
            <BookDemoWhoShouldBook />
            <BookDemoSteps />
            <BookDemoWhyBook />
            <BookDemoWhySportsVenues />
            <BookDemoFAQ />
            <BookDemoForm />
            <BookDemoFinalCTA />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default BookDemoPage;
