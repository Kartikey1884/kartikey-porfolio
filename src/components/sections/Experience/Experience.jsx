import "./Experience.css";
import experiences from "../../../data/experience";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "../../layout/sectionHeading/sectionHeading";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <SectionHeading 
          eyebrow="Experience"
          title="Where I have worked"
          description="I have a diverse background in software development, with experience in various roles and technologies."
        />

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