import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Seo from "../../components/seo/Seo";
import PricingHero from "../../components/PricingComponents/PricingHero";
import PricingWhyChoose from "../../components/PricingComponents/PricingWhyChoose";
import PricingPlans from "../../components/PricingComponents/PricingPlans";
import PricingCompareFeatures from "../../components/PricingComponents/PricingCompareFeatures";
import PricingEverythingIncluded from "../../components/PricingComponents/PricingEverythingIncluded";
import PricingImplementation from "../../components/PricingComponents/PricingImplementation";
import PricingFAQ from "../../components/PricingComponents/PricingFAQ";
import PricingWhySportsVenues from "../../components/PricingComponents/PricingWhySportsVenues";
import PricingFinalCTA from "../../components/PricingComponents/PricingFinalCTA";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import "../../components/PricingComponents/Pricing.css";

const PricingPage: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title="Pricing | Sports Venue Management Software Melbourne"
        description="Simple, transparent pricing for sports venue management software — plans for independent Melbourne clubs through multi-location operators across Australia."
        path="/pricing"
      />
      <div className="pricing-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PricingHero />
            <PricingWhyChoose />
            <PricingPlans />
            <PricingCompareFeatures />
            <PricingEverythingIncluded />
            <PricingImplementation />
            <PricingFAQ />
            <PricingWhySportsVenues />
            <PricingFinalCTA />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default PricingPage;
