import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Seo from "../../components/seo/Seo";
import Reveal from "../../components/motion/Reveal";
import MaskText from "../../components/motion/MaskText";
import MagneticButton from "../../components/motion/MagneticButton";
import cityPages from "../../data/cityPages";
import "../../components/editorial/page-hero.css";
import "../IndustryLandingPage/IndustryLandingPage.css";

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does VenueGlide operate outside Melbourne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. VenueGlide OS is a cloud platform built and supported from Melbourne, used by sports venues across every Australian state and territory. Onboarding and support are delivered remotely, with no need for a local office visit.",
      },
    },
    {
      "@type": "Question",
      name: "Is my city listed here required for VenueGlide to work in my area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. VenueGlide OS works for sports venues anywhere in Australia — the cities below are common examples, not a restricted service area.",
      },
    },
  ],
};

const LocationsPage: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title="Sports Venue Software Across Australia | VenueGlide"
        description="VenueGlide OS is cloud-based sports venue management software used by indoor cricket, padel, tennis and multi-sport venues in Sydney, Brisbane, Perth, Adelaide and across Australia."
        path="/locations"
        breadcrumbs={[{ name: "Locations", path: "/locations" }]}
        structuredData={[faqSchema]}
      />
      <div className="industry-landing-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <section className="ed-page-hero">
              <Reveal direction="up">
                <span className="ed-label">Locations</span>
              </Reveal>
              <MaskText
                as="h1"
                className="ed-display ed-display--sm"
                lines={["Sports venue software,", "wherever you operate in Australia"]}
              />
              <Reveal direction="up" delay={0.15}>
                <p className="ed-lede">
                  VenueGlide OS is a cloud platform built and supported from Melbourne,
                  used by sports venues across every Australian state — no local
                  office required. Onboarding, training and support are all delivered
                  remotely, so a venue anywhere in the country can be live in days.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.25} className="ed-hero-actions">
                <MagneticButton>
                  <Link className="ed-btn ed-btn--solid" to="/book-demo" data-cursor="link">
                    Book a Free Demo
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <a className="ed-btn ed-btn--ghost" href="#locations-grid" data-cursor="link">
                    See Locations
                  </a>
                </MagneticButton>
              </Reveal>
            </section>

            <section className="ed-section industry-landing-section" id="locations-grid">
              <div className="ed-container industry-landing-container" style={{ maxWidth: "980px" }}>
                <Reveal direction="up">
                  <h2>Where VenueGlide venues operate</h2>
                </Reveal>
                <div className="industry-landing-list">
                  {cityPages.map((page, idx) => (
                    <Reveal
                      key={page.slug}
                      direction="up"
                      delay={Math.min(idx * 0.06, 0.3)}
                      className="industry-landing-list-item"
                    >
                      <Link to={`/locations/${page.slug}`} style={{ color: "var(--ed-accent, #00d4ff)" }}>
                        {page.city}, {page.state}
                      </Link>
                    </Reveal>
                  ))}
                </div>

                <Reveal direction="up" delay={0.1}>
                  <p style={{ fontSize: "14.5px", color: "rgba(255,255,255,0.6)", marginTop: "8px" }}>
                    Not seeing your city? VenueGlide OS runs anywhere in Australia — get in
                    touch and we'll set your venue up the same way.
                  </p>
                </Reveal>

                <Reveal direction="up" delay={0.2} className="industry-landing-cta">
                  <h3>See VenueGlide OS on your venue</h3>
                  <MagneticButton>
                    <Link className="ed-btn ed-btn--solid" to="/book-demo" data-cursor="link">
                      Book a Free Demo
                    </Link>
                  </MagneticButton>
                </Reveal>
              </div>
            </section>
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default LocationsPage;
