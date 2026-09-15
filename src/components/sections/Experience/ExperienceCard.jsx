function ExperienceCard({
  company,
  role,
  duration,
  description,
  technologies,
}) {
  return (
    <article className="experience-card">
      <div className="experience-card__header">
        <div>
          <h3 className="experience-card__company">
            {company}
          </h3>

          <p className="experience-card__role">
            {role}
          </p>
        </div>

        <span className="experience-card__duration">
          {duration}
        </span>
      </div>

      <p className="experience-card__description">
        {description}
      </p>

      <div className="experience-card__technologies">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="experience-card__technology"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;