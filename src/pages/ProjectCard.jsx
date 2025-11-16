import React from "react";
import { BsGithub } from "react-icons/bs";

function ProjectCard({ title, description, tech, link, demo }) {
  return (
    <div className="card project-card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-3">{title}</h5>
        <p className="card-text text-muted flex-grow-1">{description}</p>

        <div className="mb-3">
          {tech.map((t, i) => (
            <span key={i} className="badge tech-badge me-2 mb-2">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto d-flex flex-wrap gap-2">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark demo-btn"
          >
            <i className="bi bi-box-arrow-up-right me-1"></i>Live Demo
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-dark code-btn"
          >
            <BsGithub className="me-1" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;