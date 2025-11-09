import React from "react";
import "./Home.css";

function Home() {
  return (
    <header className="hero d-flex align-items-center justify-content-center text-white">
      <div className="hero-content text-center px-3">
        <h1 className="fw-bold mb-3 animate-fade">
          Hi, I'm <span className="text-gradient">Prashanth</span>
        </h1>

        <p className="lead mb-4 animate-fade delay-1">
          A passionate <span className="skill-tag">React Developer</span> who
          loves crafting{" "}
          <span className="skill-tag">responsive interfaces</span>, designing{" "}
          <span className="skill-tag">clean UIs</span>, and integrating{" "}
          <span className="skill-tag">real-world APIs</span>. <br />I enjoy
          working with <span className="skill-tag">Bootstrap</span>, fine-tuning{" "}
          <span className="skill-tag">CSS effects</span>, and optimizing user
          experience through thoughtful{" "}
          <span className="skill-tag">UI/UX design</span>.
        </p>

        <a
          href="/projects"
          className="btn btn-primary btn-lg animate-fade delay-2"
        >
          <i className="bi bi-lightning-charge-fill me-2"></i> View My Work
        </a>
      </div>
    </header>
  );
}

export default Home;
