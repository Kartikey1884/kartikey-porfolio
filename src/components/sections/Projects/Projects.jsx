import { useState } from "react";
import "./Projects.css";
import projects from "../../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "AI/ML",
    "Backend",
    "Full Stack",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section id="projects" className="projects">
      <div className="projects__container">

        <p className="projects__subtitle">
          What I've built
        </p>

        <h2 className="projects__title">
          Projects
        </h2>

        <div className="projects__filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "projects__filter projects__filter--active"
                  : "projects__filter"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;