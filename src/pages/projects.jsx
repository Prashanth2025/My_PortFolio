import React, { useState, useEffect } from "react";
import { BsGithub, BsPlayCircleFill } from "react-icons/bs";
import "./projects.css";
import ShimmerCard from "./shimmercard.jsx";
import "./shimmer.css";

const projects = [
  {
    title: "Farming Web Service",
    description:
      "Empowers farmers with AI-driven crop recommendations, weather forecasts, and market insights. Built with Flask, Tailwind CSS, and React.",
    tech: ["Flask", "Tailwind CSS", "Python", "React.js"],
    link: "#",
    demo: "#",
  },
  {
    title: "Fake URL Detector (Bullseye)",
    description:
      "Detects phishing and malware links using VirusTotal API. Includes live screenshots and a modern dual-pane UI.",
    tech: ["React", "Python", "MongoDB", "VirusTotal API"],
    link: "#",
    demo: "#",
  },
  {
    title: "Item Packer",
    description:
      "Helps travelers plan and pack efficiently with a clean, responsive interface. Built with React and Bootstrap.",
    tech: ["React", "Bootstrap", "CSS"],
    link: "#",
    demo: "#",
  },
];

export default function Projects() {
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
                      <a href={project.demo} className="demo-btn">
                        <BsPlayCircleFill /> Live Demo
                      </a>
                      <a href={project.link} className="code-btn">
                        <BsGithub /> Code
                      </a>
                    </div>
                  </div>
                ))}
          </div>
        </section>
      </main>
    </div>
  );
}
