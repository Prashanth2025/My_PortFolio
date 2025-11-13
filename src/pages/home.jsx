import React from "react";
import "./home.css";

function Home() {
  return (
    <header className="hero d-flex align-items-center justify-content-center text-white">
      <div className="hero-content text-center px-3">
        {/* Name */}
        <h1 className="hero-title animate-fade">
          Hello, I'm <span className="name-highlight">Prashanth</span>
        </h1>

        {/* Role */}
        <h2 className="hero-subtitle animate-fade delay-1">
          Front-End Developer | React Enthusiast | UI UX Designer
        </h2>

        {/* Intro / Skills */}
        <p className="hero-description animate-fade delay-2">
          I craft <span className="highlight">responsive</span>,{" "}
          <span className="highlight">accessible</span>, and{" "}
          <span className="highlight">visually engaging</span> web interfaces
          using modern technologies like{" "}
          <span className="highlight">React.js</span>, and{" "}
          <span className="highlight">Figma</span>. Passionate about clean code,
          intuitive UX, and real-world problem solving.
        </p>

        {/* Call to Action */}
        <a
          href="/projects"
          className="btn btn-primary btn-lg animate-fade delay-3"
        >
          Explore My Projects
        </a>
      </div>
    </header>
  );
}

export default Home;
