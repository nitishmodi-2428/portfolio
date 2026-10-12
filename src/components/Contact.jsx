import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate clean frontend confirmation and trigger mailto option
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Also construct mailto fallback
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:nitish.modi@example.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Reach Out</span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <div className="section-title-bar"></div>
          <p className="section-subtitle">
            Have a project idea, collaboration opportunity, or internship opening? Feel free to reach out. I'm always happy to connect!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left info column */}
          <div className="contact-info-panel">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              I am actively seeking internship opportunities, technical collaborations, and hackathon teams. Let's connect!
            </p>

            <div className="contact-methods">
              <a href="mailto:nitish.modi2028@gmail.com" className="contact-method-card">
                <div className="contact-method-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-value">nitish.modi2028@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nitish-modi-9044b9306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
              >
                <div className="contact-method-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <span className="contact-method-label">LinkedIn</span>
                  <span className="contact-method-value">linkedin.com/in/nitish-modi</span>
                </div>
              </a>

              <a
                href="https://github.com/nitishmodi-2428"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
              >
                <div className="contact-method-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div>
                  <span className="contact-method-label">GitHub</span>
                  <span className="contact-method-value">github.com/nitishmodi-2428</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right form panel */}
          <div className="contact-form-panel">
            {isSubmitted ? (
              <div className="contact-success-state">
                <div className="success-icon">?</div>
                <h3 className="success-title">Message Ready to Send!</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. Your default email client has been prepared with your message. You can also send another message below.
                </p>
                <button type="button" onClick={handleReset} className="btn btn--outline">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`form-input ${errors.name ? "form-input--error" : ""}`}
                  />
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className={`form-input ${errors.email ? "form-input--error" : ""}`}
                  />
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team opportunity, or question..."
                    className={`form-input form-textarea ${errors.message ? "form-input--error" : ""}`}
                  />
                  {errors.message && <span className="form-error-msg">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn--primary btn--full contact-submit-btn"
                >
                  {isSubmitting ? "Preparing..." : "Send Message"}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
