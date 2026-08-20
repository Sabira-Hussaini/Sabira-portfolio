import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <main className="all-projects">

      <section className="projects-header">

        <span>MY WORK</span>

        <h1>All Projects</h1>

        <p>
          Explore my frontend development and web design projects.
        </p>

      </section>

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </main>
  );
}

export default Projects;