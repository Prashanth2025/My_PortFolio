import { useState } from "react";

const RESUME_PDF = "Prashanth_R.pdf";

/* ── Resume data mirrored from actual CV ── */
const RESUME = {
  name: "Prashanth R",
  title: "MERN Stack & Backend Developer",
  email: "prashanthramesh.02@gmail.com",
  phone: "+91 9108289912",
  location: "Bengaluru, India",

  summary:
    "Full-Stack Developer and Apprentice Trainee with hands-on experience in MERN stack web development, PL/SQL database programming, .NET application development, and AI/ML integration. Currently undergoing apprenticeship training at Hindustan Aeronautics Limited (HAL), Engine Division. Skilled in RESTful API design, JWT authentication, cloud deployment, and data visualisation.",

  experience: [
    {
      role: "Apprentice Trainee",
      org: "Hindustan Aeronautics Limited (HAL)",
      dept: "Engine Division · Bengaluru",
      period: "Current",
      type: "teal",
      points: [
        "Contributing to HAL official website using the .NET framework.",
        "Writing and optimising PL/SQL queries and stored procedures.",
        "Performing structured data entry and data management tasks.",
        "Gaining enterprise software development and version control experience.",
      ],
    },
    {
      role: "AI & Python Intern",
      org: "Hope Foundation",
      dept: "Bengaluru",
      period: "Jan 2025 – Feb 2025",
      type: "gold",
      cert: "Certified by Hope Foundation",
      points: [
        "Built an AI-powered Farming Web Service with ML crop recommendations.",
        "Integrated OpenWeatherMap API for real-time weather forecasts.",
        "Designed market price trend dashboards using Flask, React.js & Chart.js.",
      ],
    },
  ],

  projects: [
    {
      title: "ThoughtPal",
      sub: "Full-Stack Notes App",
      stack: "React · Node · Express · MongoDB · JWT",
      url: "https://thoughtpal-1.onrender.com/",
    },
    {
      title: "FarmerAI",
      sub: "AI Farming Web Service",
      stack: "Flask · React · scikit-learn · Chart.js",
      url: "https://farmer-ai-x2hw.onrender.com",
    },
  ],

  skills: [
    {
      cat: "Frontend",
      list: "React.js, JavaScript ES6+, HTML5, CSS3, Bootstrap",
    },
    {
      cat: "Backend",
      list: "Node.js, Express.js, REST APIs, JWT, .NET Framework",
    },
    { cat: "Database", list: "MongoDB, Mongoose, SQL, PL/SQL" },
    { cat: "Tools/Deploy", list: "Git, GitHub, Postman, Render, Vercel" },
    { cat: "AI / ML", list: "Python, scikit-learn, Flask, OpenWeatherMap API" },
    { cat: "UI / UX", list: "Figma, Canva, Chart.js" },
  ],

  education: {
    degree: "Bachelor of Computer Applications",
    institution: "East Point College of Higher Education",
    period: "2022 – 2025",
  },
};

/* ─── Tab: Inline viewer ─── */
function PdfViewer() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {/* Loading skeleton */}
      {!loaded && !error && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background: "var(--panel)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            borderRadius: "var(--r-lg)",
            minHeight: 640,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              border: "3px solid var(--rule)",
              borderTop: "3px solid var(--gold)",
              borderRadius: "50%",
              animation: "spin-ring 0.9s linear infinite",
            }}
          />
          <p
            style={{
              fontFamily: "var(--ff-mono)",
              fontSize: 12,
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            Loading PDF…
          </p>
        </div>
      )}

      {error ? (
        /* ── Fallback: file not placed yet ── */
        <div
          style={{
            background: "var(--panel)",
            border: "2px dashed var(--rule)",
            borderRadius: "var(--r-lg)",
            minHeight: 440,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            padding: 40,
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "rgba(200,169,110,0.08)",
              border: "1px solid var(--rule)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="bi bi-file-earmark-pdf"
              style={{ fontSize: 32, color: "var(--gold)" }}
            />
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--ff-display)",
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Resume PDF not found
            </p>
            <p
              style={{
                fontFamily: "var(--ff-sans)",
                fontSize: 14,
                color: "var(--text-muted)",
                marginBottom: 0,
                maxWidth: 360,
              }}
            >
              Place your{" "}
              <code
                style={{
                  background: "var(--panel-2)",
                  padding: "2px 7px",
                  borderRadius: 4,
                  color: "var(--gold)",
                  fontSize: 13,
                }}
              >
                resume.pdf
              </code>{" "}
              file inside the{" "}
              <code
                style={{
                  background: "var(--panel-2)",
                  padding: "2px 7px",
                  borderRadius: 4,
                  color: "var(--gold)",
                  fontSize: 13,
                }}
              >
                public/
              </code>{" "}
              folder, then reload the page.
            </p>
          </div>
          <a
            href={RESUME_PDF}
            download="Prashanth_R_Resume.pdf"
            className="btn-outline-gold"
            style={{ marginTop: 8 }}
          >
            <i className="bi bi-download me-2" />
            Try Download Anyway
          </a>
        </div>
      ) : (
        <iframe
          src={`${RESUME_PDF}#toolbar=0&navpanes=0&scrollbar=1`}
          title="Prashanth R — Resume"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(true);
            setError(true);
          }}
          style={{
            width: "100%",
            minHeight: 760,
            border: "none",
            borderRadius: "var(--r-lg)",
            display: "block",
            background: "#fff",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s",
          }}
        />
      )}
    </div>
  );
}

/* ─── Tab: HTML resume preview ─── */
function HtmlResume() {
  const s = {
    section: { marginBottom: 32 },
    h: {
      fontFamily: "var(--ff-display)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--gold)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      borderBottom: "1px solid var(--rule)",
      paddingBottom: 8,
      marginBottom: 18,
    },
    mono: { fontFamily: "var(--ff-mono)", fontSize: 11.5 },
    muted: { color: "var(--text-muted)" },
    bullet: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--gold)",
      flexShrink: 0,
      marginTop: 8,
    },
  };

  return (
    <div
      style={{
        background: "var(--panel)",
        border: "1px solid var(--rule)",
        borderRadius: "var(--r-lg)",
        padding: "48px 52px",
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
        <div>
          <h1
            style={{
              fontFamily: "var(--ff-display)",
              fontSize: 38,
              fontWeight: 900,
              letterSpacing: "-0.5px",
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            {RESUME.name}
          </h1>
          <p
            style={{
              fontFamily: "var(--ff-mono)",
              fontSize: 13,
              color: "var(--gold)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 0,
            }}
          >
            {RESUME.title}
          </p>
        </div>
        <div
          className="text-end d-flex flex-column gap-1"
          style={{ ...s.mono, ...s.muted }}
        >
          <span>
            <i
              className="bi bi-envelope me-1"
              style={{ color: "var(--gold)" }}
            />
            {RESUME.email}
          </span>
          <span>
            <i
              className="bi bi-telephone me-1"
              style={{ color: "var(--gold)" }}
            />
            {RESUME.phone}
          </span>
          <span>
            <i
              className="bi bi-geo-alt me-1"
              style={{ color: "var(--gold)" }}
            />
            {RESUME.location}
          </span>
        </div>
      </div>

      <hr style={{ borderColor: "var(--rule)", marginBottom: 28 }} />

      {/* Summary */}
      <div style={s.section}>
        <div style={s.h}>Profile Summary</div>
        <p
          style={{
            fontFamily: "var(--ff-sans)",
            fontWeight: 300,
            fontSize: 15,
            color: "var(--text-muted)",
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {RESUME.summary}
        </p>
      </div>

      {/* Experience */}
      <div style={s.section}>
        <div style={s.h}>Experience</div>
        {RESUME.experience.map((ex) => (
          <div key={ex.role} style={{ marginBottom: 24 }}>
            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-1">
              <div>
                <span
                  style={{
                    fontFamily: "var(--ff-display)",
                    fontWeight: 700,
                    fontSize: 17,
                  }}
                >
                  {ex.role}
                </span>
                <span
                  style={{
                    fontFamily: "var(--ff-sans)",
                    fontSize: 14,
                    color: "var(--text-muted)",
                    marginLeft: 10,
                  }}
                >
                  — {ex.org}
                </span>
              </div>
              <span
                style={{
                  ...s.mono,
                  fontSize: 11,
                  padding: "3px 10px",
                  borderRadius: 100,
                  ...(ex.type === "teal"
                    ? {
                        background: "rgba(78,205,196,0.1)",
                        color: "var(--teal)",
                        border: "1px solid rgba(78,205,196,0.25)",
                      }
                    : {
                        background: "rgba(200,169,110,0.1)",
                        color: "var(--gold)",
                        border: "1px solid rgba(200,169,110,0.25)",
                      }),
                }}
              >
                {ex.period}
              </span>
            </div>
            <p
              style={{ ...s.mono, ...s.muted, fontSize: 12, marginBottom: 10 }}
            >
              {ex.dept}
            </p>
            <ul className="list-unstyled mb-0">
              {ex.points.map((pt, i) => (
                <li key={i} className="d-flex align-items-start gap-2 mb-1">
                  <div style={s.bullet} />
                  <span
                    style={{
                      fontFamily: "var(--ff-sans)",
                      fontSize: 14,
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
            {ex.cert && (
              <p
                style={{
                  ...s.mono,
                  fontSize: 11.5,
                  color: "var(--gold)",
                  marginTop: 8,
                  marginBottom: 0,
                }}
              >
                🏆 {ex.cert}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Projects */}
      <div style={s.section}>
        <div style={s.h}>Projects</div>
        {RESUME.projects.map((p) => (
          <div
            key={p.title}
            className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3"
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--ff-display)",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                {p.title}
              </span>
              <span
                style={{
                  fontFamily: "var(--ff-sans)",
                  fontSize: 13,
                  color: "var(--text-muted)",
                  marginLeft: 8,
                }}
              >
                — {p.sub}
              </span>
              <div
                style={{ ...s.mono, ...s.muted, fontSize: 11.5, marginTop: 3 }}
              >
                {p.stack}
              </div>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              style={{
                ...s.mono,
                fontSize: 11.5,
                color: "var(--gold)",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              Live <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div style={s.section}>
        <div style={s.h}>Technical Skills</div>
        <div className="row g-2">
          {RESUME.skills.map((sk) => (
            <div key={sk.cat} className="col-12 col-sm-6">
              <span
                style={{
                  ...s.mono,
                  fontSize: 11,
                  color: "var(--gold)",
                  marginRight: 6,
                }}
              >
                {sk.cat}:
              </span>
              <span
                style={{
                  fontFamily: "var(--ff-sans)",
                  fontSize: 13.5,
                  color: "var(--text-muted)",
                }}
              >
                {sk.list}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div style={{ ...s.section, marginBottom: 0 }}>
        <div style={s.h}>Education</div>
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
          <div>
            <p
              style={{
                fontFamily: "var(--ff-display)",
                fontWeight: 700,
                fontSize: 17,
                marginBottom: 2,
              }}
            >
              {RESUME.education.degree}
            </p>
            <p
              style={{
                fontFamily: "var(--ff-sans)",
                fontSize: 14,
                color: "var(--text-muted)",
                marginBottom: 0,
              }}
            >
              {RESUME.education.institution}
            </p>
          </div>
          <span style={{ ...s.mono, fontSize: 12, color: "var(--text-muted)" }}>
            {RESUME.education.period}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function Resume() {
  const [tab, setTab] = useState("preview"); // 'preview' | 'pdf'

  const tabBtn = (id, label, icon) => (
    <button
      onClick={() => setTab(id)}
      style={{
        fontFamily: "var(--ff-mono)",
        fontSize: 12.5,
        letterSpacing: "0.08em",
        padding: "10px 22px",
        borderRadius: "var(--r)",
        border: tab === id ? "1px solid var(--gold)" : "1px solid var(--rule)",
        background: tab === id ? "rgba(200,169,110,0.12)" : "transparent",
        color: tab === id ? "var(--gold)" : "var(--text-muted)",
        cursor: "pointer",
        transition: "all 0.25s",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
      onMouseEnter={(e) => {
        if (tab !== id) e.currentTarget.style.borderColor = "var(--gold-dim)";
      }}
      onMouseLeave={(e) => {
        if (tab !== id) e.currentTarget.style.borderColor = "var(--rule)";
      }}
    >
      <i className={`bi ${icon}`} />
      {label}
    </button>
  );

  return (
    <section className="section-shell" id="resume">
      <div className="container">
        {/* Header row */}
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-4 mb-5 reveal">
          <div>
            <div className="section-eyebrow">06 / Resume</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              My
              <br />
              <em>Résumé</em>
            </h2>
          </div>

          {/* Action buttons */}
          <div className="d-flex flex-wrap align-items-center gap-3">
            <a
              href={RESUME_PDF}
              download="Prashanth_R_Resume.pdf"
              className="btn-gold d-flex align-items-center gap-2"
              style={{ fontSize: 13.5 }}
            >
              <i className="bi bi-download" />
              Download PDF
            </a>
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold d-flex align-items-center gap-2"
              style={{ fontSize: 13.5 }}
            >
              <i className="bi bi-box-arrow-up-right" />
              Open in New Tab
            </a>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="d-flex gap-2 mb-4 reveal">
          {tabBtn("preview", "Interactive Preview", "bi-file-person")}
          {tabBtn("pdf", "PDF Viewer", "bi-file-earmark-pdf")}
        </div>

        {/* Tab content */}
        <div className="reveal">
          {tab === "preview" && <HtmlResume />}
          {tab === "pdf" && <PdfViewer />}
        </div>

        {/* Bottom download CTA */}
        <div className="text-center mt-5 reveal">
          <p
            style={{
              fontFamily: "var(--ff-sans)",
              fontWeight: 300,
              color: "var(--text-muted)",
              marginBottom: 20,
            }}
          >
            Want a copy for your records?
          </p>
          <a
            href={RESUME_PDF}
            download="Prashanth_R_Resume.pdf"
            className="btn-gold d-inline-flex align-items-center gap-2"
            style={{ fontSize: 14, padding: "13px 36px" }}
          >
            <i className="bi bi-download" />
            Download Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
