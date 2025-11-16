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
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    link={project.link}
                    demo={project.demo}
                  />
                ))}
          </div>
        </section>
      </main>
    </div>
  );
}