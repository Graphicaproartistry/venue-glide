import React from "react";
import featureBg from "../../images/bg/features-gradient-bg.png";

const PlatformOverviewCards: React.FC = () => {
  return (
    <section
      className="venueglide-overview"
      style={{ backgroundImage: `url(${featureBg})` }}
    >
      {/* Side Dot Grid Patterns */}
      <svg
        className="dot-grid-left"
        viewBox="0 0 160 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="dot-pattern-platform-left"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="2" fill="#00ff97" />
        </pattern>
        <rect width="160" height="320" fill="url(#dot-pattern-platform-left)" />
      </svg>

      <svg
        className="dot-grid-right"
        viewBox="0 0 160 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="dot-pattern-platform-right"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="2" fill="#00ff97" />
        </pattern>
        <rect width="160" height="320" fill="url(#dot-pattern-platform-right)" />
      </svg>

      <div className="container">
        <div className="row g-4">
          {/* Card 1: Built for Every Sport */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card">
              <div className="icon-badge blue">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>

              <h3 className="card-title">Built for Every Sport</h3>
              <p className="card-desc">
                VenueGlide supports a wide range of sports and recreation
                facilities including:
              </p>

              <ul className="card-list bullets">
                <li>Indoor Cricket Centres</li>
                <li>Padel Clubs</li>
                <li>Tennis Clubs</li>
                <li>Football Centres</li>
                <li>Basketball Facilities</li>
                <li>Pickleball Clubs</li>
                <li>Badminton Centres</li>
                <li>Squash Facilities</li>
                <li>Sports Academies</li>
                <li>Recreation Centres</li>
                <li>Multi-Sport Venues</li>
              </ul>

              <div className="card-footer-text">
                Every venue can customise resources, pricing, availability rules and memberships to suit its unique requirements.
              </div>
            </div>
          </div>

          {/* Card 2: A Platform That Grows With Your Business */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card">
              <div className="icon-badge orange">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>

              <h3 className="card-title">
                A Platform That Grows With Your Business
              </h3>
              <p className="card-desc">
                Whether you're operating one venue or managing a national network of sports facilities, VenueGlide provides the flexibility and scalability your business needs.
              </p>

              <div className="card-sublabel">Our enterprise-ready architecture supports:</div>
              <ul className="card-list checks">
                <li>Multi-location management</li>
                <li>Unlimited staff accounts</li>
                <li>Role-based permissions</li>
                <li>Secure cloud hosting</li>
                <li>API integrations</li>
                <li>Automated workflows</li>
                <li>Real-time reporting</li>
                <li>Centralised customer data</li>
                <li>High availability infrastructure</li>
              </ul>
              <div className="card-footer-text">
                As your business expands, VenueGlide grows with you.
              </div>
            </div>
          </div>

          {/* Card 3: Connect With Your Favourite Business Tools */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card">
              <div className="icon-badge pink">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>

              <h3 className="card-title">
                Connect With Your Favourite Business Tools
              </h3>
              <p className="card-desc">
                VenueGlide integrates seamlessly with the software you already use. <br />
                Supported integrations include:
              </p>

              <div className="card-sublabel">Integrations & compatibility:</div>
              <ul className="card-list bullets">
                <li>Stripe</li>
                <li>Xero</li>
                <li>QuickBooks</li>
                <li>Square</li>
                <li>Google Calendar</li>
                <li>Microsoft 365</li>
                <li>Zapier</li>
                <li>Twilio</li>
                <li>Mailchimp</li>
                <li>Door Access Systems</li>
                <li>Accounting Software</li>
                <li>Payment Gateways</li>
              </ul>
            </div>
          </div>

          {/* Card 4: VenueGlide */}
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="600ms">
            <div className="venueglide-overview-card">
              <div className="icon-badge green">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              <h3 className="card-title">VenueGlide</h3>
              <p className="card-desc">
                Thousands of daily venue operations can be managed through one intelligent platform.
              </p>

              <div className="card-sublabel">
                VenueGlide helps businesses:
              </div>
              <ul className="card-list checks">
                <li>Reduce administration</li>
                <li>Increase bookings</li>
                <li>Improve member retention</li>
                <li>Automate repetitive tasks</li>
                <li>Gain real-time business insights</li>
                <li>Improve customer experiences</li>
                <li>Increase operational efficiency</li>
                <li>Grow revenue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverviewCards;
