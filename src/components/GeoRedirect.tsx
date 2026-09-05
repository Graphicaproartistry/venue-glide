import { useEffect } from "react";

const AU_TARGET_HOST = "venueglide.com.au";
const COM_HOSTS = ["venueglide.com", "www.venueglide.com"];

/**
 * This is a static site with no server we control (Hostinger serves plain
 * files), so there's no DNS/edge layer available to do real geo-IP routing
 * for us. This does the only thing actually available: check the visitor's
 * country client-side, and if they're browsing venueglide.com from
 * Australia, send them to venueglide.com.au instead — same path, query and
 * hash preserved.
 *
 * Best-effort by nature: it can only run after the JS loads, so there's a
 * brief flash of the .com page first, and if the geolocation lookup fails
 * or times out, visitors simply stay on whichever domain they typed in.
 */
const GeoRedirect: React.FC = () => {
  useEffect(() => {
    if (!COM_HOSTS.includes(window.location.hostname)) return;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    fetch("https://ipwho.is/", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.country_code === "AU") {
          window.location.replace(
            `https://${AU_TARGET_HOST}${window.location.pathname}${window.location.search}${window.location.hash}`
          );
        }
      })
      .catch(() => {
        // Geolocation lookup failed or timed out — stay put, no redirect.
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  return null;
};

export default GeoRedirect;
