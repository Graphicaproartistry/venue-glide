import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";

const PricingPlans: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["Pricing Plans"]} />

        <div className="pricing-plans-grid">
          {/* Starter Plan */}
          <Reveal direction="up" delay={0.05} className="pricing-plan-card">
            <div className="plan-header">
              <h3 className="plan-title">Starter</h3>
              <div className="plan-subheading">Perfect for Growing Sports Venues</div>
              <p className="plan-desc">
                Designed for independent venues and small sports clubs looking to modernise operations.
              </p>
            </div>

            <div className="plan-body">
              <div>
                <h4 className="feature-group-title">
                  <i className="far fa-users"></i> Ideal For
                </h4>
                <ul className="feature-list">
                  <li><i className="far fa-check"></i> Indoor Cricket Centres</li>
                  <li><i className="far fa-check"></i> Tennis Clubs</li>
                  <li><i className="far fa-check"></i> Padel Clubs</li>
                  <li><i className="far fa-check"></i> Football Centres</li>
                  <li><i className="far fa-check"></i> Community Sports Venues</li>
                </ul>
              </div>

              <div>
                <h4 className="feature-group-title">
                  <i className="far fa-list-check"></i> Includes
                </h4>
                <ul className="feature-list">
                  <li><i className="far fa-check"></i> Online Booking System</li>
                  <li><i className="far fa-check"></i> Membership Management</li>
                  <li><i className="far fa-check"></i> Customer CRM</li>
                  <li><i className="far fa-check"></i> Secure Online Payments</li>
                  <li><i className="far fa-check"></i> Mobile Friendly Platform</li>
                  <li><i className="far fa-check"></i> Reporting Dashboard</li>
                  <li><i className="far fa-check"></i> Email Support</li>
                  <li><i className="far fa-check"></i> Cloud Hosting</li>
                  <li><i className="far fa-check"></i> Regular Software Updates</li>
                </ul>
              </div>
            </div>

            <div className="plan-footer">
              <Link to="/contact" className="btn-plan btn-plan-outline">
                Book a Demo
              </Link>
            </div>
          </Reveal>

          {/* Professional Plan */}
          <Reveal direction="up" delay={0.1} className="pricing-plan-card popular">
            <div className="popular-badge">Most Popular</div>

            <div className="plan-header">
              <h3 className="plan-title">Professional</h3>
              <div className="plan-subheading">Built for Growing Businesses</div>
              <p className="plan-desc">
                Ideal for sports venues with higher booking volumes and more advanced operational requirements.
              </p>
            </div>

            <div className="plan-body">
              <div>
                <h4 className="feature-group-title">
                  <i className="far fa-layer-group"></i> Everything in Starter, plus:
                </h4>
                <ul className="feature-list">
                  <li><i className="far fa-check"></i> Point of Sale</li>
                  <li><i className="far fa-check"></i> Coaching Management</li>
                  <li><i className="far fa-check"></i> Marketing Tools</li>
                  <li><i className="far fa-check"></i> Automated Workflows</li>
                  <li><i className="far fa-check"></i> Advanced Reporting</li>
                  <li><i className="far fa-check"></i> Customer Portal</li>
                  <li><i className="far fa-check"></i> Staff Management</li>
                  <li><i className="far fa-check"></i> Multi-Court Scheduling</li>
                  <li><i className="far fa-check"></i> API Integrations</li>
                  <li><i className="far fa-check"></i> Priority Support</li>
                </ul>
              </div>
            </div>

            <div className="plan-footer">
              <Link to="/contact" className="btn-plan btn-plan-primary">
                Book a Demo
              </Link>
            </div>
          </Reveal>

          {/* Enterprise Plan */}
          <Reveal direction="up" delay={0.15} className="pricing-plan-card">
            <div className="plan-header">
              <h3 className="plan-title">Enterprise</h3>
              <div className="plan-subheading">Complete Solution for Multi-Venue Organisations</div>
              <p className="plan-desc">
                Designed for organisations operating multiple locations or requiring custom integrations and enterprise-level functionality.
              </p>
            </div>

            <div className="plan-body">
              <div>
                <h4 className="feature-group-title">
                  <i className="far fa-building"></i> Everything in Professional, plus:
                </h4>
                <ul className="feature-list">
                  <li><i className="far fa-check"></i> Multi-Location Management</li>
                  <li><i className="far fa-check"></i> Enterprise Security</li>
                  <li><i className="far fa-check"></i> Advanced Permissions</li>
                  <li><i className="far fa-check"></i> Custom Workflows</li>
                  <li><i className="far fa-check"></i> Dedicated Account Manager</li>
                  <li><i className="far fa-check"></i> Custom Integrations</li>
                  <li><i className="far fa-check"></i> White Label Options</li>
                  <li><i className="far fa-check"></i> Enterprise API Access</li>
                  <li><i className="far fa-check"></i> Staff Training</li>
                  <li><i className="far fa-check"></i> Premium Support</li>
                  <li><i className="far fa-check"></i> Custom Onboarding</li>
                </ul>
              </div>
            </div>

            <div className="plan-footer">
              <Link to="/contact" className="btn-plan btn-plan-outline">
                Contact Sales
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
