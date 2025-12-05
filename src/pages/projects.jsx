import React, { useState, useEffect } from "react";
import "./projects.css";
import ShimmerCard from "./shimmercard.jsx";
import "./shimmer.css";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
  {
    title: "Farming Web Service",
    description:
      "Empowers farmers with AI-driven crop recommendations, weather forecasts, and market insights. Built with Flask, Tailwind CSS, and React.",
    tech: ["Flask", "Tailwind CSS", "Python", "React.js"],
    demo: "https://farmer-ai-x2hw.onrender.com/",
    code: "https://github.com/Prashanth2025/project24",
  },
  {
    title: "Fake URL Detector (Bullseye)",
    description:
      "Detects phishing and malware links using VirusTotal API. Includes live screenshots and a modern dual-pane UI.",
    tech: ["React", "Python", "MongoDB", "VirusTotal API"],
    demo: "https://bullseye-n9jz.onrender.com/",
    code: "https://github.com/KRITHIKus/safelink",
  },
  {
    title: "Item Packer",
    description:
      "Helps travelers plan and pack efficiently with a clean, responsive interface. Built with React and Bootstrap.",
    tech: ["React", "Bootstrap", "CSS"],
    demo: "https://item-packer.onrender.com/",
    code: "https://github.com/Prashanth2025/Item_Packer",
  },
];

function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <section className="projects">
          <h2 className="section-title">🪄 My Projects</h2>

          <div className="project-list">
            {loading
              ? Array(3)
                  .fill()
                  .map((_, i) => <ShimmerCard key={i} />)
              : projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    demo={project.demo}
                    code={project.code}
                  />
                ))}
          </div>
        </section>
      </main>
    </div>
  );
}
export default Projects;
