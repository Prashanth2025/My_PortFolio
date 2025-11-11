import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer text-white text-center py-4 mt-5">
      <div className="container m-auto">
        <p className="mb-2 fw-semibold small">
          <i className="bi bi-c-circle me-1"></i> 2025 Prashanth. All rights
          reserved.
        </p>

        <div className="footer-icons">
          <a
            href="https://github.com/Prashanth2025"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>

          <a href="mailto:prashanthramesh.02@gmail.com" aria-label="Email">
            <i className="bi bi-envelope-fill"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/prashanth2005r/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
