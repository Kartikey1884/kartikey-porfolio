import "./Skills.css";
import skills from "../../../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">

        <p className="skills__subtitle">
          What I work with
        </p>

        <h2 className="skills__title">
          Skills
        </h2>

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