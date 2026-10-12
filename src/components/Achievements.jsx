
import React from "react";

export default function Achievements() {
  const achievements = [
    {
      title: "Class Representative — Class 10 & 12",
      category: "School Leadership",
      description:
        "Served as Class Representative in Classes 10 and 12, helping coordinate communication between teachers and students and supporting academic activities.",
      icon: "🎓"
    },
    {
      title: "CES Executive Board Member",
      category: "Technical Society",
      description:
        "Served as an Executive Board Member of the Computer Engineering Society (CES) during my second year, contributing to technical events and student activities.",
      icon: "👥"
    },
    {
      title: "Editorial Assistant — CES",
      category: "Editorial & Content",
      description:
        "Currently serving as an Editorial Assistant in the Computer Engineering Society, contributing to content development, editing, and society publications.",
      icon: "📝"
    },
    {
      title: "Hackathons & Ideathons",
      category: "Competitions",
      description:
        "Active participant in college and national-level hackathons and technical ideathons, collaborating on ideas and developing innovative prototypes.",
      icon: "💡"
    },
    {
      title: "Competitive Programming",
      category: "Problem Solving",
      description:
        "Solved 500+ problems across platforms, practicing data structures, graphs, dynamic programming, and algorithmic optimization.",
      icon: "💻"
    },
    {
      title: "CodeChef — 1 Star",
      category: "Competitive Programming",
      description:
        "Achieved a 1-star rating on CodeChef while practicing programming problems and strengthening algorithmic problem-solving skills.",
      icon: "⭐"
    }
  ];

  return (
    <section id="achievements" className="section-padding achievements-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ACHIEVEMENTS</span>
          <h2 className="section-title">Achievements &amp; Honors</h2>
          <div className="section-title-bar"></div>
          <p className="section-subtitle">
            Leadership experience, academic responsibilities, and technical accomplishments.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-card__icon-box">
                <span className="achievement-emoji">{item.icon}</span>
              </div>
              <div className="achievement-card__content">
                <span className="achievement-card__category">{item.category}</span>
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
