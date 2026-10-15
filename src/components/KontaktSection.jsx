import React from 'react';
import { 
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
            1. TOP ROW: DIRECT CONTACT CALL-TO-ACTION (LEFT) + TITLE & TEXT (RIGHT)
            ================================================================== */}
        <div className="kontakt-top-grid">
          {/* Left Column: Call to Action Card with Direct Phone Number */}
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

          {/* Right Column: Title, Eyebrow & Supporting Text */}
          <div className="kontakt-title-col">
            <div className="kontakt-eyebrow-wrapper">
              <span className="kontakt-eyebrow-line" aria-hidden="true" />
              <span className="kontakt-eyebrow-text">KONTAKT</span>
            </div>

            <h2 id="kontakt-main-heading" className="kontakt-heading">
              <span className="kontakt-heading-dark">Wir sind</span>
              <br />
              <span className="kontakt-heading-dark">für </span>
              <span className="kontakt-heading-lime">Sie da.</span>
            </h2>

            <p className="kontakt-intro-paragraph">
              Ob Transport, Lagerlogistik oder individuelle Lösungen – wir freuen 
              uns auf Ihre Anfrage. Unser Team steht Ihnen gerne persönlich zur 
              Verfügung.
            </p>
          </div>
        </div>

        {/* ==================================================================
            2. FULL-WIDTH CLEAN INTERACTIVE GOOGLE MAP EMBED & OVERLAY CARD
            ================================================================== */}
        <div className="kontakt-map-fullwidth-wrap" role="region" aria-label="Standortkarte Lathen">
          <div className="kontakt-map-card">
            {/* Crisp, Wide Interactive Google Map Embed centered at Lathen */}
            <iframe 
              title="Standortkarte PIEPER Internationale Transporte Lathen"
              src="https://maps.google.com/maps?q=52.8647,7.3185&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="kontakt-map-iframe"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Clean Location Info Card Overlay matching reference screenshot */}
            <div className="kontakt-map-info-card">
              <div className="kontakt-map-info-dot-row">
                <span className="kontakt-map-info-dot" aria-hidden="true" />
                <span className="kontakt-map-info-title">PIEPER INTERNATIONALE TRANSPORTE</span>
              </div>
              <p className="kontakt-map-info-address">
                Mühlentannen 11–13, 49762 Lathen, Deutschland
              </p>
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kontakt-map-info-route-btn"
                aria-label="Route zu PIEPER auf Google Maps planen"
              >
                <span>Route planen</span>
                <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
