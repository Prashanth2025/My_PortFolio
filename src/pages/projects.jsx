import React, { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import "./projects.css";

const projects = [
  {
    title: "Farming Web Service",
    description:
      "Empowers farmers with AI-driven crop recommendations, weather forecasts, and market insights. Built with Flask, Tailwind CSS, and React.",
    tech: ["Flask", "Tailwind CSS", "Python", "React.js"],
    link: "https://github.com/Prashanth2025/project24",
    demo: "https://farmer-ai-x2hw.onrender.com/",
  },
  {
    title: "Fake URL Detector (Bullseye)",
    description:
      "Detects phishing and malware links using VirusTotal API. Includes live screenshots and a modern dual-pane UI.",
    tech: ["React", "Python", "MongoDB", "VirusTotal API"],
    link: "https://github.com/KRITHIKus/safelink",
    demo: "https://bullseye-n9jz.onrender.com/",
  },
  {
    title: "Item Packer",
    description:
      "Helps travelers plan and pack efficiently with a clean, responsive interface. Built with React and Bootstrap.",
    tech: ["React", "Bootstrap", "CSS"],
    link: "https://github.com/Prashanth2025/Item_Packer",
    demo: "https://item-packer.onrender.com/",
  },
];

const techOptions = ["All", "React", "Python", "MongoDB", "Flask", "Bootstrap"];

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.tech.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
        );

  return (
    <section className="projects-section py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          🚀 My <span className="text-primary">Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5 btn-fliter">
          {techOptions.map((tech) => (
            <button
              key={tech}
              className={`btn btn-sm btn-filter ${
                filter === tech ? "active" : ""
              }`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="row justify-content-center">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                className="col-lg-4 col-md-6 mb-4 project-card-wrapper"
                key={index}
              >
                <ProjectCard {...project} />
              </div>
            ))
          ) : (
            <p className="text-center text-muted fs-5 mt-4">
              No projects found for <strong>{filter}</strong>.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
