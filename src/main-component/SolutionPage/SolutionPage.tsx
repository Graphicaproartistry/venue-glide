import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Seo from "../../components/seo/Seo";
import SolutionHero from "../../components/SolutionComponents/SolutionHero";
import SolutionGrid from "../../components/SolutionComponents/SolutionGrid";
import SolutionWhyChoose from "../../components/SolutionComponents/SolutionWhyChoose";
import SolutionIndustries from "../../components/SolutionComponents/SolutionIndustries";
import SolutionApproach from "../../components/SolutionComponents/SolutionApproach";
import SolutionFAQ from "../../components/SolutionComponents/SolutionFAQ";
import SolutionCTA from "../../components/SolutionComponents/SolutionCTA";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import "../../components/SolutionComponents/Solution.css";

const SolutionPage: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title="Sports Venue Software Solutions | Melbourne"
        description="Software solutions for indoor cricket, padel, tennis and multi-sport venues across Melbourne and Australia."
        path="/solutions"
        breadcrumbs={[{ name: "Solutions", path: "/solutions" }]}
      />
      <div className="solution-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <SolutionHero />
            <SolutionGrid />
            <SolutionWhyChoose />
            <SolutionIndustries />
            <SolutionApproach />
            <SolutionFAQ />
            <SolutionCTA />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default SolutionPage;
