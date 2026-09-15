function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}) {
  return (
    <article className="project-card">

      <div className="project-card__content">

        <h3 className="project-card__title">
          {title}
        </h3>

        <p className="project-card__description">
          {description}
        </p>

        <div className="project-card__technologies">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="project-card__technology"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>

      </div>

    </article>
  );
}

export default ProjectCard;