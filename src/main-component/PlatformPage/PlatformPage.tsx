import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import PlatformHero from "../../components/PlatformComponents/PlatformHero";
import PlatformOperatingSystem from "../../components/PlatformComponents/PlatformOperatingSystem";
import PlatformWorksTogether from "../../components/PlatformComponents/PlatformWorksTogether";
import PlatformFeaturesGrid from "../../components/PlatformComponents/PlatformFeaturesGrid";
import PlatformBuiltSpecifically from "../../components/PlatformComponents/PlatformBuiltSpecifically";
import PlatformOverviewCards from "../../components/PlatformComponents/PlatformOverviewCards";
import PlatformFAQ from "../../components/PlatformComponents/PlatformFAQ";
import PlatformCTA from "../../components/PlatformComponents/PlatformCTA";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import "../../components/PlatformComponents/Platform.css";

const PlatformPage: React.FC = () => {
  return (
    <Fragment>
      <div className="platform-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PlatformHero />
            <PlatformOperatingSystem />
            <PlatformWorksTogether />
            <PlatformFeaturesGrid />
            <PlatformBuiltSpecifically />
            <PlatformOverviewCards />
            <PlatformFAQ />
            <PlatformCTA />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default PlatformPage;
