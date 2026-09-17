import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <h2 className="footer__name">
            Kartikey Rai
          </h2>

          <p className="footer__description">
            AI/ML Developer & Backend Engineer
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