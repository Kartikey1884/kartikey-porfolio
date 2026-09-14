import "./hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">
          Hi, I'm
        </p>

        <h1 className="hero__name">
          Kartikey Rai
        </h1>

        <h2 className="hero__role">
          AI/ML Developer & Backend Engineer
        </h2>

        <p className="hero__description">
          I build AI-powered applications, LLM and RAG systems,
          real-time voice applications, and scalable backend APIs.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="hero__button hero__button--primary">
            View Projects
          </a>

          <a href="#contact" className="hero__button hero__button--secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;