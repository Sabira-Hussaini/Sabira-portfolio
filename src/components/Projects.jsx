import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const CATEGORIES = ["All", "React", "Next.js", "UI/UX"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // فیلتر کردن پروژه‌ها بر اساس دسته‌بندی انتخابی
  const filteredProjects = useMemo(() => {
    const featuredList = projects.filter((project) => project.featured);

    if (activeCategory === "All") return featuredList;

    return featuredList.filter((project) =>
      project.category?.toLowerCase().includes(activeCategory.toLowerCase()) ||
      project.technologies?.some((tech) =>
        tech.toLowerCase().includes(activeCategory.toLowerCase())
      )
    );
  }, [activeCategory]);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="header-text">
            <p className="section-label">MY WORK</p>
            <h2 className="section-heading">
              Featured <span>Projects.</span>
            </h2>
          </div>

          <p className="section-description">
            A selection of projects that demonstrate my frontend architecture,
            interactive UI design, and problem-solving skills.
          </p>
        </div>

        {/* دکمه‌های فیلتر دسته‌بندی */}
        <div className="category-filters">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* گرید پروژه‌ها */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <p>No featured projects found in this category.</p>
          </div>
        )}

        <div className="projects-more">
          <Link to="/projects" className="btn view-all-btn">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}