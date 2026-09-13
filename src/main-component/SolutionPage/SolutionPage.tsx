import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Seo from "../../components/seo/Seo";
import SolutionHero from "../../components/SolutionComponents/SolutionHero";
import SolutionGrid from "../../components/SolutionComponents/SolutionGrid";
import SolutionWhyChoose from "../../components/SolutionComponents/SolutionWhyChoose";
import SolutionIndustries from "../../components/SolutionComponents/SolutionIndustries";
import SolutionApproach from "../../components/SolutionComponents/SolutionApproach";
import SolutionFAQ, { faqData } from "../../components/SolutionComponents/SolutionFAQ";
import SolutionCTA from "../../components/SolutionComponents/SolutionCTA";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import "../../components/SolutionComponents/Solution.css";

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

const SolutionPage: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title="Indoor Sports Facility Software | Melbourne & Australia"
        description="VenueGlide is indoor sports facility software for indoor cricket, padel, tennis and multi-sport venues across Melbourne and Australia — bookings, memberships, POS and reporting in one platform."
        path="/solutions"
        breadcrumbs={[{ name: "Solutions", path: "/solutions" }]}
        structuredData={[faqSchema]}
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
