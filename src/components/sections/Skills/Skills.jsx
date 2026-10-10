import "./Skills.css";
import skills from "../../../data/skills";
import SectionHeading from "../../layout/sectionHeading/sectionHeading";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <SectionHeading 
          eyebrow="Skills"
          title="What I work with"
          description="I have experience in a variety of technologies and tools, ranging from AI/ML frameworks to backend development and cloud services."
        />

        <div className="skills__categories">
          {skills.map((skill) => (
            <div
              className="skills__category"
              key={skill.category}
            >
              <h3>{skill.category}</h3>

              <div className="skills__technologies">
                {skill.technologies.map((technology) => (
                  <span
                    className="skills__technology"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;