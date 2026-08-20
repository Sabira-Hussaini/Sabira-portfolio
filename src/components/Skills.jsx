import "./Skills.css";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", desc: "Component Architecture, Hooks, Custom Hooks", icon: "⚛" },
      { name: "Next.js", desc: "App Router, SSR/SSG, Dynamic Routing", icon: "▲" },
      { name: "JavaScript (ES6+)", desc: "Async/Await, DOM, Event Loop, Closures", icon: "⚡" },
      { name: "HTML5 & CSS3", desc: "Flexbox, Grid, Semantic Layouts, Animations", icon: "💻" },
    ],
  },
  {
    title: "Tools & Design Systems",
    skills: [
      { name: "TypeScript", desc: "Type Safety, Interfaces, Generics", icon: "TS" },
      { name: "Tailwind CSS", desc: "Utility-first, Custom Themes, Responsive UI", icon: "🎨" },
      { name: "Figma to Code", desc: "UI/UX Translation, Prototyping, Component Specs", icon: "📐" },
      { name: "Git & GitHub", desc: "Version Control, Branching, Pull Requests", icon: "🐙" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <p className="skills-subtitle">MY TECH STACK</p>

        <h2 className="skills-title">
          Skills & <span>Technologies</span>
        </h2>

        <p className="skills-intro">
          The core tools, frameworks, and practical standards I use to build modern,
          scalable frontend applications.
        </p>

        <div className="skills-categories-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="skills-category-card">
              <h3 className="category-title">{category.title}</h3>

              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <h4>{skill.name}</h4>
                    </div>
                    <p>{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}