import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Seo from "../../components/seo/Seo";
import AboutSection from "../../components/AboutComponents/AboutSection/AboutSection";
import WhyVenueGlide from "../../components/WhyVenueGlide/WhyVenueGlide";
import FeatureSection from "../../components/AboutComponents/FeatureSection/FeatureSection";
import VenueGlideOverview from "../../components/VenueGlideOverview/VenueGlideOverview";
import AwardSection2 from "../../components/AboutComponents/AwardSection/AwardSection2";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title="About VenueGlide | Melbourne Sports Venue Software Company"
        description="VenueGlide builds sports venue software from Melbourne, Australia — bookings and operations in one platform, cloud-accessible worldwide."
        path="/about"
        breadcrumbs={[{ name: "About Us", path: "/about" }]}
      />
      <div className='about-page inner-page'>
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="About Us" pagesub="About Us" />
            <AboutSection />
            <WhyVenueGlide />
            <FeatureSection />
            <VenueGlideOverview />
            {/* <BrandSection /> */}
            {/* <TeamSection /> */}
            <AwardSection2 />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;
