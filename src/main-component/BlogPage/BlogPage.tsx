import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Seo from "../../components/seo/Seo";
import BlogHero from "../../components/Blog/BlogHero";
import BlogGrid from "../../components/Blog/BlogGrid";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

const BlogPage: React.FC = () => {
  return (
    <Fragment>
      <Seo
        title="Blog | VenueGlide OS Sports Venue Software"
        description="News and customer stories from VenueGlide OS — sports venue booking software for Melbourne and Australia."
        path="/blog"
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
      />
      <div className="blog-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <BlogHero />
            <BlogGrid />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPage;
