import React, { useState } from "react";
import { LuCheck, LuUser, LuSend } from "react-icons/lu";
import { Icon } from "../common/Icon";
import Reveal from "../motion/Reveal";
import MaskText from "../motion/MaskText";
import { useFormspreeSubmit } from "../../hooks/useFormspreeSubmit";

const ContactFormCustom: React.FC = () => {
  const { status, submit } = useFormspreeSubmit("Contact form");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    industry: "",
    enquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(formData);
  };

  return (
    <section className="contact-section" id="contact-form-section">
      <div className="container">
        <MaskText as="h2" className="pricing-sec-title" lines={["Contact Form"]} />
        <Reveal direction="up" delay={0.1}>
          <h3 className="pricing-sec-subtitle">Tell Us About Your Venue</h3>
        </Reveal>

        <Reveal direction="up" delay={0.15} className="demo-form-wrapper">
          {status === "success" ? (
            <div className="text-center py-5">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "rgba(0, 212, 255, 0.15)",
                  border: "2px solid #00D4ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  color: "#00D4ff",
                  fontSize: "32px",
                }}
              >
                <Icon icon={LuCheck} size={32} />
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
              <div className="form-group-section">
                <div className="form-section-header">
                  <Icon icon={LuUser} className="me-2" size={18} /> Your Details
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
                  <div className="col-md-6">
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
                </div>
              </div>

              <div className="form-group-section">
                <div className="form-section-header">
                  <Icon icon={LuSend} className="me-2" size={18} /> Your Enquiry
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

              {status === "error" && (
                <p className="mt-3" style={{ color: "#ef4444", fontSize: "14px" }}>
                  Something went wrong sending your enquiry. Please try again, or email us directly at{" "}
                  <a href="mailto:hello@venueglide.com.au">hello@venueglide.com.au</a>.
                </p>
              )}

              <div className="mt-4">
                <button type="submit" className="btn-submit-demo" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default ContactFormCustom;
