import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <header className="hero d-flex align-items-center justify-content-center text-white">
      <div className="hero-content text-center px-3">
        <h1 className="hero-title animate-fade">Hi, I'm Prashanth</h1>
        <h2 className="hero-subtitle animate-fade delay-1">
          Front-End Developer | React Specialist | UI/UX Designer
        </h2>
        <p className="hero-description animate-fade delay-2">
          I specialize in building responsive, accessible, and visually polished
          web interfaces. With hands-on experience in React.js, Bootstrap, and
          Figma, I focus on clean code, intuitive user experiences, and solving
          real-world problems through design and development.
        </p>

        <div className="hero-buttons">
          {/* Explore Projects Button */}
          <Link
            to="/projects"
            className="btn-primary btn-lg animate-fade delay-3"
          >
            Explore My Projects
          </Link>

          {/* Download Resume Button */}
          <a
            href="/Prashanth_Resume.pdf"
            download
            className="btn-outline btn-lg animate-fade delay-4"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Home;
