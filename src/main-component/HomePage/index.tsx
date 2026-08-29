import React, { Fragment, useEffect } from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/hero/Hero";
import SportsVenueFeatures from "../../components/SportsVenueFeatures/SportsVenueFeatures";
import SportsVenueFAQ from "../../components/SportsVenueFAQ/SportsVenueFAQ";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import AwardSection from "../../components/AboutComponents/AwardSection/AwardSection";
import IntegrationSection from "../../components/ai-chatbot-components/IntegrationSection/IntegrationSection";



const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Venue Glide";
  }, []);

  return (
    <Fragment>
      <div className='ai-agency'>
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <HeroSection />
            <div className="IntegrationSection-custom"><IntegrationSection /></div>
            <SportsVenueFeatures />
            <SportsVenueFAQ />
            <AwardSection />
            {/* <ServiceSection /> */}
            {/* <ProjectSection/> */}
            {/* <IndustriesMarqueeSection /> */}
            {/* <IndustriesSection /> */}
            {/* <ContactSection /> */}
            {/* <TestimonialSection /> */}
            {/* <BlogSection /> */}
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
