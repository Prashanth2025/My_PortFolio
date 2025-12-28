import React, { useEffect, useState } from "react";
import "./about.css";

function About() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills([
      { label: "React.js", icon: "bi bi-lightning" },
      { label: "JavaScript (ES6+)", icon: "bi bi-code-slash" },
      { label: "Tailwind CSS", icon: "bi bi-palette" },
      { label: "Bootstrap", icon: "bi bi-bootstrap" },
      { label: "Vite", icon: "bi bi-speedometer2" },
      { label: "Redux", icon: "bi bi-diagram-3" },
      { label: "Node.js", icon: "bi bi-cpu" },
      { label: "Express.js", icon: "bi bi-diagram-2" },
      { label: "MongoDB", icon: "bi bi-database" },
      { label: "REST API", icon: "bi bi-diagram-3-fill" }, // ✅ Added REST API
      { label: "Git & GitHub", icon: "bi bi-git" },
      { label: "Figma", icon: "bi bi-vector-pen" },
    ]);
  }, []);

  return (
    <section
      className="about-section py-5 bg-light"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <h2
          id="about-heading"
          className="text-center fw-bold mb-5 text-primary"
        >
          <i className="bi bi-person-lines-fill me-2"></i>About Me
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <p className="fs-5 text-center mb-4">
              I'm a full‑stack developer passionate about crafting clean,
              responsive, and user‑friendly interfaces using{" "}
              <strong>React</strong>, <strong>Bootstrap</strong>, and{" "}
              <strong>Tailwind CSS</strong>.
            </p>
            <p className="fs-5 text-center mb-4">
              I enjoy integrating real‑world APIs and experimenting with{" "}
              <strong>Redux</strong> to manage complex state, while building
              scalable backends with <strong>Node.js</strong>,{" "}
              <strong>Express.js</strong>, <strong>MongoDB</strong>, and{" "}
              <strong>REST API design</strong>.
            </p>
            <p className="fs-5 text-center mb-4">
              My projects reflect a strong commitment to usability, performance,
              and visual polish — from intuitive layouts to interactive
              components, supported by <strong>Git & GitHub</strong> for version
              control and <strong>Figma</strong> for design collaboration.
            </p>
            <p className="fs-5 text-center mb-4">
              Currently, I'm building <strong>e‑commerce UIs</strong>,{" "}
              <strong>GitHub‑integrated apps</strong>, and{" "}
              <strong>Redux‑powered stores</strong> while preparing for{" "}
              <strong>MERN stack interviews</strong>.
            </p>
          </div>
        </div>

        <div className="skills-section mt-5">
          <h4 className="text-center mb-4 text-primary">
            <i className="bi bi-tools me-2"></i>Skills & Tools
          </h4>
          <div className="row justify-content-center g-3">
            {skills.map((skill, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 text-center">
                <div className="skill-card border rounded p-3 bg-white shadow-sm">
                  <i className={`${skill.icon} fs-4 text-primary mb-2`}></i>
                  <div className="fw-semibold">{skill.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
