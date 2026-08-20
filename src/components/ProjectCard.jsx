import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-overlay">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="overlay-btn primary"
              aria-label={`Live demo for ${project.title}`}
            >
              Live Demo ↗
            </a>
          )}
          <Link
            to={`/project/${project.id}`}
            className="overlay-btn secondary"
          >
            Case Study
          </Link>
        </div>
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.technologies?.map((tech) => (
            <span key={tech} className="project-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn live-link"
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn github-link"
            >
              GitHub
            </a>
          )}

          <Link
            to={`/project/${project.id}`}
            className="link-btn details-link"
          >
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
}