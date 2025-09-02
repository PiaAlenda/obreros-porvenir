import "../../styles/components/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/assets/icons/LOGO ESCUELA.png" alt="Obreros del Provenir" />
            </div>
            <p className="footer-description">
              Más de 60 años formando profesionales comprometidos con la excelencia académica y el desarrollo social.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <div className="footer-contact">
              <p>📞 Ingresantes: (011) 4524-4000</p>
              <p>📞 Alumnos: (011) 4524-4001</p>
              <p>📧 info@PorVenir.edu.ar</p>
              <p>📍 Avenida Alem, San Juan</p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Enlaces Rápidos</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Institucional</a>
              </li>
              <li>
                <a href="#">Carreras</a>
              </li>
              <li>
                <a href="#">Campus Virtual</a>
              </li>
              <li>
                <a href="#">Biblioteca</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Síguenos</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Obreros del Provenir. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
