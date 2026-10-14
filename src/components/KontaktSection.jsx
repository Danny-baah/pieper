import React from 'react';
import { 
  MapPin, 
  PhoneCall, 
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

          {/* Right Column: Pieper Office Desk, Notepad & Pen */}
          <div className="kontakt-right-column">
            <div className="kontakt-building-frame">
              <img 
                src="./images/footer_desk_notepad.jpg" 
                alt="PIEPER Internationale Transporte Schreibtisch mit Notizblock und Stift"
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
            2. CONTACT CALL-TO-ACTION WITH PHONE & LOCATION MAP
            ================================================================== */}
        <div className="kontakt-cta-map-grid" role="region" aria-label="Direktkontakt und Standort">
          {/* Call to Action Card with Direct Phone Number */}
          <div className="kontakt-cta-panel">
            <div className="kontakt-cta-badge">
              <span className="kontakt-cta-badge-dot" aria-hidden="true" />
              <span>DIREKTER KONTAKT</span>
            </div>

            <h3 className="kontakt-cta-title">
              Schnell &amp; unkompliziert anfragen.
            </h3>

            <p className="kontakt-cta-description">
              Haben Sie Fragen zu unseren Transportmöglichkeiten, freien Lagerkapazitäten oder individuellen Logistikkonzepten? Rufen Sie uns direkt an – unser Dispositionsteam ist gerne persönlich für Sie da.
            </p>

            <div className="kontakt-cta-actions">
              <a 
                href="tel:+49593393900" 
                className="kontakt-cta-phone-card btn-slide-left"
                aria-label="Telefonnummer direkt anrufen: +49 (0) 5933 - 93900"
              >
                <div className="kontakt-cta-phone-icon-circle" aria-hidden="true">
                  <PhoneCall size={22} strokeWidth={2.2} />
                </div>
                <div className="kontakt-cta-phone-text">
                  <span className="kontakt-cta-phone-label">Jetzt direkt anrufen</span>
                  <span className="kontakt-cta-phone-number">+49 (0) 5933 - 93900</span>
                </div>
                <div className="kontakt-cta-phone-arrow" aria-hidden="true">
                  <ArrowRight size={18} strokeWidth={2.4} />
                </div>
              </a>
            </div>
          </div>

          {/* Location Map Visual & Route Planen Link */}
          <div className="kontakt-map-card">
            {/* Background Map Graphic */}
            <div className="kontakt-map-bg-box" aria-hidden="true">
              <img 
                src="./images/kontakt_map.jpg" 
                alt="Standortkarte Lathen"
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
        </div>
      </div>
    </section>
  );
}
