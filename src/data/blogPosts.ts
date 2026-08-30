export interface BlogContentSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  tag: string;
  date: string;
  isoDate: string;
  readTime: string;
  sections: BlogContentSection[];
  faqs?: BlogFaqItem[];
  sourceLabel?: string;
  sourceUrl?: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "crickzilla-melbourne-indoor-cricket-centre-chooses-venueglide",
    title: "CrickZilla Indoor Cricket Centre Chooses VenueGlide OS to Power Its Melbourne Booking System",
    metaTitle: "CrickZilla Melbourne Chooses VenueGlide OS for Online Bookings",
    metaDescription:
      "CrickZilla, Melbourne's indoor cricket and VR entertainment centre in Mickleham, has adopted VenueGlide OS to run online bookings for its lanes, box cricket, coaching and VR sessions.",
    excerpt:
      "Melbourne's indoor cricket and VR entertainment venue CrickZilla has moved its lane, box cricket, coaching and VR bookings onto VenueGlide OS — here's what changes for players in Melbourne's northern suburbs.",
    tag: "Customer Story",
    date: "30 August 2026",
    isoDate: "2026-08-30",
    readTime: "6 min read",
    sourceLabel: "CrickZilla",
    sourceUrl: "https://crickzilla.com.au/",
    sections: [
      {
        paragraphs: [
          "CrickZilla, the indoor cricket and virtual reality entertainment centre in Mickleham, in Melbourne's northern suburbs, has adopted VenueGlide OS to run online bookings across its lanes, box cricket, coaching sessions and VR experiences. The move puts one of Melbourne's newest indoor cricket facilities on a single, mobile-first booking system rather than juggling separate tools for lane bookings, coaching schedules and event enquiries.",
          "For a venue built around fast-turnaround sessions — lane time, a box cricket match, a VR game, a coaching block — the booking page is the first thing a customer touches. CrickZilla's move to VenueGlide OS is a bet that a faster, clearer booking experience keeps players coming back, whether they're in Craigieburn, Greenvale, Roxburgh Park or further afield across Melbourne.",
        ],
      },
      {
        heading: "Inside CrickZilla: Melbourne's Home of Indoor Cricket and VR Entertainment",
        paragraphs: [
          "CrickZilla operates from 36 Distribution Drive, Mickleham VIC 3064, serving Melbourne's growing northern corridor. The venue is built around eight indoor cricket practice lanes with professional turf, alongside Australia's first BOLA Trueman3 bowling machine — a video-synchronised system that displays real bowler footage on an LED screen, timed to the ball release, so batters face a simulated live bowler rather than a fixed machine delivery.",
          "Beyond the lanes, CrickZilla runs competitive and social box cricket matches, one-to-one and group coaching focused on technique, a virtual reality cricket experience, and a retail counter (the Zilla Pro Shop) for bats, gloves and other gear. The venue also hosts cricket-themed birthday parties and corporate team-building events, and is open seven days a week, with lane bookings available from as early as 7am through to 9pm.",
        ],
      },
      {
        heading: "Why CrickZilla Chose VenueGlide OS",
        paragraphs: [
          "A venue running eight lanes, a shared bowling machine, box cricket fixtures, coaching bookings and VR sessions side by side needs a booking system that can show real-time availability across all of it at once — not a calendar per activity. That's the specific problem VenueGlide OS is built to solve for multi-activity indoor sports venues.",
        ],
        bullets: [
          "Real-time availability across every lane and activity, so two customers can never be double-booked into the same slot",
          "One mobile-first booking flow — the same experience on a phone, tablet or desktop, matching how most bookings actually happen: on a phone, on the way to the venue",
          "Paid add-ons (like bowling-machine time) selected in the same booking screen as the session itself, instead of a separate enquiry",
          "A saved customer account so returning players and coaching clients can see their upcoming and past bookings and rebook in a couple of clicks",
          "Secure online payment processing at the time of booking, removing manual invoicing for casual sessions and party bookings",
        ],
      },
      {
        heading: "What This Means for Melbourne's Indoor Cricket Community",
        paragraphs: [
          "CrickZilla's customer base spans Melbourne's northern suburbs — Craigieburn, Greenvale, Roxburgh Park, Mickleham and beyond — plus cricket academies, junior clubs and corporate groups booking further afield. Moving lane, coaching and box cricket bookings onto VenueGlide OS means those customers now book online, see live availability instead of calling ahead, and get instant confirmation for a lane, a coaching session, a VR game or a full birthday package.",
          "It's a practical example of what an indoor cricket booking system needs to do in a market like Melbourne, where the same venue competes for lane time, coaching bookings, VR sessions and party bookings all in one calendar.",
        ],
      },
      {
        heading: "Built in Melbourne, for Sports Venues Everywhere",
        paragraphs: [
          "VenueGlide OS is built in Melbourne, Australia, for indoor cricket centres, padel clubs, tennis venues, football turfs and multi-sport complexes — and CrickZilla is one of the sports venues now running its bookings on the platform. The underlying system is cloud-based, so the same booking, membership, payments and reporting tools that power CrickZilla's Mickleham venue are available to sports and entertainment venues anywhere, not just in Melbourne or Australia.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is CrickZilla located?",
        answer:
          "CrickZilla is located at 36 Distribution Drive, Mickleham VIC 3064, serving Melbourne's northern suburbs including Craigieburn, Greenvale and Roxburgh Park.",
      },
      {
        question: "What can you book at CrickZilla?",
        answer:
          "CrickZilla offers indoor cricket lane bookings (including its BOLA Trueman3 bowling machine), box cricket matches, one-to-one and group coaching, a virtual reality cricket experience, birthday parties and corporate events.",
      },
      {
        question: "What booking software does CrickZilla use?",
        answer:
          "CrickZilla runs its online bookings on VenueGlide OS, a Melbourne-built sports venue management platform covering real-time bookings, payments, customer accounts and reporting.",
      },
    ],
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

export default blogPosts;
