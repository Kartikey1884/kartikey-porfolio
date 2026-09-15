import "./Projects.css";
import projects from "../../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">

        <p className="projects__subtitle">
          What I've built
        </p>

        <h2 className="projects__title">
          Projects
        </h2>

        <div className="projects__grid">
          {projects.map((project) => (
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