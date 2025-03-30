import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram, FaRss } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Columna 1: Navegación */}
        <div className="footer-column">
          <h3 className="footer-title">Navegación</h3>
          <nav className="footer-nav">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/gallery" className="footer-link">Galería</Link>
            <Link to="/contact" className="footer-link">Contacto</Link>
            <Link to="/comments" className="footer-link">Opiniones</Link>
            <Link to="/rss" className="footer-link">Noticias</Link>
          </nav>
        </div>

        {/* Columna 2: Redes Sociales */}
        <div className="footer-column">
          <h3 className="footer-title">Conéctate</h3>
          <div className="social-grid">
            <a href="https://twitter.com" className="social-link">
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a href="https://facebook.com" className="social-link">
              <FaFacebookF />
              <span>Facebook</span>
            </a>
            <a href="https://instagram.com" className="social-link">
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a href="/feed.xml" className="social-link">
              <FaRss />
              <span>RSS</span>
            </a>
          </div>
        </div>

        {/* Columna 3: Legal */}
        <div className="footer-column">
          <h3 className="footer-title">Legal</h3>
          <div className="legal-links">
            <Link to="/privacy" className="footer-link">Privacidad</Link>
            <Link to="/terms" className="footer-link">Términos</Link>
            <Link to="/cookies" className="footer-link">Cookies</Link>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2025 Brew Voyage. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;