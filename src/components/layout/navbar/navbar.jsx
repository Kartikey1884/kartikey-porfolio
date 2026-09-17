import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={closeMenu}
        >
          Kartikey Rai
        </a>

        <button
          type="button"
          className="navbar__menu-button"
          onClick={toggleMenu}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={
            isMenuOpen
              ? "navbar__nav navbar__nav--open"
              : "navbar__nav"
          }
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;