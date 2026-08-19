import React, { Fragment, useEffect } from "react";
import Header from "../../components/Header/Header";
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
  useEffect(() => {
    // SEO Title
    document.title = "Contact VenueGlide | Sports Venue Management Software Australia";

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Contact VenueGlide to learn how our sports venue management software can help your venue simplify bookings, memberships, payments, CRM, reporting and daily operations. Book a demo or speak with our team today."
    );
  }, []);

  return (
    <Fragment>
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