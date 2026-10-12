import React from "react";

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" onClick={scrollToTop} className="footer-logo">
              <span className="footer-logo-badge">NM</span>
              <span className="footer-brand-name">Nitish Modi</span>
            </a>
            <p className="footer-tagline">
              Computer Science and Engineering undergraduate at MMMUT, graduating in 2028.
            </p>
          </div>

          <div className="footer-social-links">
            <a
              href="https://github.com/nitishmodi-2428"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
              aria-label="GitHub profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nitish-modi-9044b9306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
              aria-label="LinkedIn profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:nitish.modi2028@gmail.com"
              className="footer-social-item"
              aria-label="Email Nitish Modi"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            Designed &amp; Built by <strong>Nitish Modi</strong>
          </p>
          <p className="footer-copyright">
            &copy; {currentYear} Nitish Modi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
