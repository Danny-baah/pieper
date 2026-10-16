import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pieper-footer" aria-label="Website-Fußzeile">
      {/* ====================================================================
          1. MAIN FOOTER CONTENT
          ==================================================================== */}
      <div className="footer-top-container">
        {/* Top-Right Office Desk & Dispatch Banner with Dark Angle Overlay */}
        <div className="footer-facility-banner-wrap">
          <span className="ki-badge footer-ki-badge">KI-generiert</span>
          <img 
            src="./images/footer_desk_notepad.jpg" 
            alt="Pieper Disposition und Schreibtisch mit Notizblock"
            className="footer-facility-sunset-photo"
            loading="lazy"
            width="764"
            height="235"
          />
          <div className="footer-facility-gradient-overlay" />
        </div>

        {/* Content Layout across Brand & Reduced Contact Columns */}
        <div className="footer-main-content-grid">
          {/* Left Column: Brand Logo & Mission Copy */}
          <div className="footer-brand-column">
            <div className="footer-brand-header">
              <a href="#" className="footer-brand-link" aria-label="Pieper Internationale Transporte Startseite">
                <img 
                  src="./images/pieper_logo_white.png" 
                  alt="Pieper Internationale Transporte"
                  className="footer-brand-logo"
                  width="220"
                  height="56"
                />
              </a>
              <span className="footer-brand-lime-line" aria-hidden="true" />
              <p className="footer-brand-description">
                Ihr Partner für Transport, Lagerlogistik und individuelle Lösungen 
                in Deutschland und Europa.
              </p>
            </div>
          </div>

          {/* Right Area: Streamlined Contact & Opening Hours (Reduced Columns, Minimized Text) */}
          <div className="footer-contact-row-wrapper">
            {/* Column 1: Kontakt & Standort */}
            <div className="footer-contact-col">
              <div className="footer-contact-col-header">
                <div className="footer-col-icon-circle" aria-hidden="true">
                  <MapPin size={18} strokeWidth={2} className="footer-col-icon" />
                </div>
                <h3 className="footer-col-title">Kontakt &amp; Standort</h3>
              </div>
              <div className="footer-col-body">
                <p className="footer-col-company">PIEPER Internationale Transporte</p>
                <p className="footer-col-street">Mühlentannen 11–13 · 49762 Lathen</p>
                
                <div className="footer-direct-links">
                  <a 
                    href="tel:+49593393900" 
                    className="footer-col-link footer-contact-inline"
                    aria-label="Telefonnummer anrufen: +49 (0) 5933 - 93900"
                  >
                    <Phone size={14} className="footer-inline-icon" aria-hidden="true" />
                    <span>+49 (0) 5933 - 93900</span>
                  </a>

                  <a 
                    href="mailto:info@pieper-spedition.com" 
                    className="footer-col-link footer-contact-inline"
                    aria-label="E-Mail schreiben an info@pieper-spedition.com"
                  >
                    <Mail size={14} className="footer-inline-icon" aria-hidden="true" />
                    <span>info@pieper-spedition.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Öffnungszeiten */}
            <div className="footer-contact-col">
              <div className="footer-contact-col-header">
                <div className="footer-col-icon-circle" aria-hidden="true">
                  <Clock size={18} strokeWidth={2} className="footer-col-icon" />
                </div>
                <h3 className="footer-col-title">Öffnungszeiten</h3>
              </div>
              <div className="footer-col-body">
                <div className="footer-hours-group">
                  <span className="footer-hours-label">Montag – Freitag</span>
                  <span className="footer-hours-val">08:00 – 16:00 Uhr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          2. BOTTOM COPYRIGHT & LEGAL BAR
          ==================================================================== */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="footer-copyright-text">
            &copy; 2025 PIEPER Internationale Transporte GmbH &amp; Co. KG. Alle Rechte vorbehalten.
          </p>

          <span className="footer-bottom-divider" aria-hidden="true" />

          <p className="footer-credit-text">
            Webdesign by{' '}
            <a
              href="https://emancopys.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-brand"
            >
              EmanCopys
            </a>
          </p>

          <span className="footer-bottom-divider" aria-hidden="true" />

          <div className="footer-legal-links">
            <a href="#impressum" className="footer-legal-link">Impressum</a>
            <span className="footer-legal-separator" aria-hidden="true">|</span>
            <a href="#datenschutz" className="footer-legal-link">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
