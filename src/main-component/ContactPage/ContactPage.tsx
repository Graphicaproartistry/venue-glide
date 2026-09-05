import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Seo from "../../components/seo/Seo";
import ContactHero from "../../components/ContactComponents/ContactHero";
import ContactSpeakWithTeam from "../../components/ContactComponents/ContactSpeakWithTeam";
import ContactInfoCards from "../../components/ContactComponents/ContactInfoCards";
import ContactFormCustom from "../../components/ContactComponents/ContactFormCustom";
import ContactWhyContact from "../../components/ContactComponents/ContactWhyContact";
import ContactServingAustralia from "../../components/ContactComponents/ContactServingAustralia";
import ContactIndustries from "../../components/ContactComponents/ContactIndustries";
import ContactFAQ from "../../components/ContactComponents/ContactFAQ";
import ContactWhyVenueGlide from "../../components/ContactComponents/ContactWhyVenueGlide";
import ContactFinalCTA from "../../components/ContactComponents/ContactFinalCTA";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import "../../components/ContactComponents/Contact.css";

const ContactPage: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title="Contact VenueGlide | Sports Venue Software Melbourne"
        description="Contact VenueGlide to see how our software helps Melbourne and Australian venues run bookings, payments and operations."
        path="/contact"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <div className="contact-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <ContactHero />
            <ContactSpeakWithTeam />
            <ContactInfoCards />
            <ContactFormCustom />
            <ContactWhyContact />
            <ContactServingAustralia />
            <ContactIndustries />
            <ContactFAQ />
            <ContactWhyVenueGlide />
            <ContactFinalCTA />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default ContactPage;