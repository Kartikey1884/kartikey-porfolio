import "./hero.css";
import profile from "../../../data/profile";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting">
            Hi, I'm
          </p>

          <h1 className="hero__name">
            {profile.name}
          </h1>

          <h2 className="hero__role">
            {profile.role}
          </h2>

          <p className="hero__description">
            I build AI-powered applications and scalable
            backend systems with modern technologies.
          </p>

          <div className="hero__actions">
            <a
              href="#projects"
              className="hero__button hero__button--primary"
            >
              View Projects
            </a>

            <a
              href={profile.resume}
              className="hero__button hero__button--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

