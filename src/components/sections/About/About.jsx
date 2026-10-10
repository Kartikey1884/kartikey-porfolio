import "./About.css";
import SectionHeading from "../../layout/sectionHeading/sectionHeading";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <SectionHeading 
          eyebrow="About"
          title="A little about me"
          description="I’m an AI/ML developer and backend engineer interested in building practical AI systems, scalable APIs, and real-time applications."
        />

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