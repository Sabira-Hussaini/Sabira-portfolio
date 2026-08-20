import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./AllProjects.css";

function AllProjects() {
  return (
    <section className="all-projects">
      <Link to="/" className="back-home">
        ← Back to Home
      </Link>

      <div className="all-projects-header">
        <h1>All Projects</h1>
        <p>
          Explore my frontend projects, experiments, and real-world web
          applications.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-info">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech?.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <Link
                to={`/project/${project.id}`}
                className="project-link"
              >
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllProjects;