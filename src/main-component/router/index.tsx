import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WowInit from "../../components/wowInit/wowInit";
import ScrollToTop from "./ScrollToTop";

// ✅ Every route is code-split so a visit to any single page only downloads
// that page's JS, instead of the whole site (including unused demo pages
// like /ai-marketing, /ai-chatbot, /team, /career, /project) up front.
const Homepage = lazy(() => import("../HomePage"));
const HomePage2 = lazy(() => import("../HomePage2/HomePage2"));
const HomePage3 = lazy(() => import("../HomePage3/HomePage3"));
const AboutPage = lazy(() => import("../AboutPage/AboutPage"));
const PlatformPage = lazy(() => import("../PlatformPage/PlatformPage"));
const SolutionPage = lazy(() => import("../SolutionPage/SolutionPage"));
const IndustriesPage = lazy(() => import("../IndustriesPage/IndustriesPage"));
const IndustryLandingPage = lazy(() => import("../IndustryLandingPage/IndustryLandingPage"));
const ServicePage = lazy(() => import("../ServicePage/ServicePage"));
const SeviceSinglePage = lazy(() => import("../SeviceSinglePage/SeviceSinglePage"));
const CareerSection = lazy(() => import("../CareerSection/CareerSection"));
const CareerDetails = lazy(() => import("../CareerDetails/CareerDetails"));
const ProjectPage = lazy(() => import("../ProjectPage/ProjectPage"));
const ProjectDetails = lazy(() => import("../ProjectDetails/ProjectDetails"));
const TeamPage = lazy(() => import("../TeamPage/TeamPage"));
const BlogPage = lazy(() => import("../BlogPage/BlogPage"));
const BlogPostPage = lazy(() => import("../BlogPostPage/BlogPostPage"));
const ContactPage = lazy(() => import("../ContactPage/ContactPage"));
const PricingPage = lazy(() => import("../PricingPage/PricingPage"));
const BookDemoPage = lazy(() => import("../BookDemoPage/BookDemoPage"));
const ErrorPage = lazy(() => import("../ErrorPage/ErrorPage"));

// ✅ Router Component
const AllRoute: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <WowInit />
        <ScrollToTop />

        <Suspense fallback={null}>
          <Routes>
            {/* ✅ Home Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/ai-marketing" element={<HomePage2 />} />
            <Route path="/ai-chatbot" element={<HomePage3 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/solutions" element={<SolutionPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:slug" element={<IndustryLandingPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/service-details" element={<SeviceSinglePage />} />
            <Route path="/career" element={<CareerSection />} />
            <Route path="/career-details" element={<CareerDetails />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/blog-details" element={<Navigate to="/blog" replace />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/book-demo" element={<BookDemoPage />} />

            {/* ✅ Legacy/alias URLs — redirect rather than serving duplicate
                content on two paths, which splits SEO authority between them. */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/solution" element={<Navigate to="/solutions" replace />} />
            <Route path="/industry" element={<Navigate to="/industries" replace />} />
            <Route path="/book-a-demo" element={<Navigate to="/book-demo" replace />} />

            {/* ✅ Error Page */}
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
