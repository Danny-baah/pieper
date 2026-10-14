import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Leaf, 
  Users, 
  ShieldCheck, 
  BarChart3 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pieper-footer" aria-label="Website-Fußzeile">
      {/* ====================================================================
          1. TOP & MIDDLE BANNER: BRAND / FACILITY SUNSET & CONTACT COLUMNS
          ==================================================================== */}
      <div className="footer-top-container">
        {/* Top-Right Facility Sunset Photo with Dark Angle Overlay */}
        <div className="footer-facility-banner-wrap" aria-hidden="true">
          <img 
            src="./images/footer_facility_sunset.jpg" 
            alt="Pieper Logistikzentrum und Fuhrpark bei Sonnenuntergang"
            className="footer-facility-sunset-photo"
            loading="lazy"
            width="764"
            height="235"
          />
          <div className="footer-facility-gradient-overlay" />
        </div>

        {/* Content Layout across Brand & Contact */}
        <div className="footer-main-content-grid">
          {/* Left Column: Brand Logo, Mission Copy & Cursive Script */}
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

            {/* Cursive Signature Script: "Mehr bewegen. Gemeinsam." */}
            <div className="footer-script-wrap" aria-hidden="true">
              <img 
                src="./images/footer_script_mehr_bewegen.png" 
                alt="Mehr bewegen. Gemeinsam."
                className="footer-script-img"
                loading="lazy"
                width="205"
                height="75"
              />
            </div>
          </div>

          {/* Right Columns: 4 Contact Columns + European Logistics Map */}
          <div className="footer-contact-row-wrapper">
            {/* Column 1: Adresse */}
            <div className="footer-contact-col">
              <div className="footer-contact-col-header">
                <div className="footer-col-icon-circle" aria-hidden="true">
                  <MapPin size={18} strokeWidth={2} className="footer-col-icon" />
                </div>
                <h3 className="footer-col-title">Adresse</h3>
              </div>
              <div className="footer-col-body">
                <p className="footer-col-company">PIEPER Internationale</p>
                <p className="footer-col-company-sub">Transporte GmbH &amp; Co. KG</p>
                <p className="footer-col-street">Mühlentannen 11–13</p>
                <p className="footer-col-city">49762 Lathen</p>
                <p className="footer-col-country">Deutschland</p>
              </div>
            </div>

            {/* Column 2: Telefon */}
            <div className="footer-contact-col">
              <div className="footer-contact-col-header">
                <div className="footer-col-icon-circle" aria-hidden="true">
                  <Phone size={18} strokeWidth={2} className="footer-col-icon" />
                </div>
                <h3 className="footer-col-title">Telefon</h3>
              </div>
              <div className="footer-col-body">
                <a 
                  href="tel:+49593393900" 
                  className="footer-col-link"
                  aria-label="Telefonnummer anrufen: +49 (0) 5933 - 93900"
                >
                  +49 (0) 5933 - 93900
                </a>
                <p className="footer-col-subtext">
                  Wir sind telefonisch für Sie erreichbar.
                </p>
              </div>
            </div>

            {/* Column 3: E-Mail */}
            <div className="footer-contact-col">
              <div className="footer-contact-col-header">
                <div className="footer-col-icon-circle" aria-hidden="true">
                  <Mail size={18} strokeWidth={2} className="footer-col-icon" />
                </div>
                <h3 className="footer-col-title">E-Mail</h3>
              </div>
              <div className="footer-col-body">
                <a 
                  href="mailto:info@pieper-spedition.com" 
                  className="footer-col-link"
                  aria-label="E-Mail schreiben an info@pieper-spedition.com"
                >
                  info@pieper-spedition.com
                </a>
                <p className="footer-col-subtext">
                  Schreiben Sie uns jederzeit – wir freuen uns auf Ihre Nachricht.
                </p>
              </div>
            </div>

            {/* Column 4: Öffnungszeiten */}
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
                  <span className="footer-hours-val">Öffnungszeiten auf Anfrage</span>
                </div>
                <div className="footer-hours-group">
                  <span className="footer-hours-label">Samstag – Sonntag</span>
                  <span className="footer-hours-val">Öffnungszeiten auf Anfrage</span>
                </div>
              </div>
            </div>

            {/* Column 5: European Logistics Route Network Graphic */}
            <div className="footer-europe-map-col" aria-hidden="true">
              <img 
                src="./images/footer_europe_map.jpg" 
                alt="Pieper Europäisches Logistiknetzwerk"
                className="footer-europe-map-img"
                loading="lazy"
                width="194"
                height="180"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          2. FEATURE BADGES BAR (FOUR ALIGNED COLUMNS WITH THIN DIVIDERS)
          ==================================================================== */}
      <div className="footer-features-bar">
        <div className="footer-features-container">
          {/* Feature 1: Zuverlässige Logistiklösungen */}
          <div className="footer-feature-item">
            <div className="footer-feature-icon-wrap" aria-hidden="true">
              <Leaf size={28} strokeWidth={1.8} className="footer-feature-icon" />
            </div>
            <span className="footer-feature-text">Zuverlässige<br />Logistiklösungen</span>
          </div>

          <span className="footer-feature-divider" aria-hidden="true" />

          {/* Feature 2: Starke Partnerschaften */}
          <div className="footer-feature-item">
            <div className="footer-feature-icon-wrap" aria-hidden="true">
              <Users size={28} strokeWidth={1.8} className="footer-feature-icon" />
            </div>
            <span className="footer-feature-text">Starke Partnerschaften</span>
          </div>

          <span className="footer-feature-divider" aria-hidden="true" />

          {/* Feature 3: Sicher. Pünktlich. Effizient. */}
          <div className="footer-feature-item">
            <div className="footer-feature-icon-wrap" aria-hidden="true">
              <ShieldCheck size={28} strokeWidth={1.8} className="footer-feature-icon" />
            </div>
            <span className="footer-feature-text">Sicher. Pünktlich. Effizient.</span>
          </div>

          <span className="footer-feature-divider" aria-hidden="true" />

          {/* Feature 4: Heute für morgen. */}
          <div className="footer-feature-item">
            <div className="footer-feature-icon-wrap" aria-hidden="true">
              <BarChart3 size={28} strokeWidth={1.8} className="footer-feature-icon" />
            </div>
            <span className="footer-feature-text">Heute für morgen.</span>
          </div>
        </div>
      </div>

      {/* ====================================================================
          3. BOTTOM COPYRIGHT & LEGAL BAR
          ==================================================================== */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="footer-copyright-text">
            &copy; 2025 PIEPER Internationale Transporte GmbH &amp; Co. KG. Alle Rechte vorbehalten.
          </p>

          <span className="footer-bottom-divider" aria-hidden="true" />

          <p className="footer-credit-text">
            Webdesign by <strong className="footer-credit-brand">EmanCopys</strong>
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
