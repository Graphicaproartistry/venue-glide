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
        title="Sports Venue Software by Industry | Melbourne"
        description="Purpose-built software for indoor cricket, padel, tennis, football and multi-sport venues across Melbourne and Australia."
        path="/industries"
        breadcrumbs={[{ name: "Industries", path: "/industries" }]}
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
