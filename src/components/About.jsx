import "./About.css";

const HIGHLIGHTS = [
  { label: "Role", value: "Frontend Dev" },
  { label: "Focus", value: "React & UI/UX" },
  { label: "Code Quality", value: "Clean & Responsive" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-image">
            <img
              src="/images/profile.jpeg"
              alt="Sabira Hussaini - Frontend Developer"
              loading="lazy"
            />
          </div>
          <div className="image-backdrop" aria-hidden="true" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I'm <span>Sabira Hussaini</span>, a Front-End Developer and UI/UX
            designer passionate about building modern, interactive, and high-performance
            web applications.
          </p>

          <p>
            I focus on writing scalable code with JavaScript, React, and Next.js,
            transforming Figma designs into seamless digital products with attention to detail and responsiveness.
          </p>

          <div className="about-highlights">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="highlight-card">
                <span className="highlight-value">{item.value}</span>
                <span className="highlight-label">{item.label}</span>
              </div>
            ))}
          </div>

          <a
            href="/Sabira-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn about-cv-btn"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}