import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "/header/logo.png"
import "./header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  return (
    <header className="header">
      <nav className="nav-menu">
        <div className="desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/gallery" className="nav-link">Galería de Marcas</Link>
          <Link to="/contact" className="nav-link">Contacte con nosotros</Link>
          <Link to="/comments" className="nav-link">Opiniones</Link>
          <Link to="/rss" className="nav-link">Noticias</Link>
        </div>
        <button className="menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>
      </nav>

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <a
        href="https://github.com/ElMasue"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
          className="github-icon"
        />
      </a>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/gallery" className="mobile-nav-link" onClick={toggleMobileMenu}>Galería de Marcas</Link>
        <Link to="/contact" className="mobile-nav-link" onClick={toggleMobileMenu}>Contacte con nosotros</Link>
        <Link to="/comments" className="mobile-nav-link" onClick={toggleMobileMenu}>Opiniones</Link>
        <Link to="/rss" className="mobile-nav-link" onClick={toggleMobileMenu}>Noticias</Link>

      </div>
    </header>
  );
}

export default Header;