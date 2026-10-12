
import React from "react";

export default function Leadership() {
  const activities = [
    "Code Crusade",
    "Capture The Flag",
    "Wield the Web",
    "Flip Flop",
    "Cludicode",
    "Codigo",
    "Bidwarz"
  ];

  return (
    <section id="leadership" className="section-padding leadership-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">LEADERSHIP</span>
          <h2 className="section-title">Leadership &amp; Activities</h2>
          <div className="section-title-bar"></div>
        </div>

        <div className="leadership-card">
          <div className="leadership-header">
            <div className="leadership-badge-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <span className="leadership-role-pill">
                Editorial Assistant
              </span>
              <h3 className="leadership-organization">
                Computer Engineering Society (CES)
              </h3>
              <p className="leadership-affiliation">
                Madan Mohan Malaviya University of Technology
              </p>
            </div>
          </div>

          <div className="leadership-body">
            <p className="leadership-summary">
              Previously served as an Executive Board Member of the Computer
              Engineering Society during my second year. Currently serving as
              an Editorial Assistant, contributing to content development,
              editorial activities, and documentation for society initiatives
              and events.
            </p>

            <div className="activities-wrapper">
              <h4 className="activities-heading">
                Flagship Events &amp; Initiatives
              </h4>
              <div className="activities-tags-list">
                {activities.map((activity) => (
                  <span key={activity} className="activity-tag">
                    <span className="activity-tag__indicator">•</span>
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
