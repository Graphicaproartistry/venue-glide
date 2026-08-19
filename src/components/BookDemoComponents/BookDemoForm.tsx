import React, { useState } from "react";

const BookDemoForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    jobTitle: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    numLocations: "",
    numCourts: "",
    currentSoftware: "",
    approxMembers: "",
    venueDetails: "",
    preferredDate: "",
    preferredTime: "",
    timeZone: "AEST (Australian Eastern Standard Time)",
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
    <section className="book-demo-section" id="demo-request-form">
      <div className="container">
        <h2 className="pricing-sec-title wow fadeInUp" data-wow-duration="600ms">
          Demo Request Form
        </h2>
        <h3 className="pricing-sec-subtitle wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
          Book Your Personalised VenueGlide Demo
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
                Thank You for Booking Your Demo!
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
                Our venue specialists will review your requirements and confirm your personalised VenueGlide OS demonstration session shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Section 1: Venue Information */}
              <div className="form-group-section">
                <div className="form-section-header">
                  <i className="far fa-user me-2"></i> Venue Information
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. John Smith"
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
                      placeholder="e.g. Premier Sports Complex"
                      className="form-control-custom"
                      value={formData.businessName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Job Title *</label>
                    <input
                      type="text"
                      name="jobTitle"
                      required
                      placeholder="e.g. Venue Manager / Owner"
                      className="form-control-custom"
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. john@venuesports.com"
                      className="form-control-custom"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +61 400 000 000"
                      className="form-control-custom"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Website (Optional)</label>
                    <input
                      type="text"
                      name="website"
                      placeholder="e.g. www.venuesports.com"
                      className="form-control-custom"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Venue Details */}
              <div className="form-group-section">
                <div className="form-section-header">
                  <i className="far fa-building me-2"></i> Venue Details
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
                      <option value="Badminton Centres">Badminton Centres</option>
                      <option value="Pickleball Clubs">Pickleball Clubs</option>
                      <option value="Squash Clubs">Squash Clubs</option>
                      <option value="Multi-Sport Venues">Multi-Sport Venues</option>
                      <option value="Recreation Centres">Recreation Centres</option>
                      <option value="Sports Academies">Sports Academies</option>
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
                  <div className="col-md-6">
                    <label className="form-label">Number of Courts/Facilities *</label>
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
                  <div className="col-md-6">
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
                  <div className="col-md-12">
                    <label className="form-label">Approximate Number of Members *</label>
                    <select
                      name="approxMembers"
                      required
                      className="form-control-custom"
                      value={formData.approxMembers}
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

              {/* Section 3: Tell Us About Your Venue */}
              <div className="form-group-section">
                <div className="form-section-header">
                  <i className="far fa-message-captions me-2"></i> Tell Us About Your Venue
                </div>
                <div className="mb-3">
                  <label className="form-label">Venue Details & Operational Goals</label>
                  <textarea
                    name="venueDetails"
                    rows={4}
                    placeholder="Tell us about your venue, your current processes and what you'd like to improve."
                    className="form-control-custom"
                    value={formData.venueDetails}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {/* Section 4: Preferred Demo Time */}
              <div className="form-group-section">
                <div className="form-section-header">
                  <i className="far fa-clock me-2"></i> Preferred Demo Time
                </div>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Preferred Date *</label>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      className="form-control-custom"
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Preferred Time *</label>
                    <select
                      name="preferredTime"
                      required
                      className="form-control-custom"
                      value={formData.preferredTime}
                      onChange={handleChange}
                    >
                      <option value="">Select Preferred Time</option>
                      <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                      <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Time Zone *</label>
                    <select
                      name="timeZone"
                      required
                      className="form-control-custom"
                      value={formData.timeZone}
                      onChange={handleChange}
                    >
                      <option value="AEST (Australian Eastern Standard Time)">AEST (Sydney / Melbourne)</option>
                      <option value="ACST (Australian Central Standard Time)">ACST (Adelaide)</option>
                      <option value="AWST (Australian Western Standard Time)">AWST (Perth)</option>
                      <option value="NZST (New Zealand Standard Time)">NZST (Auckland)</option>
                      <option value="Other">Other Time Zone</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button type="submit" className="btn-submit-demo">
                  Book My Personalised Demo
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookDemoForm;
