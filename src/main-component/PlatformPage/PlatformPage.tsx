import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Seo from "../../components/seo/Seo";
import PlatformHero from "../../components/PlatformComponents/PlatformHero";
import PlatformOperatingSystem from "../../components/PlatformComponents/PlatformOperatingSystem";
import PlatformBookingExperience from "../../components/PlatformComponents/PlatformBookingExperience";
import PlatformExperiencePreview from "../../components/PlatformComponents/PlatformExperiencePreview";
import PlatformCustomerAccounts from "../../components/PlatformComponents/PlatformCustomerAccounts";
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
      <Seo
        title="VenueGlide OS Platform | Sports Venue Management System"
        description="Explore the VenueGlide OS platform: online bookings, VR and activity session previews, memberships, POS, coaching and reporting for sports venues in Melbourne, across Australia and cloud-accessible worldwide, with native Stripe, Xero and Igloo staffless-access integrations."
        path="/platform"
        breadcrumbs={[{ name: "Platform", path: "/platform" }]}
      />
      <div className="platform-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PlatformHero />
            <PlatformOperatingSystem />
            <PlatformBookingExperience />
            <PlatformExperiencePreview />
            <PlatformCustomerAccounts />
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
