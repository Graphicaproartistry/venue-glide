import React from "react";
import Marquee from "react-fast-marquee";

/**
 * Editorial text marquee of the sports VenueGlide supports.
 *
 * This deliberately does NOT use the template's stock brand logos
 * ("Sitemark", "SiteGPT", "Madrid" et al) that shipped with the theme:
 * presenting invented companies as customers is both the clearest
 * "assembled from a template" tell on the page and a claim the product
 * can't back up. A running list of venue types says something true and
 * reads as a deliberate typographic device.
 */
const SPORTS = [
  "Indoor cricket",
  "Padel",
  "Tennis",
  "Futsal",
  "Basketball",
  "Badminton",
  "Squash",
  "Pickleball",
  "Netball",
  "VR entertainment",
  "Multi-sport",
];

const TrustMarquee: React.FC = () => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="ed-marquee" aria-label={`Supported venue types: ${SPORTS.join(", ")}`}>
      <Marquee speed={44} gradient={false} play={!prefersReducedMotion} autoFill>
        {SPORTS.map((sport) => (
          <span className="ed-marquee-word" key={sport} aria-hidden="true">
            {sport}
            <span className="ed-marquee-dot" />
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustMarquee;
