
import React from "react";

export default function Education() {
  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academics</span>
          <h2 className="section-title">Education</h2>
          <div className="section-title-bar"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-card">
            <div className="timeline-dot">
              <span className="timeline-dot__inner"></span>
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <span className="timeline-badge">Undergraduate Degree</span>
                  <h3 className="timeline-degree">B.Tech — Computer Science &amp; Engineering</h3>
                  <h4 className="timeline-institution">
                    Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur
                  </h4>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-duration">2024 — 2028</span>
                  <div className="timeline-cgpa-pill">
                    <span className="cgpa-label">CGPA</span>
                    <span className="cgpa-value">9.19</span>
                  </div>
                </div>
              </div>

              <div className="timeline-body">
                <p className="timeline-description">
                  Currently in 3rd year, learning Data Structures and Algorithms, Artificial Intelligence and Machine Learning, Python Programming, Computer Networks, and Operating Systems.
                </p>
                <div className="timeline-tags">
                  <span className="meta-tag">Computer Science &amp; Engineering</span>
                  <span className="meta-tag">3rd Year</span>
                  <span className="meta-tag">Batch of 2028</span>
                  <span className="meta-tag">Academic Excellence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Class XII */}
          <div className="timeline-card">
            <div className="timeline-dot">
              <span className="timeline-dot__inner"></span>
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <span className="timeline-badge">Higher Secondary Education</span>
                  <h3 className="timeline-degree">Class XII — Science</h3>
                  <h4 className="timeline-institution">
                    Saraswati Vidya Mandir
                  </h4>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-duration">2021 — 2023</span>
                  <div className="timeline-cgpa-pill">
                    <span className="cgpa-label">Percentage</span>
                    <span className="cgpa-value">90%</span>
                  </div>
                </div>
              </div>

              <div className="timeline-body">
                <p className="timeline-description">
                  Completed higher secondary education with a focus on Physics,
                  Chemistry, Mathematics, and English.
                </p>
                <div className="timeline-tags">
                  <span className="meta-tag">Science Stream</span>
                  <span className="meta-tag">PCM</span>
                  <span className="meta-tag">Higher Secondary</span>
                </div>
              </div>
            </div>
          </div>

          {/* Class X */}
          <div className="timeline-card">
            <div className="timeline-dot">
              <span className="timeline-dot__inner"></span>
            </div>

            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <span className="timeline-badge">Secondary Education</span>
                  <h3 className="timeline-degree">Class X — Secondary School</h3>
                  <h4 className="timeline-institution">
                    Saraswati Vidya Mandir
                  </h4>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-duration">2019 — 2021</span>
                  <div className="timeline-cgpa-pill">
                    <span className="cgpa-label">Percentage</span>
                    <span className="cgpa-value">95.8%</span>
                  </div>
                </div>
              </div>

              <div className="timeline-body">
                <p className="timeline-description">
                  Completed secondary education with a strong foundation in
                  Mathematics, Science, and English.
                </p>
                <div className="timeline-tags">
                  <span className="meta-tag">Secondary Education</span>
                  <span className="meta-tag">Academic Foundation</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
