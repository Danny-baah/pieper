import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight
} from 'lucide-react';

export default function KontaktSection() {
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=M%C3%BChlentannen+11-13,+49762+Lathen,+Germany";

  return (
    <section 
      id="kontakt" 
      className="pieper-kontakt-section"
      aria-labelledby="kontakt-main-heading"
    >
      <div className="kontakt-main-container">
        {/* ==================================================================
            1. UPPER SPLIT: INTRO & BRAND VALUES (LEFT) + COMPANY BUILDING (RIGHT)
            ================================================================== */}
        <div className="kontakt-hero-split">
          {/* Left Column: Heading, Supporting Copy, Brand Values & Script */}
          <div className="kontakt-left-column">
            {/* Eyebrow */}
            <div className="kontakt-eyebrow-wrapper">
              <span className="kontakt-eyebrow-line" aria-hidden="true" />
              <span className="kontakt-eyebrow-text">KONTAKT</span>
            </div>

            {/* Main Heading */}
            <h2 id="kontakt-main-heading" className="kontakt-heading">
              <span className="kontakt-heading-dark">Wir sind</span>
              <br />
              <span className="kontakt-heading-dark">für </span>
              <span className="kontakt-heading-lime">Sie da.</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="kontakt-intro-paragraph">
              Ob Transport, Lagerlogistik oder individuelle Lösungen – wir freuen 
              uns auf Ihre Anfrage. Unser Team steht Ihnen gerne persönlich zur 
              Verfügung.
            </p>

            {/* Bottom Row of Left Col: Brand Values List & Script Statement */}
            <div className="kontakt-values-script-row">
              {/* Values List with Vertical Lime Line */}
              <div className="kontakt-values-block">
                <span className="kontakt-values-vertical-bar" aria-hidden="true" />
                <ul className="kontakt-values-list" aria-label="Unsere Werte">
                  <li>PERSÖNLICH</li>
                  <li>KOMPETENT</li>
                  <li>ZUVERLÄSSIG</li>
                  <li>LEICHT ERREICHBAR</li>
                </ul>
              </div>

              {/* Elegant Script Statement */}
              <div className="kontakt-script-block">
                <span className="kontakt-script-lime-dash" aria-hidden="true" />
                <div className="kontakt-script-visual-wrap">
                  <img 
                    src="./images/kontakt_script.png" 
                    alt="Ihr Partner in der Logistik."
                    className="kontakt-script-img"
                    loading="lazy"
                    width="150"
                    height="60"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Pieper Company Building Photo */}
          <div className="kontakt-right-column">
            <div className="kontakt-building-frame">
              <img 
                src="./images/kontakt_building.png" 
                alt="PIEPER Internationale Transporte Firmenzentrale und Logistikzentrum"
                className="kontakt-building-photo"
                loading="lazy"
                width="634"
                height="345"
              />
              <div className="kontakt-building-overlay" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* ==================================================================
            2. HORIZONTAL ROW OF FIVE CONTACT INFORMATION PANELS
            ================================================================== */}
        <div className="kontakt-panels-grid" role="region" aria-label="Kontaktdaten und Standort">
          {/* Panel 1: Adresse */}
          <div className="kontakt-panel kontakt-panel-address">
            <div className="kontakt-panel-top">
              <div className="kontakt-panel-icon-circle" aria-hidden="true">
                <MapPin size={19} strokeWidth={2} className="kontakt-panel-icon" />
              </div>
              <h3 className="kontakt-panel-title">Adresse</h3>
            </div>

            <div className="kontakt-panel-content">
              <p className="kontakt-address-company">
                PIEPER Internationale Transporte GmbH &amp; Co. KG
              </p>
              <p className="kontakt-address-street">Mühlentannen 11–13</p>
              <p className="kontakt-address-city">49762 Lathen</p>
              <p className="kontakt-address-country">Deutschland</p>
            </div>

            {/* Subtle Faint Watermark Icon */}
            <div className="kontakt-panel-watermark" aria-hidden="true">
              <MapPin size={72} strokeWidth={1} />
            </div>
          </div>

          {/* Panel 2: Telefon */}
          <div className="kontakt-panel kontakt-panel-phone">
            <div className="kontakt-panel-top">
              <div className="kontakt-panel-icon-circle" aria-hidden="true">
                <Phone size={19} strokeWidth={2} className="kontakt-panel-icon" />
              </div>
              <h3 className="kontakt-panel-title">Telefon</h3>
            </div>

            <div className="kontakt-panel-content">
              <a 
                href="tel:+49593393900" 
                className="kontakt-direct-link kontakt-phone-link"
                aria-label="Telefonnummer anrufen: +49 (0) 5933 - 93900"
              >
                +49 (0) 5933 - 93900
              </a>
              <p className="kontakt-panel-subtext">
                Wir sind telefonisch für Sie erreichbar.
              </p>
            </div>

            {/* Subtle Faint Watermark Icon */}
            <div className="kontakt-panel-watermark" aria-hidden="true">
              <Phone size={72} strokeWidth={1} />
            </div>
          </div>

          {/* Panel 3: E-Mail */}
          <div className="kontakt-panel kontakt-panel-email">
            <div className="kontakt-panel-top">
              <div className="kontakt-panel-icon-circle" aria-hidden="true">
                <Mail size={19} strokeWidth={2} className="kontakt-panel-icon" />
              </div>
              <h3 className="kontakt-panel-title">E-Mail</h3>
            </div>

            <div className="kontakt-panel-content">
              <a 
                href="mailto:info@pieper-spedition.com" 
                className="kontakt-direct-link kontakt-email-link"
                aria-label="E-Mail schreiben an info@pieper-spedition.com"
              >
                info@pieper-spedition.com
              </a>
              <p className="kontakt-panel-subtext">
                Schreiben Sie uns jederzeit – wir freuen uns auf Ihre Nachricht.
              </p>
            </div>

            {/* Subtle Faint Watermark Icon */}
            <div className="kontakt-panel-watermark" aria-hidden="true">
              <Mail size={72} strokeWidth={1} />
            </div>
          </div>

          {/* Panel 4: Standort (Map Visual & Route Planen Link) */}
          <div className="kontakt-panel kontakt-panel-map">
            {/* Background Map Graphic */}
            <div className="kontakt-map-bg-box" aria-hidden="true">
              <img 
                src="./images/kontakt_map.jpg" 
                alt=""
                className="kontakt-map-img"
                loading="lazy"
              />
              <div className="kontakt-map-overlay" />
            </div>

            {/* Pin Badge Overlay */}
            <div className="kontakt-map-badge">
              <div className="kontakt-map-badge-pin" aria-hidden="true">
                <MapPin size={20} className="kontakt-map-pin-icon" />
              </div>
              <div className="kontakt-map-badge-text">
                <strong>PIEPER</strong>
                <span>Internationale Transporte GmbH &amp; Co. KG</span>
              </div>
            </div>

            {/* Route planen Action Button */}
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="kontakt-route-btn btn-slide-right"
              aria-label="Route zu PIEPER Internationale Transporte auf Google Maps planen"
            >
              <div className="kontakt-route-circle-arrow" aria-hidden="true">
                <ArrowRight size={13} strokeWidth={2.2} />
              </div>
              <span>Route planen</span>
            </a>
          </div>

          {/* Panel 5: Öffnungszeiten */}
          <div className="kontakt-panel kontakt-panel-hours">
            <div className="kontakt-panel-top">
              <div className="kontakt-panel-icon-circle" aria-hidden="true">
                <Clock size={19} strokeWidth={2} className="kontakt-panel-icon" />
              </div>
              <h3 className="kontakt-panel-title">Unsere Öffnungszeiten</h3>
            </div>

            <div className="kontakt-panel-content">
              <div className="kontakt-hours-group">
                <span className="kontakt-hours-days">Montag – Freitag</span>
                <span className="kontakt-hours-time">Öffnungszeiten auf Anfrage</span>
              </div>
              <div className="kontakt-hours-group">
                <span className="kontakt-hours-days">Samstag – Sonntag</span>
                <span className="kontakt-hours-time">Öffnungszeiten auf Anfrage</span>
              </div>
            </div>

            {/* Subtle Faint Watermark Icon */}
            <div className="kontakt-panel-watermark" aria-hidden="true">
              <Clock size={72} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
