import React, { useState } from "react";
import profileImg from "../assets/images/image.png";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-blob hero-glow-blob--1" />
      <div className="hero-glow-blob hero-glow-blob--2" />

      <div className="container hero-container">
        {/* Left Column: Text & CTA */}
        <div className="hero-content">
          <div className="hero-label-badge">
            <span className="pulse-indicator"></span>
            <span>Hello, I am</span>
          </div>

          <h1 className="hero-title">
            Nitish Modi
            <span className="hero-title__subtitle">Computer Science Engineer</span>
          </h1>

          <p className="hero-description">
            Building thoughtful digital experiences through code, problem solving, and continuous learning.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn--primary btn--lg"
              onClick={handleScrollToProjects}
            >
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            {/* <a
              href="#contact"
              className="btn btn--outline btn--lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Download Resume
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a> */}
          </div>

          <div className="hero-socials">
            <span className="hero-socials__label">Connect:</span>
            <div className="hero-socials__links">
              <a
                href="https://github.com/nitishmodi-2428"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nitish-modi-9044b9306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:nitish.modi2028@gmail.com"
                className="social-icon-btn"
                aria-label="Email Nitish Modi"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual with Glow & Floating Badges */}
        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow" />
            <div className="hero-avatar-ring">
              {!imageError ? (
                <img
                  src={profileImg}
                  alt="Nitish Modi - Computer Science Engineer"
                  className="hero-avatar-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="hero-avatar-fallback">
                  <div className="avatar-monogram">NM</div>
                  <span className="avatar-subtitle">CS @ MMMUT</span>
                </div>
              )}
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge floating-badge--1">
              <span className="floating-badge__icon">•</span>
              <span className="floating-badge__text">React.js</span>
            </div>

            <div className="floating-badge floating-badge--2">
              <span className="floating-badge__icon">•</span>
              <span className="floating-badge__text">Java</span>
            </div>

            <div className="floating-badge floating-badge--3">
              <span className="floating-badge__icon">•</span>
              <span className="floating-badge__text">Python</span>
            </div>

            <div className="floating-badge floating-badge--4">
              <span className="floating-badge__icon">•</span>
              <span className="floating-badge__text">Machine Learning</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
