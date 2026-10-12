import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web", "React", "Machine Learning"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PROJECTS</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-title-bar"></div>
          <p className="section-subtitle">
            A curated collection of full stack, interactive web, and machine learning applications.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="project-filters" role="tablist" aria-label="Project categories">
          {categories.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                className={`filter-btn ${isActive ? "filter-btn--active" : ""}`}
                onClick={() => setFilter(category)}
              >
                {category}
                <span className="filter-count">
                  {category === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === category).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Callout */}
        <div className="projects-footer-cta">
          <p className="projects-cta-text">
            Explore my projects, code repositories, and practical learning experiences.
          </p>
          <a
            href="https://github.com/nitishmodi-2428"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Explore All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
