import React from "react";

export default function About() {
  const stats = [
    { value: "9.19", label: "CGPA", subtitle: "MMMUT Gorakhpur" },
    { value: "2028", label: "Graduation", subtitle: "B.Tech CSE" },
    { value: "500+", label: "Problems", subtitle: "Coding Practice" },
    { value: "CES", label: "Editorial Assistant", subtitle: "Computer Engineering Society" },
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-title-bar"></div>
        </div>

        <div className="about-grid">
          {/* Left / Narrative text */}
          <div className="about-narrative">
            <p className="about-paragraph highlight-lead">
              I am a Computer Science and Engineering student at{" "}
              <strong>Madan Mohan Malaviya University of Technology</strong>, currently pursuing my B.Tech and graduating in 2028.
            </p>

            <p className="about-paragraph">
              I enjoy solving programming problems, building web applications, experimenting with machine learning, and continuously improving my technical skills.
            </p>

            <p className="about-paragraph">
              I believe in learning by building and prefer turning ideas into practical projects.
            </p>

            <div className="about-highlights-list">
              <div className="highlight-item">
                <div>
                  <strong>Focused Problem Solver</strong>
                  <p>Strong algorithmic fundamentals with consistent daily problem solving.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div>
                  <strong>Practical Engineering</strong>
                  <p>Hands-on development focused on frontend development, UI/UX design, and responsive web interfaces.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right / Key Stats Cards */}
          <div className="about-stats-container">
            <div className="about-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-card__glow"></div>
                  <span className="stat-card__value">{stat.value}</span>
                  <span className="stat-card__label">{stat.label}</span>
                  <span className="stat-card__subtitle">{stat.subtitle}</span>
                </div>
              ))}
            </div>

            <div className="about-location-card">
              <div className="location-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="location-info">
                <span className="location-tag">Location</span>
                <span className="location-text">India &bull; Open to remote internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
