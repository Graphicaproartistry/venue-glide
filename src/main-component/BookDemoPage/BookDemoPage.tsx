import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Seo from "../../components/seo/Seo";
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
  return (
    <Fragment>
      <Seo
        title="Book a Demo | VenueGlide OS Sports Venue Software"
        description="Book a personalised VenueGlide OS demo and see how Melbourne and Australia's sports venues automate bookings, memberships, payments, CRM, reporting and staffless access."
        path="/book-demo"
        breadcrumbs={[{ name: "Book a Demo", path: "/book-demo" }]}
      />
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
