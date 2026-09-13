export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityPage {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  localContext: string[];
  capabilities: string[];
  faqs: CityFaq[];
}

/** City landing pages target "[category] software in [city]" search intent.
 *  VenueGlide is a cloud platform run and supported from Melbourne — these
 *  pages are honest about that (no fabricated local offices), and instead
 *  focus on genuinely different local context per city (the sports that are
 *  actually growing there) so each page carries real content, not a
 *  find-and-replace of the city name over identical copy. */
const cityPages: CityPage[] = [
  {
    slug: "sydney",
    city: "Sydney",
    state: "NSW",
    metaTitle: "Sports Venue Booking Software in Sydney | VenueGlide",
    metaDescription:
      "VenueGlide OS is cloud-based sports venue management software used by indoor cricket, padel, tennis and multi-sport venues in Sydney and across NSW.",
    h1: "Sports Venue Booking Software in Sydney",
    lede: "Sydney's indoor cricket, padel and multi-sport venues are growing fast, and most are still running bookings, memberships and payments across three or four disconnected tools. VenueGlide OS replaces that with one cloud platform, set up remotely so a Sydney venue is live in days, not months.",
    localContext: [
      "Padel has expanded quickly across Sydney's inner west, north shore and eastern suburbs over the past two years, with new clubs opening ahead of the coaching and staffing needed to run them manually. VenueGlide OS gives Sydney padel operators live court availability, coach-led session packages and automated member billing from day one, instead of retrofitting a booking system after the courts are already busy.",
      "Sydney's indoor cricket centres face the same lane-scheduling and bowling-machine-add-on complexity as venues anywhere else in Australia, plus higher casual-hire volume driven by the city's size. VenueGlide OS handles lane bookings, box cricket fixtures and coaching on one real-time calendar so double-bookings don't happen during peak weekday-evening and weekend periods.",
      "Because VenueGlide OS is a cloud platform rather than installed software, a Sydney venue doesn't need an on-site technician or a Melbourne-based visit to get started — onboarding, staff training and go-live all happen remotely, with the same platform already running venues in Victoria.",
    ],
    capabilities: [
      "Real-time court and lane availability across every booking channel",
      "Membership management with automated recurring billing",
      "Point-of-sale for pro-shop, café and equipment-hire sales",
      "Coaching and academy program scheduling",
      "Stripe payments and Xero accounting sync",
      "Remote onboarding — no on-site visit required to get started",
    ],
    faqs: [
      {
        question: "Is VenueGlide available for sports venues in Sydney?",
        answer:
          "Yes. VenueGlide OS is a cloud platform, so venues in Sydney and anywhere else in NSW can use it — onboarding and setup happen remotely, the same way they do for venues in Melbourne.",
      },
      {
        question: "Do you have an office or team based in Sydney?",
        answer:
          "VenueGlide is built and supported from Melbourne. Sydney venues run on the same cloud platform without needing a local office — setup, training and ongoing support are handled remotely.",
      },
      {
        question: "What types of Sydney venues use VenueGlide?",
        answer:
          "Indoor cricket centres, padel and tennis clubs, football and futsal facilities, and multi-sport complexes across Sydney use VenueGlide OS to manage bookings, memberships, payments and reporting in one platform.",
      },
    ],
  },
  {
    slug: "brisbane",
    city: "Brisbane",
    state: "QLD",
    metaTitle: "Sports Venue Booking Software in Brisbane | VenueGlide",
    metaDescription:
      "VenueGlide OS is cloud-based sports venue management software used by indoor cricket, padel, tennis and multi-sport venues in Brisbane and across Queensland.",
    h1: "Sports Venue Booking Software in Brisbane",
    lede: "Brisbane's warmer climate means outdoor courts compete year-round with indoor facilities for the same players, so venues need booking software that makes it effortless to fill off-peak slots. VenueGlide OS gives Brisbane venues real-time availability, automated member billing and one system for every part of the operation.",
    localContext: [
      "Brisbane's indoor cricket and multi-sport centres often run longer operating hours than southern venues, given the climate keeps casual hire strong outside the traditional cricket season. VenueGlide OS keeps lane bookings, coaching sessions and casual hire on one live calendar, so a venue can fill quieter weekday slots without double-booking peak evening demand.",
      "Queensland's padel and tennis club growth has been concentrated around Brisbane and the Gold Coast corridor, with several new multi-court sites opening in the past 18 months. VenueGlide OS gives these venues coach-led session packages, peak/off-peak pricing and direct-debit member billing without the manual admin that comes with rapid court expansion.",
      "As a cloud platform, VenueGlide OS onboards Brisbane venues the same way it onboards venues in Melbourne or anywhere else — remotely, with staff training done over video and the platform live within days.",
    ],
    capabilities: [
      "Real-time court and lane availability across every booking channel",
      "Peak/off-peak pricing that adjusts automatically",
      "Membership management with automated recurring billing",
      "Point-of-sale for pro-shop, café and equipment-hire sales",
      "Coaching and academy program scheduling",
      "Remote onboarding — no on-site visit required to get started",
    ],
    faqs: [
      {
        question: "Is VenueGlide available for sports venues in Brisbane?",
        answer:
          "Yes. VenueGlide OS is a cloud platform used by venues across Queensland, including Brisbane — setup and onboarding happen remotely, with no need for a local office visit.",
      },
      {
        question: "Can VenueGlide handle year-round bookings for a Brisbane venue that runs both indoor and outdoor courts?",
        answer:
          "Yes. VenueGlide OS manages bookings, availability and pricing across indoor and outdoor facilities on one calendar, which suits Brisbane venues balancing both through the year.",
      },
      {
        question: "What types of Brisbane venues use VenueGlide?",
        answer:
          "Indoor cricket centres, padel and tennis clubs, football and futsal facilities, and multi-sport complexes across Brisbane and South East Queensland use VenueGlide OS.",
      },
    ],
  },
  {
    slug: "perth",
    city: "Perth",
    state: "WA",
    metaTitle: "Sports Venue Booking Software in Perth | VenueGlide",
    metaDescription:
      "VenueGlide OS is cloud-based sports venue management software used by indoor cricket, padel, tennis and multi-sport venues in Perth and across Western Australia.",
    h1: "Sports Venue Booking Software in Perth",
    lede: "Perth's sports venue operators are often further from software vendors and support teams than venues on the east coast, which makes remote setup and support quality more important, not less. VenueGlide OS is a cloud platform built for exactly that — full onboarding, training and ongoing support delivered remotely, with no dependence on a local office.",
    localContext: [
      "Perth's indoor cricket and multi-sport facilities frequently serve a wider catchment area than equivalent venues in denser eastern-state cities, which means online visibility of live availability matters more — customers are travelling further and want certainty before they book. VenueGlide OS gives Perth venues real-time lane and court availability customers can check before making the trip.",
      "Western Australia's padel scene is newer than Victoria's or NSW's, with most clubs having opened in the last two to three years. VenueGlide OS gives these venues membership billing, coaching packages and point-of-sale from launch, rather than venues having to migrate off a starter booking tool once they outgrow it.",
      "Because support is delivered remotely rather than through a local office, a Perth venue gets the same onboarding timeline and ongoing support as a Melbourne venue — there's no WA-specific delay or handoff.",
    ],
    capabilities: [
      "Real-time court and lane availability customers can check before travelling",
      "Membership management with automated recurring billing",
      "Point-of-sale for pro-shop, café and equipment-hire sales",
      "Coaching and academy program scheduling",
      "Stripe payments and Xero accounting sync",
      "Remote onboarding and support — no dependence on a local office",
    ],
    faqs: [
      {
        question: "Is VenueGlide available for sports venues in Perth?",
        answer:
          "Yes. VenueGlide OS is a cloud platform, so venues in Perth and across Western Australia can use it with the same remote onboarding and support as venues anywhere else in Australia.",
      },
      {
        question: "Does the time difference between WA and Melbourne affect support?",
        answer:
          "No — support and onboarding are scheduled to suit the venue, and most setup and training is asynchronous or booked in directly with the Perth venue's own hours in mind.",
      },
      {
        question: "What types of Perth venues use VenueGlide?",
        answer:
          "Indoor cricket centres, padel and tennis clubs, football and futsal facilities, and multi-sport complexes across Perth and Western Australia use VenueGlide OS.",
      },
    ],
  },
  {
    slug: "adelaide",
    city: "Adelaide",
    state: "SA",
    metaTitle: "Sports Venue Booking Software in Adelaide | VenueGlide",
    metaDescription:
      "VenueGlide OS is cloud-based sports venue management software used by indoor cricket, padel, tennis and multi-sport venues in Adelaide and across South Australia.",
    h1: "Sports Venue Booking Software in Adelaide",
    lede: "Adelaide's indoor sports venues tend to run leaner teams than venues in bigger cities, which makes automation the biggest win — fewer manual bookings, less chasing overdue membership payments, and less time spent reconciling POS sales at the end of the night. VenueGlide OS is built around exactly that kind of single-system operation.",
    localContext: [
      "South Australia's indoor cricket centres are a well-established part of Adelaide's sports scene, with many running box cricket competitions alongside casual lane hire and coaching. VenueGlide OS keeps all three on one real-time calendar, which matters most for smaller Adelaide venues where one person often manages bookings, front-desk sales and coaching schedules together.",
      "Adelaide's padel and tennis clubs have grown steadily rather than explosively compared to the eastern states, which means many are still running on manual spreadsheets or basic booking tools rather than a full operating system. VenueGlide OS gives these venues membership billing, coaching packages and reporting without needing a larger administrative team to run it.",
      "As with every other Australian city, onboarding an Adelaide venue onto VenueGlide OS happens remotely — there's no need for an in-person visit before a venue can go live.",
    ],
    capabilities: [
      "Real-time court and lane availability across every booking channel",
      "Membership management with automated recurring billing",
      "Point-of-sale for pro-shop, café and equipment-hire sales",
      "Coaching and academy program scheduling",
      "Real-time reporting built for lean, single-manager teams",
      "Remote onboarding — no on-site visit required to get started",
    ],
    faqs: [
      {
        question: "Is VenueGlide available for sports venues in Adelaide?",
        answer:
          "Yes. VenueGlide OS is a cloud platform used by venues across South Australia, including Adelaide, with the same remote onboarding as venues anywhere else in the country.",
      },
      {
        question: "Is VenueGlide suitable for a smaller Adelaide venue with a lean team?",
        answer:
          "Yes. VenueGlide OS automates bookings, billing and reporting specifically to reduce the manual admin load on venues run by a small team, rather than requiring extra staff to operate it.",
      },
      {
        question: "What types of Adelaide venues use VenueGlide?",
        answer:
          "Indoor cricket centres, padel and tennis clubs, football and futsal facilities, and multi-sport complexes across Adelaide and South Australia use VenueGlide OS.",
      },
    ],
  },
];

export const getCityPageBySlug = (slug: string): CityPage | undefined =>
  cityPages.find((page) => page.slug === slug);

export default cityPages;
