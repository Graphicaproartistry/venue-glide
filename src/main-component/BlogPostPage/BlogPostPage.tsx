import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Seo, { SITE_URL } from "../../components/seo/Seo";
import Reveal from "../../components/motion/Reveal";
import MaskText from "../../components/motion/MaskText";
import MagneticButton from "../../components/motion/MagneticButton";
import { getBlogPostBySlug } from "../../data/blogPosts";
import "../../components/editorial/page-hero.css";
import "../../components/Blog/BlogPost.css";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const faqSchema =
    post.faqs && post.faqs.length
      ? [
          {
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]
      : [];

  const articleSchema = {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: { "@type": "Organization", name: "VenueGlide" },
    publisher: { "@type": "Organization", name: "VenueGlide" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <Seo
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        breadcrumbs={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
        structuredData={[articleSchema, ...faqSchema]}
      />
      <div className="blog-post-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <section className="ed-page-hero">
              <Reveal direction="up">
                <span className="ed-label">
                  <Link to="/blog">Blog</Link> / {post.tag}
                </span>
              </Reveal>
              <MaskText as="h1" className="ed-display ed-display--sm" lines={[post.title]} />
              <Reveal direction="up" delay={0.15}>
                <div className="blog-post-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Reveal>
            </section>

            <section className="ed-section blog-post-section">
              <div className="ed-container blog-post-container">
                <article className="blog-post-article">
                  {post.sections.map((section, idx) => (
                    <Reveal key={idx} direction="up" delay={Math.min(idx * 0.06, 0.3)}>
                      {section.heading && <h2>{section.heading}</h2>}
                      {section.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                      {section.bullets && (
                        <ul>
                          {section.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </Reveal>
                  ))}

                  {post.faqs && post.faqs.length > 0 && (
                    <Reveal direction="up" delay={0.1}>
                      <h2>Frequently asked questions</h2>
                      {post.faqs.map((faq, idx) => (
                        <div className="blog-post-faq-item" key={idx}>
                          <h3>{faq.question}</h3>
                          <p>{faq.answer}</p>
                        </div>
                      ))}
                    </Reveal>
                  )}

                  {post.sourceUrl && (
                    <Reveal direction="up" delay={0.15}>
                      <p className="blog-post-source">
                        Source:{" "}
                        <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer">
                          {post.sourceLabel}
                        </a>
                      </p>
                    </Reveal>
                  )}

                  <Reveal direction="up" delay={0.2} className="blog-post-cta">
                    <h3>Want to see VenueGlide OS on your venue?</h3>
                    <MagneticButton>
                      <Link className="ed-btn ed-btn--solid" to="/book-demo" data-cursor="link">
                        Book a Free Demo
                      </Link>
                    </MagneticButton>
                  </Reveal>
                </article>
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

export default BlogPostPage;
