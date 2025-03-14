import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Redes Sociales */}
        <div className="footer-section">
          <h3>Síguenos en redes</h3>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter className="icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>

        {/* Políticas y Términos */}
        <div className="footer-section">
          <h3>Información Legal</h3>
          <ul>
            <li><Link to="/cookies">Política de Privacidad y Cookies</Link></li>
            <li><Link to="/terms-conditions">Términos y Condiciones de Venta</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Brew Voyage. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
