import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Seo from "../../components/seo/Seo";

import EditorialHero from "../../components/home/EditorialHero";
import TrustMarquee from "../../components/home/TrustMarquee";
import CustomerProofStrip from "../../components/home/CustomerProofStrip";
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
        title="Indoor Sports Centre Booking Software | Melbourne, Australia"
        description="VenueGlide OS is a booking system for indoor sports centres, built in Melbourne — online bookings, a customer self-service portal, POS, invoicing, inventory, memberships and Stripe/Xero/Igloo integrations, fully customisable to your venue and sport. Trusted across Australia."
        path="/"
        structuredData={[faqSchema]}
      />
      <div className="ai-agency">
        <div className="body_wrap o-clip">
          <Header />
          <main className="ed-root">
            <EditorialHero />
            <TrustMarquee />
            <CustomerProofStrip />
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
