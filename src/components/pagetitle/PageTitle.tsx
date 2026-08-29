import React from "react";
import { Link } from "react-router-dom";
import MaskText from "../motion/MaskText";
import Reveal from "../motion/Reveal";
import "../editorial/page-hero.css";

interface PageTitleProps {
  pageTitle: string;
  pagesub?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageTitle, pagesub }) => {
  return (
    <section className="ed-page-hero">
      <Reveal direction="up">
        <nav aria-label="Breadcrumb" className="ed-label" style={{ marginBottom: 20 }}>
          <Link to="/">Home</Link>
          {pagesub && (
            <>
              <span aria-hidden="true">/</span>
              {pagesub}
            </>
          )}
        </nav>
      </Reveal>

      {pageTitle && (
        <MaskText as="h1" className="ed-display ed-display--sm" lines={[pageTitle]} />
      )}
    </section>
  );
};

export default PageTitle;
