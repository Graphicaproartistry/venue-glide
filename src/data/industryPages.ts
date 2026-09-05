export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryPage {
  slug: string;
  sport: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  painPoints: string[];
  capabilities: string[];
  faqs: IndustryFaq[];
  relatedBlogSlug?: string;
}

const industryPages: IndustryPage[] = [
  {
    slug: "indoor-cricket-booking-software",
    sport: "Indoor Cricket",
    metaTitle: "Indoor Cricket Booking Software | Melbourne, Australia",
    metaDescription:
      "Booking software built for indoor cricket centres — lane bookings, bowling-machine add-ons, box cricket and coaching, in Melbourne and across Australia.",
    h1: "Indoor Cricket Booking Software",
    lede: "Indoor cricket centres run on more than one calendar — lane time, bowling-machine add-ons, box cricket fixtures, coaching sessions and birthday bookings all compete for the same courts. VenueGlide OS gives Melbourne and Australian indoor cricket venues one system that handles all of it.",
    painPoints: [
      "Lane bookings, box cricket and coaching all managed on separate spreadsheets or tools",
      "No way for customers to see live lane availability before calling",
      "Bowling-machine and equipment add-ons handled manually at the counter",
      "Coaching schedules clashing with casual lane bookings",
    ],
    capabilities: [
      "Real-time lane availability, so two teams are never double-booked into the same slot",
      "Paid add-ons (bowling machines, equipment hire) selected in the same booking screen as the lane",
      "Box cricket fixture and competition scheduling alongside casual lane hire",
      "Coaching and academy session management on the same calendar as lane bookings",
      "Walk-in and front-desk bookings alongside the online calendar",
      "Stripe payments, automatic invoicing and printable receipts at the venue",
    ],
    faqs: [
      {
        question: "Can indoor cricket venues manage bowling machines and lane add-ons in the same booking?",
        answer:
          "Yes. VenueGlide OS lets customers select paid add-ons like bowling-machine time in the same screen as their lane booking, instead of a separate enquiry.",
      },
      {
        question: "Does VenueGlide support box cricket competitions as well as casual lane bookings?",
        answer:
          "Yes. Box cricket fixtures, casual lane hire and coaching sessions all run on the same real-time calendar, so a venue never double-books a lane across different activities.",
      },
      {
        question: "Is there an example of an indoor cricket centre using VenueGlide OS?",
        answer:
          "Yes — CrickZilla, an indoor cricket and VR entertainment centre in Mickleham, Melbourne, runs its lane, box cricket, coaching and VR bookings on VenueGlide OS.",
      },
    ],
    relatedBlogSlug: "crickzilla-melbourne-indoor-cricket-centre-chooses-venueglide",
  },
  {
    slug: "padel-club-management-software",
    sport: "Padel",
    metaTitle: "Padel Club Management Software | Melbourne, Australia",
    metaDescription:
      "Court booking and club management software for padel clubs in Melbourne and Australia — bookings, coaching, memberships and payments in one platform.",
    h1: "Padel Club Management Software",
    lede: "Padel is one of the fastest-growing sports in Australia, and courts fill up fast. VenueGlide OS gives padel clubs real-time court booking, coaching schedules and membership management in one platform, so courts run at full utilisation without double-bookings.",
    painPoints: [
      "Popular time slots booked out manually over phone or social media messages",
      "Coaching programs and social competitions clashing with member court bookings",
      "No visibility into which courts are underused during off-peak hours",
      "Membership renewals tracked separately from court bookings",
    ],
    capabilities: [
      "Real-time court availability across every padel court, so members book online instead of calling",
      "Coaching program and social competition scheduling on the same calendar as member bookings",
      "Membership management with automated renewals",
      "Mobile-first booking — the same experience on a phone, tablet or desktop",
      "Stripe payments for court hire, coaching and membership fees",
    ],
    faqs: [
      {
        question: "Can padel clubs manage coaching programs alongside member court bookings?",
        answer:
          "Yes. Coaching sessions and social competitions run on the same real-time court calendar as regular member bookings, so there's no manual double-checking required.",
      },
      {
        question: "Does VenueGlide OS work for multi-court padel clubs?",
        answer:
          "Yes. Every court's availability is shown in real time, and the platform scales from a single-court club to a multi-court, multi-location padel operator.",
      },
    ],
  },
  {
    slug: "tennis-club-booking-software",
    sport: "Tennis",
    metaTitle: "Tennis Club Booking Software | Melbourne, Australia",
    metaDescription:
      "Court booking software for tennis clubs in Melbourne and Australia — memberships, coaching, competitions and payments in one connected platform.",
    h1: "Tennis Club Booking Software",
    lede: "Tennis clubs juggle member court bookings, coaching programs, competitions and casual hire all on the same courts. VenueGlide OS connects all of it into one real-time booking system built for how tennis clubs actually operate.",
    painPoints: [
      "Member bookings, coaching and competitions tracked in separate systems",
      "No online visibility for members into which courts are free",
      "Club competitions and ladder scheduling done manually",
      "Membership renewals and court access not connected",
    ],
    capabilities: [
      "Real-time court scheduling for member bookings, coaching and competitions",
      "Club membership management with automated renewals and access",
      "Competition and ladder scheduling alongside casual court hire",
      "Online payments for court hire, coaching and membership fees",
      "Real-time reporting on court utilisation and revenue",
    ],
    faqs: [
      {
        question: "Can tennis clubs run competitions and coaching on the same booking system as member court hire?",
        answer:
          "Yes. Competitions, coaching programs and casual member bookings all run on one real-time court calendar, so a court is never double-booked across activities.",
      },
      {
        question: "Does VenueGlide OS handle tennis club memberships?",
        answer:
          "Yes. Membership sign-up, renewals and court access are managed in the same platform as bookings, payments and reporting.",
      },
    ],
  },
  {
    slug: "football-turf-booking-software",
    sport: "Football & Futsal",
    metaTitle: "Football Turf Booking Software | Melbourne, Australia",
    metaDescription:
      "Pitch booking and league management software for football and futsal centres in Melbourne and Australia — bookings, teams and payments in one system.",
    h1: "Football Turf Booking Software",
    lede: "Five-a-side and futsal venues run casual pitch hire, league fixtures and team competitions on the same turf every night of the week. VenueGlide OS gives football and futsal centres one system for pitch scheduling, league management and customer bookings.",
    painPoints: [
      "Casual pitch bookings and league fixtures scheduled in separate spreadsheets",
      "No live pitch availability for customers booking online",
      "Team registrations and player details tracked outside the booking system",
      "Manual invoicing for team competition fees",
    ],
    capabilities: [
      "Real-time pitch availability across every turf, so casual hire and league fixtures never clash",
      "League and competition scheduling connected to the same booking calendar",
      "Customer CRM for team registrations and player contact details",
      "Stripe payments and automated invoicing for casual hire and league fees",
      "Real-time reporting on pitch utilisation and revenue",
    ],
    faqs: [
      {
        question: "Can football and futsal centres manage both casual pitch hire and league fixtures?",
        answer:
          "Yes. Casual bookings and league fixtures run on the same real-time pitch calendar, so a turf is never double-booked between a casual game and a league match.",
      },
      {
        question: "Does VenueGlide OS support team registrations for football leagues?",
        answer:
          "Yes. Team and player details are managed through the built-in customer CRM, connected to league scheduling and payments.",
      },
    ],
  },
  {
    slug: "basketball-court-booking-software",
    sport: "Basketball",
    metaTitle: "Basketball Court Booking Software | Melbourne, Australia",
    metaDescription:
      "Court hire and facility management software for basketball venues in Melbourne and Australia — bookings, coaching, memberships and POS in one platform.",
    h1: "Basketball Court Booking Software",
    lede: "Basketball facilities run court hire, coaching sessions, competitions and retail sales side by side. VenueGlide OS connects court bookings, coaching schedules and point-of-sale into one platform built for basketball venues.",
    painPoints: [
      "Court hire, coaching sessions and competitions booked through separate tools",
      "No live court availability for customers booking online",
      "Retail and café sales tracked separately from court bookings",
      "Membership and casual court hire not connected",
    ],
    capabilities: [
      "Real-time court availability for hire, coaching and competitions",
      "Coaching program and team scheduling on the same calendar as casual hire",
      "Integrated point of sale for retail, café and equipment hire",
      "Membership management alongside casual court bookings",
      "Real-time reporting on court utilisation and revenue",
    ],
    faqs: [
      {
        question: "Can basketball facilities manage court hire and coaching on the same system?",
        answer:
          "Yes. Coaching sessions, team competitions and casual court hire all run on one real-time booking calendar.",
      },
      {
        question: "Does VenueGlide OS include point of sale for basketball facilities?",
        answer:
          "Yes. Retail, café and equipment-hire sales are processed through an integrated POS connected directly to customer accounts.",
      },
    ],
  },
];

export const getIndustryPageBySlug = (slug: string): IndustryPage | undefined =>
  industryPages.find((page) => page.slug === slug);

export default industryPages;
