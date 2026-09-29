import "./Footer.css";
import profile from "../../../data/profile";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <h2 className="footer__name">
            {profile.name}
          </h2>

          <p className="footer__description">
            {profile.role}
          </p>
        </div>

        <div className="footer__links">
          <a
            href="#home"
            className="footer__link"
          >
            Home
          </a>

          <a
            href="#about"
            className="footer__link"
          >
            About
          </a>

          <a
            href="#projects"
            className="footer__link"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="footer__link"
          >
            Contact
          </a>
        </div>
        <div className="footer__socials">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
        <div className="footer__bottom">
          <p>
            © {currentYear} Kartikey Rai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;