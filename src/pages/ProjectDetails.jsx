import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Project Not Found</h1>

        <p>
          Sorry, the project you are looking for does not exist.
        </p>

        <Link to="/projects">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="project-details">

      {/* Header */}

      <section className="project-details-header">

        <Link
          to="/projects"
          className="back-projects"
        >
          ← All Projects
        </Link>

        <span className="details-category">
          {project.category}
        </span>

        <h1>{project.title}</h1>

        <p>
          {project.description}
        </p>

      </section>


      {/* Main Image */}

      <section className="project-main-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </section>


      {/* Project Information */}

      <section className="project-information">

        <div className="project-about">

          <span>ABOUT THE PROJECT</span>

          <h2>
            Building a better digital experience
          </h2>

          <p>
            This project was created to practice and demonstrate
            modern frontend development techniques. The focus was
            on creating a clean interface, responsive layouts,
            reusable components, and a smooth user experience.
          </p>

          <p>
            I worked on the structure, UI implementation,
            responsiveness, and interactive functionality of
            the application.
          </p>

        </div>


        <aside className="project-sidebar">

          <div className="sidebar-item">

            <h3>Technologies</h3>

            <div className="details-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

          </div>


          <div className="sidebar-item">

            <h3>Project Links</h3>

            <div className="details-links">

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </aside>

      </section>


      {/* Features */}

      <section className="project-features">

        <span>KEY FEATURES</span>

        <h2>What I built</h2>

        <div className="features-grid">

          <div className="feature">
            <span>01</span>
            <h3>Responsive Design</h3>
            <p>
              Designed the interface to work smoothly
              across desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="feature">
            <span>02</span>
            <h3>Reusable Components</h3>
            <p>
              Structured the application using reusable
              components to keep the code maintainable.
            </p>
          </div>

          <div className="feature">
            <span>03</span>
            <h3>User Experience</h3>
            <p>
              Focused on clear navigation, visual hierarchy,
              and intuitive interactions.
            </p>
          </div>

          <div className="feature">
            <span>04</span>
            <h3>Modern Development</h3>
            <p>
              Used modern frontend development practices
              and tools throughout the project.
            </p>
          </div>

        </div>

      </section>


      {/* Navigation */}

      <section className="project-navigation">

        <Link to="/projects">
          ← View All Projects
        </Link>

        <Link to="/">
          Back to Home →
        </Link>

      </section>

    </main>
  );
}

export default ProjectDetails;