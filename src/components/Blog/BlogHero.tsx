import React from "react";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";
import "../editorial/page-hero.css";

const BlogHero: React.FC = () => {
  return (
    <section className="ed-page-hero">
      <Reveal direction="up">
        <span className="ed-label">Blog</span>
      </Reveal>

      <MaskText as="h1" className="ed-display ed-display--sm" lines={["News & customer stories"]} />

      <Reveal direction="up" delay={0.15}>
        <p className="ed-lede">
          Updates from VenueGlide OS, and stories from the Melbourne and
          Australian sports venues running their bookings, memberships and
          operations on the platform.
        </p>
      </Reveal>
    </section>
  );
};

export default BlogHero;
