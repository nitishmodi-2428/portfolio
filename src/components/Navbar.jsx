import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll spy for active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? "navbar-header--scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, "#home")}>
          <div className="navbar-brand__logo">NM</div>
          <div className="navbar-brand__info">
            <span className="navbar-brand__name">Nitish Modi</span>
            <span className="navbar-brand__badge">CS Student</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop">
          <ul className="navbar-links">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                    {isActive && <span className="nav-link__indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="btn btn--primary btn--sm nav-cta"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`hamburger ${isMobileMenuOpen ? "hamburger--active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${isMobileMenuOpen ? "mobile-nav--open" : ""}`}>
          <div className="mobile-nav__overlay" onClick={() => setIsMobileMenuOpen(false)} />
          <nav className="mobile-nav__content">
            <div className="mobile-nav__header">
              <span className="mobile-nav__title">Navigation</span>
              <button
                className="mobile-nav__close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ?
              </button>
            </div>
            <ul className="mobile-nav__links">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mobile-nav__footer">
              <a
                href="#contact"
                className="btn btn--primary btn--full"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Contact Me
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
