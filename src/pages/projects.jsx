import React, { useState } from "react";
import "../styles/projects.css";

const techFilters = ["All", "React", "Python", "MongoDB", "Flask", "Bootstrap"];

const projects = [
  {
    title: "Farming Web Service",
    description:
      "Empowers farmers with AI-driven crop recommendations, weather forecasts, and market insights. Built with Flask, Tailwind CSS, and React.",
    tech: ["Flask", "Tailwind CSS", "Python", "React.js"],
  },
  {
    title: "Fake URL Detector (Bullseye)",
    description:
      "Detects phishing and malware links using VirusTotal API. Includes live screenshots and a modern dual-pane UI.",
    tech: ["React", "Python", "MongoDB", "VirusTotal API"],
  },
  {
    title: "Item Packer",
    description:
      "Helps travelers plan and pack efficiently with a clean, responsive interface. Built with React and Bootstrap.",
    tech: ["React", "Bootstrap", "CSS"],
  },
];

export default function Projects() {
  const [activeTech, setActiveTech] = useState("All");

  const filteredProjects =
    activeTech === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(activeTech));

  return (
    <section className="projects">
      <h2 className="section-title">🪄 My Projects</h2>

      <div className="tech-filter">
        {techFilters.map((tech) => (
          <button
            key={tech}
            className={`filter-btn ${activeTech === tech ? "active" : ""}`}
            onClick={() => setActiveTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="project-list">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="buttons">
              <button className="demo-btn">
                <i className="bi bi-box-arrow-up-right me-1"></i> Live Demo
              </button>
              <button className="code-btn">
                <i className="bi bi-code-slash me-1"></i> Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
