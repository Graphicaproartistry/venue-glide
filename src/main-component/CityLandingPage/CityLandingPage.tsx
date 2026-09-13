import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Seo from "../../components/seo/Seo";
import Reveal from "../../components/motion/Reveal";
import MaskText from "../../components/motion/MaskText";
import MagneticButton from "../../components/motion/MagneticButton";
import { getCityPageBySlug } from "../../data/cityPages";
import "../../components/editorial/page-hero.css";
import "../IndustryLandingPage/IndustryLandingPage.css";

const CityLandingPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getCityPageBySlug(slug) : undefined;

  if (!page) {
    return <Navigate to="/locations" replace />;
  }

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Seo
        title={page.metaTitle}
        description={page.metaDescription}
        path={`/locations/${page.slug}`}
        breadcrumbs={[
          { name: "Locations", path: "/locations" },
          { name: page.city, path: `/locations/${page.slug}` },
        ]}
        structuredData={[faqSchema]}
      />
      <div className="industry-landing-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <section className="ed-page-hero">
              <Reveal direction="up">
                <span className="ed-label">
                  <Link to="/locations">Locations</Link> / {page.city}
                </span>
              </Reveal>
              <MaskText as="h1" className="ed-display ed-display--sm" lines={[page.h1]} />
              <Reveal direction="up" delay={0.15}>
                <p className="ed-lede">{page.lede}</p>
              </Reveal>
              <Reveal direction="up" delay={0.25} className="ed-hero-actions">
                <MagneticButton>
                  <Link className="ed-btn ed-btn--solid" to="/book-demo" data-cursor="link">
                    Book a Free Demo
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link className="ed-btn ed-btn--ghost" to="/pricing" data-cursor="link">
                    See Pricing
                  </Link>
                </MagneticButton>
              </Reveal>
            </section>

            <section className="ed-section industry-landing-section">
              <div className="ed-container industry-landing-container">
                <Reveal direction="up">
                  <h2>{page.city} venues, {page.state}</h2>
                </Reveal>
                {page.localContext.map((paragraph, idx) => (
                  <Reveal key={idx} direction="up" delay={Math.min(idx * 0.06, 0.3)}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}

                <Reveal direction="up" delay={0.1}>
                  <h2>What VenueGlide OS gives {page.city} venues</h2>
                </Reveal>
                <div className="industry-landing-list industry-landing-list--check">
                  {page.capabilities.map((cap, idx) => (
                    <Reveal
                      key={idx}
                      direction="up"
                      delay={Math.min(idx * 0.06, 0.3)}
                      className="industry-landing-list-item"
                    >
                      {cap}
                    </Reveal>
                  ))}
                </div>

                <Reveal direction="up" delay={0.15}>
                  <h2>Frequently asked questions</h2>
                </Reveal>
                {page.faqs.map((faq, idx) => (
                  <Reveal key={idx} direction="up" delay={Math.min(idx * 0.06, 0.3)} className="industry-landing-faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </Reveal>
                ))}

                <Reveal direction="up" delay={0.2} className="industry-landing-cta">
                  <h3>See VenueGlide OS on your {page.city} venue</h3>
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
    </>
  );
};

export default CityLandingPage;
