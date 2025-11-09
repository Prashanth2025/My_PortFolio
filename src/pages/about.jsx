import React from "react";
import "./About.css"; // custom styles

function About() {
  return (
    <section className="about-section py-5 bg-light" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="text-center fw-bold mb-5 gradient-heading">
          👨‍💻 About Me
        </h2>

        <div className="mx-auto px-3 about-content">
          <p className="fs-5 text-center fade-in">
            I'm a passionate <span className="highlight">front-end developer</span> focused on
            building clean, responsive, and user-friendly interfaces using{" "}
            <span className="highlight">React</span> and{" "}
            <span className="highlight">Bootstrap</span>.
          </p>

          <p className="fs-5 text-center fade-in delay-1">
            I love integrating real-world APIs to create dynamic experiences and
            enjoy experimenting with <span className="highlight">Redux</span> to
            manage complex state with clarity and control.
          </p>

          <p className="fs-5 text-center fade-in delay-2">
            My projects reflect a strong commitment to usability, performance,
            and visual polish — from intuitive layouts to interactive components.
          </p>

          <p className="fs-5 text-center fade-in delay-3">
            I'm currently building{" "}
            <span className="highlight">e-commerce UIs</span>,{" "}
            <span className="highlight">GitHub-integrated apps</span>, and{" "}
            <span className="highlight">Redux-powered stores</span> while
            preparing for{" "}
            <span className="highlight">MERN stack interviews</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
