import "./Experience.css";
import experiences from "../../../data/experience";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">

        <p className="experience__subtitle">
          My professional journey
        </p>

        <h2 className="experience__title">
          Experience
        </h2>

        <div className="experience__list">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              {...experience}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;