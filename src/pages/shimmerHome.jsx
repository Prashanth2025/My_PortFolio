import React from "react";
import "./shimmer.css";

export default function ShimmerHome() {
  return (
    <header className="hero d-flex align-items-center justify-content-center text-white">
      <div className="hero-content text-center px-3 shimmer-wrapper">
        <div className="shimmer"></div>
        <div className="placeholder-glow">
          <h1 className="hero-title placeholder col-7 mb-3 rounded"></h1>
          <h2 className="hero-subtitle placeholder col-6 mb-3 rounded"></h2>
          <p className="hero-description placeholder col-10 mb-2 rounded"></p>
          <p className="hero-description placeholder col-9 mb-2 rounded"></p>
          <p className="hero-description placeholder col-8 mb-4 rounded"></p>
          <div className="d-flex justify-content-center">
            <span className="btn btn-primary btn-lg placeholder col-5 rounded-pill"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
