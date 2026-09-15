import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        Kartikey Rai
      </div>

      <div className="navbar__links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;