import projects from "../data/projects";
import "./FeaturedProjects.css";

function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="featured-projects" id="projects">
      <div className="projects-container">
        
        <div className="projects-header">
          <span className="section-label">MY WORK</span>
          <h2>
            Featured <strong>Projects</strong>
          </h2>
          <p>
            A selection of projects where I combine clean UI design,
            responsive layouts, and modern frontend technologies.
          </p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn primary"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn secondary"
                    >
                      GitHub 🐙
                    </a>
                  )}
                </div>
              </div>

              <div className="project-content">
                {project.category && (
                  <span className="project-category">{project.category}</span>
                )}

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies?.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;