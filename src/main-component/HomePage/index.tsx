import React, { Fragment, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

import EditorialHero from "../../components/home/EditorialHero";
import TrustMarquee from "../../components/home/TrustMarquee";
import Statement from "../../components/home/Statement";
import SportsVenueFeatures from "../../components/SportsVenueFeatures/SportsVenueFeatures";
import KeyFigures from "../../components/home/KeyFigures";
import VenueShowcase from "../../components/home/VenueShowcase";
import SportsVenueFAQ from "../../components/SportsVenueFAQ/SportsVenueFAQ";
import BigCTA from "../../components/home/BigCTA";

import "../../components/home/editorial.css";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "VenueGlide | Sports Venue Management Software for Australia";
  }, []);

  return (
    <Fragment>
      <div className="ai-agency">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <EditorialHero />
            <TrustMarquee />
            <Statement />
            <SportsVenueFeatures />
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
