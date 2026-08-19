import React, { useState } from "react";

const ContactFormCustom: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    jobTitle: "",
    email: "",
    phone: "",
    industry: "",
    numLocations: "",
    numCourts: "",
    currentSoftware: "",
    numMembers: "",
    enquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact-form-section">
      <div className="container">
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Contact Form
        </h2>
        <h3 className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          Tell Us About Your Venue
        </h3>

        <div className="demo-form-wrapper wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
          {submitted ? (
            <div className="text-center py-5">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "rgba(0, 255, 151, 0.15)",
                  border: "2px solid #00D4ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  color: "#00D4ff",
                  fontSize: "32px",
                }}
              >
                <i className="far fa-check"></i>
              </div>
              <h3 style={{ color: "#ffffff", fontWeight: 800, marginBottom: "16px" }}>
                Enquiry Sent Successfully!
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
                Thank you for reaching out to VenueGlide. One of our Venue Management Specialists will be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="form-group-section">
                <div className="form-section-header">
                  <i className="far fa-user me-2"></i> Personal Information
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className="form-control-custom"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Business Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      placeholder="e.g. Metro Sports Club"
                      className="form-control-custom"
                      value={formData.businessName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Job Title *</label>
                    <input
                      type="text"
                      name="jobTitle"
                      required
                      placeholder="e.g. General Manager"
                      className="form-control-custom"
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. sarah@metrosports.com"
                      className="form-control-custom"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +61 400 123 456"
                      className="form-control-custom"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Venue Information */}
              <div className="form-group-section">
                <div className="form-section-header">
                  <i className="far fa-building me-2"></i> Venue Information
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Industry *</label>
                    <select
                      name="industry"
                      required
                      className="form-control-custom"
                      value={formData.industry}
                      onChange={handleChange}
                    >
                      <option value="">Select Industry</option>
                      <option value="Indoor Cricket Centres">Indoor Cricket Centres</option>
                      <option value="Padel Clubs">Padel Clubs</option>
                      <option value="Tennis Clubs">Tennis Clubs</option>
                      <option value="Football Centres">Football Centres</option>
                      <option value="Basketball Facilities">Basketball Facilities</option>
                      <option value="Pickleball Clubs">Pickleball Clubs</option>
                      <option value="Badminton Centres">Badminton Centres</option>
                      <option value="Squash Centres">Squash Centres</option>
                      <option value="Sports Academies">Sports Academies</option>
                      <option value="Community Recreation Centres">Community Recreation Centres</option>
                      <option value="Multi-Sport Venues">Multi-Sport Venues</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Number of Locations *</label>
                    <select
                      name="numLocations"
                      required
                      className="form-control-custom"
                      value={formData.numLocations}
                      onChange={handleChange}
                    >
                      <option value="">Select Number of Locations</option>
                      <option value="1 Location">1 Location</option>
                      <option value="2 - 5 Locations">2 - 5 Locations</option>
                      <option value="6 - 10 Locations">6 - 10 Locations</option>
                      <option value="10+ Multi-Venue Network">10+ Multi-Venue Network</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Number of Courts / Facilities *</label>
                    <select
                      name="numCourts"
                      required
                      className="form-control-custom"
                      value={formData.numCourts}
                      onChange={handleChange}
                    >
                      <option value="">Select Courts/Facilities</option>
                      <option value="1 - 4 Courts">1 - 4 Courts</option>
                      <option value="5 - 10 Courts">5 - 10 Courts</option>
                      <option value="11 - 20 Courts">11 - 20 Courts</option>
                      <option value="20+ Courts">20+ Courts</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Current Software *</label>
                    <input
                      type="text"
                      name="currentSoftware"
                      required
                      placeholder="e.g. Spreadsheets, Mindbody, Ezypay, Other"
                      className="form-control-custom"
                      value={formData.currentSoftware}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Number of Members *</label>
                    <select
                      name="numMembers"
                      required
                      className="form-control-custom"
                      value={formData.numMembers}
                      onChange={handleChange}
                    >
                      <option value="">Select Member Count</option>
                      <option value="Under 500">Under 500</option>
                      <option value="500 - 1,500">500 - 1,500</option>
                      <option value="1,500 - 5,000">1,500 - 5,000</option>
                      <option value="5,000+">5,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Your Enquiry */}
              <div className="form-group-section">
                <div className="form-section-header">
                  <i className="far fa-paper-plane me-2"></i> Your Enquiry
                </div>
                <div className="mb-3">
                  <label className="form-label">How can we help? *</label>
                  <textarea
                    name="enquiry"
                    required
                    rows={4}
                    placeholder="Tell us about your venue, your goals and how we can help."
                    className="form-control-custom"
                    value={formData.enquiry}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div className="mt-4">
                <button type="submit" className="btn-submit-demo">
                  Send Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormCustom;
