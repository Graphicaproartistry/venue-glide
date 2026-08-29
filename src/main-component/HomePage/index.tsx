import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Seo from "../../components/seo/Seo";

import EditorialHero from "../../components/home/EditorialHero";
import TrustMarquee from "../../components/home/TrustMarquee";
import Statement from "../../components/home/Statement";
import SportsVenueFeatures from "../../components/SportsVenueFeatures/SportsVenueFeatures";
import IntegrationsShowcase from "../../components/home/IntegrationsShowcase";
import KeyFigures from "../../components/home/KeyFigures";
import VenueShowcase from "../../components/home/VenueShowcase";
import SportsVenueFAQ, { faqData } from "../../components/SportsVenueFAQ/SportsVenueFAQ";
import BigCTA from "../../components/home/BigCTA";

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title="Sports Venue Management Software Melbourne, Australia"
        description="VenueGlide OS is Melbourne's sports venue management software — online bookings, memberships, POS, coaching, Stripe payments, Xero accounting and Igloo staffless access in one platform. Trusted by venues across Australia."
        path="/"
        structuredData={[faqSchema]}
      />
      <div className="ai-agency">
        <div className="body_wrap o-clip">
          <Header />
          <main className="ed-root">
            <EditorialHero />
            <TrustMarquee />
            <Statement />
            <SportsVenueFeatures />
            <IntegrationsShowcase />
            <KeyFigures />
            <VenueShowcase />
            <SportsVenueFAQ />
            <BigCTA />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
