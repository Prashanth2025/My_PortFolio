import React from "react";
import "./shimmer.css";

export default function ShimmerCard() {
  return (
    <div className="project-card shimmer-wrapper mb-4">
      <div className="shimmer"></div>
      <div className="placeholder-glow">
        <h3 className="placeholder col-6 mb-2"></h3>
        <p className="placeholder col-8 mb-2"></p>
        <div className="d-flex gap-2 mb-2">
          <span className="placeholder col-3"></span>
          <span className="placeholder col-2"></span>
        </div>
        <div className="d-flex gap-2">
          <span className="placeholder btn col-4"></span>
          <span className="placeholder btn col-4"></span>
        </div>
      </div>
    </div>
  );
}
