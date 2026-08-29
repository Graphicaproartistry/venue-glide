import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Seo from "../../components/seo/Seo";
import IndustryHero from "../../components/IndustriesComponents/IndustryHero";
import IndustryGrid from "../../components/IndustriesComponents/IndustryGrid";
import IndustryDesignedSupport from "../../components/IndustriesComponents/IndustryDesignedSupport";
import IndustryWhyChoose from "../../components/IndustriesComponents/IndustryWhyChoose";
import IndustryDepartmentEvolving from "../../components/IndustriesComponents/IndustryDepartmentEvolving";
import IndustryFAQ from "../../components/IndustriesComponents/IndustryFAQ";
import IndustryCTA from "../../components/IndustriesComponents/IndustryCTA";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import "../../components/IndustriesComponents/Industry.css";

const IndustriesPage: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title="Industry-Specific Sports Venue Software | Melbourne, Australia"
        description="Purpose-built software for indoor cricket, padel, tennis, football/futsal, basketball and multi-sport venues in Melbourne and across Australia — configured for how each sport actually operates."
        path="/industries"
      />
      <div className="industry-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <IndustryHero />
            <IndustryGrid />
            <IndustryDesignedSupport />
            <IndustryWhyChoose />
            <IndustryDepartmentEvolving />
            <IndustryFAQ />
            <IndustryCTA />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default IndustriesPage;
