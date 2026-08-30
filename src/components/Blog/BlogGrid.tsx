import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../motion/Reveal";
import MagneticButton from "../motion/MagneticButton";
import blogPosts from "../../data/blogPosts";
import "./BlogGrid.css";

const BlogGrid: React.FC = () => {
  return (
    <section className="ed-section blog-grid-section">
      <div className="ed-container">
        <div className="blog-grid">
          {blogPosts.map((post, idx) => (
            <Reveal
              key={post.slug}
              direction="up"
              delay={Math.min(idx * 0.08, 0.3)}
              className="blog-card"
            >
              <span className="blog-card-tag">{post.tag}</span>
              <h3 className="blog-card-title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <MagneticButton>
                <Link className="blog-card-link" to={`/blog/${post.slug}`} data-cursor="link">
                  Read the story →
                </Link>
              </MagneticButton>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
