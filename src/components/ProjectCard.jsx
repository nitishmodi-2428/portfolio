import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__preview">
        <div className={`project-card__gradient-bg ${project.gradient}`}>
          <div className="project-card__mockup">
            <div className="project-card__mockup-bar">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
              <span className="mockup-url">nitish.dev/{project.title.toLowerCase().replace(/\s+/g, "-")}</span>
            </div>
            <div className="project-card__mockup-content">
              <span className="mockup-tag">{project.badge}</span>
              <h4 className="mockup-title">{project.title}</h4>
              <div className="mockup-code-lines">
                <span className="code-line w-3-4"></span>
                <span className="code-line w-1-2"></span>
                <span className="code-line w-5-6"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <span className="project-category-pill">{project.category}</span>
          <h3 className="project-title">{project.title}</h3>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--sm"
            aria-label={`View source code for ${project.title}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
            aria-label={`View live demo of ${project.title}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
