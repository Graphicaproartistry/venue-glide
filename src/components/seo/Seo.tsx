import { useEffect } from "react";

export const SITE_URL = "https://www.venueglide.com";
export const SITE_NAME = "VenueGlide";

interface SeoProps {
  title: string;
  description: string;
  /** Path only, e.g. "/platform" — combined with SITE_URL for canonical + OG. */
  path: string;
  /** Extra JSON-LD objects (schema.org) to inject alongside the default Organization graph. */
  structuredData?: object[];
  /** Set false on pages that shouldn't be indexed (none currently, but kept for completeness). */
  index?: boolean;
  /** Breadcrumb trail (excluding Home, which is added automatically) for BreadcrumbList schema — improves SERP display. */
  breadcrumbs?: { name: string; path: string }[];
}

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel: string, href: string) => {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SEO_SCRIPT_ID = "seo-structured-data";

/**
 * Sets per-page title, meta description, canonical URL, Open Graph/Twitter
 * tags, and JSON-LD structured data via direct DOM manipulation — no
 * react-helmet dependency, since a CRA SPA can't server-render a <Head>
 * anyway and this project avoids adding dependencies where a few DOM calls
 * do the job.
 *
 * Every page gets an Organization + WebSite graph (with areaServed set to
 * Melbourne/Victoria/Australia for local SEO); pass `structuredData` for
 * page-specific schema (FAQPage, SoftwareApplication, BreadcrumbList, etc).
 */
const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  structuredData = [],
  index = true,
  breadcrumbs = [],
}) => {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const canonicalUrl = `${SITE_URL}${path}`;

    setMeta("name", "description", description);
    setMeta("name", "robots", index ? "index, follow" : "noindex, nofollow");
    setLink("canonical", canonicalUrl);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_AU");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    const orgGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "@id": `${SITE_URL}/#software`,
          name: "VenueGlide OS",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Cloud-based sports venue management software for bookings, memberships, coaching, POS, staffless access and reporting.",
          url: SITE_URL,
          areaServed: [
            { "@type": "City", name: "Melbourne" },
            { "@type": "State", name: "Victoria" },
            { "@type": "Country", name: "Australia" },
          ],
        },
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          areaServed: "Australia",
          sameAs: ["https://www.linkedin.com/company/143606390/"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "12 Dimboola Road",
            addressLocality: "Broadmeadows",
            addressRegion: "VIC",
            postalCode: "3047",
            addressCountry: "AU",
          },
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: fullTitle,
          description,
          isPartOf: { "@id": `${SITE_URL}/#website` },
        },
        ...(breadcrumbs.length
          ? [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                  ...breadcrumbs.map((crumb, idx) => ({
                    "@type": "ListItem",
                    position: idx + 2,
                    name: crumb.name,
                    item: `${SITE_URL}${crumb.path}`,
                  })),
                ],
              },
            ]
          : []),
        ...structuredData,
      ],
    };

    let script = document.getElementById(SEO_SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SEO_SCRIPT_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(orgGraph);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, index]);

  return null;
};

export default Seo;
