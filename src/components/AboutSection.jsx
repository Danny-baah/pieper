import React, { useEffect, useRef, useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Truck, 
  Warehouse 
} from 'lucide-react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`pieper-about-section ${isVisible ? 'is-revealed' : ''}`} 
      id="about" 
      aria-labelledby="about-heading"
    >
      {/* Background Watermark Monogram */}
      <div className="about-watermark-bg" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="watermark-svg">
          <path 
            d="M 30,30 L 110,30 C 145,30 165,50 165,85 C 165,120 145,140 110,140 L 70,140 L 50,180 L 25,180 L 50,140 L 30,140 Z M 70,60 L 70,110 L 105,110 C 125,110 135,100 135,85 C 135,70 125,60 105,60 Z" 
            fill="currentColor" 
          />
        </svg>
      </div>

      <div className="about-main-container">
        {/* Left Column: Company Introduction & Trust Points */}
        <div className="about-content-column">
          {/* Eyebrow with Lime Accent */}
          <div className="about-eyebrow-wrapper">
            <span className="about-eyebrow-line" aria-hidden="true" />
            <span className="about-eyebrow-text">ÜBER UNS</span>
          </div>

          {/* Main Heading */}
          <h2 id="about-heading" className="about-heading">
            <span className="heading-line-dark">Starke Logistik.</span>
            <br />
            <span className="heading-line-dark">Zuverlässige </span>
            <span className="heading-highlight-lime">Wege.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="about-paragraph">
            PIEPER Internationale Transporte steht für zuverlässige Transport- und 
            Lagerlogistik in Deutschland und Europa. Mit modernen Fahrzeugen, erfahrenen 
            Mitarbeitern und einem klaren Anspruch an Qualität sorgen wir dafür, dass 
            Ihre Waren sicher, pünktlich und effizient ihr Ziel erreichen.
          </p>

          {/* Trust & Value Points */}
          <div className="about-value-points" role="list">
            {/* Value Point 1: Zuverlässig */}
            <div className="value-point-item" role="listitem">
              <div className="value-icon-box">
                <ShieldCheck className="value-icon" size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="value-title">Zuverlässig</h3>
              <p className="value-desc">Planungssicherheit auf jeder Strecke.</p>
            </div>

            <div className="value-divider" aria-hidden="true" />

            {/* Value Point 2: Erfahren */}
            <div className="value-point-item" role="listitem">
              <div className="value-icon-box">
                <Users className="value-icon" size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="value-title">Erfahren</h3>
              <p className="value-desc">Ein starkes Team für starke Ergebnisse.</p>
            </div>

            <div className="value-divider" aria-hidden="true" />

            {/* Value Point 3: Effizient */}
            <div className="value-point-item" role="listitem">
              <div className="value-icon-box">
                <TrendingUp className="value-icon" size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="value-title">Effizient</h3>
              <p className="value-desc">Optimale Prozesse für Ihren Erfolg.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="about-cta-wrapper">
            <a href="#services" className="about-cta-button btn-slide-left" aria-label="Mehr über uns erfahren">
              <span>Mehr über uns</span>
              <ArrowRight className="about-btn-arrow" size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Truck Collage */}
        <div className="about-collage-column">
          <div className="about-collage-grid">
            {/* Main Primary Image: Front 3/4 highway shot */}
            <div className="collage-item collage-item-main">
              <span className="ki-badge">KI-generiert</span>
              <img 
                src="./images/truck_highway_main.jpg" 
                alt="Pieper IVECO S-WAY LKW im Straßentransport auf der Autobahn"
                className="collage-img"
                loading="lazy"
                width="1020"
                height="800"
              />
            </div>

            {/* Sub-column with 2 stacked images */}
            <div className="collage-sub-column">
              {/* Secondary Image: Trailer rear view */}
              <div className="collage-item collage-item-top">
                <span className="ki-badge">KI-generiert</span>
                <img 
                  src="./images/truck_trailer_rear.jpg" 
                  alt="Pieper Sattelzug Heckansicht mit Lathen Kontaktdaten"
                  className="collage-img"
                  loading="lazy"
                  width="640"
                  height="420"
                />
              </div>

              {/* Third Image: Modern Warehouse Logistics Center */}
              <div className="collage-item collage-item-bottom">
                <span className="ki-badge">KI-generiert</span>
                <img 
                  src="./images/warehouse_interior.jpg" 
                  alt="Modernes Pieper Logistikzentrum und Hochregallager"
                  className="collage-img"
                  loading="lazy"
                  width="640"
                  height="460"
                />
              </div>
            </div>

            {/* Editorial angled lime accent blade on the right */}
            <div className="collage-lime-blade" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Bottom Statistics / Information Band */}
      <div className="about-stats-band" role="region" aria-label="Unternehmensfakten">
        {/* Background Landscape / Road Tint Overlay */}
        <div className="stats-bg-overlay" aria-hidden="true" />
        
        {/* Subtle Watermark Branding across band matching reference */}
        <div className="stats-watermark-text" aria-hidden="true">PIEPER</div>

        <div className="stats-band-container">
          {/* Card 1: Transport */}
          <div className="stat-block">
            <div className="stat-icon-wrapper">
              <Truck className="stat-icon" size={36} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div className="stat-text-wrapper">
              <span className="stat-highlight-title">Zuverlässige Transporte</span>
              <span className="stat-subtitle">Termintreue &amp; Präzision auf jeder Route</span>
            </div>
          </div>

          <div className="stat-divider" aria-hidden="true" />

          {/* Card 2: Lagerlogistik */}
          <div className="stat-block">
            <div className="stat-icon-wrapper">
              <Warehouse className="stat-icon" size={36} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div className="stat-text-wrapper">
              <span className="stat-highlight-title lime-accent">Effiziente Lagerlogistik</span>
              <span className="stat-subtitle">Moderne Lager- &amp; Umschlaglogistik</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
