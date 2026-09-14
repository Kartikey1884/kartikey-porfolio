import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <p className="about__subtitle">
          Get to know me
        </p>

        <h2 className="about__title">
          About Me
        </h2>

        <p className="about__description">
          I'm an AI/ML Developer and Backend Engineer focused on
          building AI-powered applications, LLM and RAG systems,
          real-time voice solutions, and scalable backend services.
        </p>

        <div className="about__highlights">
          <div className="about__highlight">
            <h3>AI / ML</h3>
            <p>
              Building intelligent applications using LLMs,
              RAG pipelines, embeddings, and AI APIs.
            </p>
          </div>

          <div className="about__highlight">
            <h3>Backend</h3>
            <p>
              Developing scalable APIs and real-time systems
              using FastAPI, Node.js, WebSockets, and databases.
            </p>
          </div>

          <div className="about__highlight">
            <h3>Full Stack</h3>
            <p>
              Connecting modern frontend applications with
              robust backend services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;