import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { 
  ArrowRight, 
  Truck, 
  Boxes, 
  Settings, 
  X, 
  CheckCircle2, 
  PhoneCall 
} from 'lucide-react';

const BRAND_VALUES = [
  'DEUTSCHLAND',
  'EUROPA',
  'ZUVERLÄSSIG',
  'PÜNKTLICH',
  'EFFIZIENT'
];

const SERVICE_ITEMS = [
  {
    id: 'teil-komplett',
    number: '01',
    title: 'Teil- und Komplettladungen',
    subtitle: 'LTL & FTL Transportlogistik',
    description: 'Flexible Transportlösungen für Teil- und Komplettladungen. Wir unterstützen Sie bei der zuverlässigen Planung und Durchführung Ihrer Transporte, abgestimmt auf Ihre Sendungsgröße und logistischen Anforderungen.',
    features: [
      'Nationale und europaweite Relationen',
      'Direkttransporte ohne unnötige Umschlagsprozesse',
      'Planungssicherheit mit moderner Disposition'
    ],
    image: './images/card_clean_teil_komplett.jpg',
    imageAlt: 'Pieper LKW auf der Autobahn für Teil- und Komplettladungen',
    icon: Truck,
  },
  {
    id: 'sammelgut',
    number: '02',
    title: 'Sammelgut',
    subtitle: 'Wirtschaftliche Stückgutlogistik',
    description: 'Effiziente Sammelgutlösungen für kleinere Sendungen. Durch die Bündelung geeigneter Transporte ermöglichen wir eine wirtschaftliche und zuverlässige Abwicklung Ihrer Warenbewegungen.',
    features: [
      'Optimale Auslastung durch intelligente Frachtbündelung',
      'Feste Fahrpläne und verlässliche Regellaufzeiten',
      'Sorgfältiges Warenhandling im Umschlag'
    ],
    image: './images/card_clean_sammelgut.jpg',
    imageAlt: 'Modernes Hochregallager und Sammelgutlogistik',
    icon: Boxes,
  },
  {
    id: 'sonderloesungen',
    number: '03',
    title: 'Sonderlösungen',
    subtitle: 'Maßgeschneiderte Spezialtransporte',
    description: 'Nicht jede Transportaufgabe ist gleich. Wir entwickeln individuelle Transportlösungen, die auf besondere Anforderungen, spezielle Abläufe und Ihre logistischen Herausforderungen abgestimmt sind.',
    features: [
      'Individuelle Streckenkonzepte und Zeitfenster',
      'Passgenaue Fahrzeug- und Laderaumlösungen',
      'Persönlicher Ansprechpartner für Ihr Vorhaben'
    ],
    image: './images/card_clean_sonderloesungen.jpg',
    imageAlt: 'Pieper Spezialfahrzeug im Transportnetzwerk',
    icon: Settings,
  }
];

export default function TransportlogistikSection() {
  const [activeModalId, setActiveModalId] = useState(null);
  const cardRefs = useRef({});
  const lastFocusedCardRef = useRef(null);
  const modalCloseBtnRef = useRef(null);

  const activeService = SERVICE_ITEMS.find((s) => s.id === activeModalId) || null;

  const openModal = useCallback((id) => {
    lastFocusedCardRef.current = cardRefs.current[id] || null;
    setActiveModalId(id);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModalId(null);
    if (lastFocusedCardRef.current) {
      lastFocusedCardRef.current.focus();
    }
  }, []);

  // Handle ESC key and prevent body scroll when modal is open
  useEffect(() => {
    if (!activeModalId) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    // Focus close button in modal when opened
    setTimeout(() => {
      if (modalCloseBtnRef.current) {
        modalCloseBtnRef.current.focus();
      }
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalId, closeModal]);

  return (
    <section 
      id="services" 
      className="pieper-v2-transport-section"
      aria-labelledby="transport-v2-heading"
    >
      {/* ====================================================================
          1. UPPER SECTION: ASYMMETRIC SPLIT COMPOSITION (IVORY + ANGLED TRUCK)
          ==================================================================== */}
      <div className="v2-hero-split-stage">
        {/* Subtle Watermark '01' behind left content */}
        <div className="v2-hero-watermark" aria-hidden="true">
          <span>01</span>
        </div>

        <div className="v2-hero-container">
          {/* Left Column: Intro Copy, CTA & Brand Values */}
          <div className="v2-hero-content-col">
            {/* Eyebrow */}
            <div className="v2-eyebrow-wrapper">
              <span className="v2-eyebrow-line" aria-hidden="true" />
              <span className="v2-eyebrow-text">TRANSPORTLOGISTIK</span>
            </div>

            {/* Main Heading */}
            <h2 id="transport-v2-heading" className="v2-heading">
              <span className="v2-heading-dark">Transport,</span>
              <br />
              <span className="v2-heading-dark">der </span>
              <span className="v2-heading-lime">weiterdenkt.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="v2-supporting-text">
              Zuverlässige Transportlösungen für Deutschland und Europa. Sicher, 
              pünktlich und effizient – mit einem starken Partner an Ihrer Seite.
            </p>

            {/* Bottom Row: CTA Button + Divider + Brand Values List */}
            <div className="v2-action-brand-row">
              {/* CTA Button */}
              <a 
                href="#transport-cards" 
                className="v2-cta-button btn-slide-left"
                aria-label="Zu unseren Leistungen scrollen"
              >
                <span>Unsere Leistungen</span>
                <ArrowRight size={16} strokeWidth={2.4} className="v2-btn-arrow" aria-hidden="true" />
              </a>

              {/* Vertical low-contrast divider */}
              <div className="v2-brand-divider" aria-hidden="true" />

              {/* Compact Brand Values List */}
              <ul className="v2-brand-values-list" aria-label="Unternehmenswerte">
                {BRAND_VALUES.map((val) => (
                  <li key={val} className="v2-brand-value-item">
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Prominent Angled Truck Photograph */}
          <div className="v2-hero-image-col">
            <div className="v2-truck-frame">
              <img 
                src="./images/truck_highway_main.jpg" 
                alt="Pieper IVECO S-WAY LKW im Straßentransport auf der Autobahn"
                className="v2-truck-photo"
                width="1440"
                height="800"
                loading="eager"
              />
              <div className="v2-truck-lighting-overlay" aria-hidden="true" />
            </div>

            {/* Editorial Angled Accent Blade on far right edge matching reference */}
            <div className="v2-far-right-blade" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ====================================================================
          2. THREE COMPACT SERVICE CARDS (NAMES, ICONS & ARROWS ONLY)
          ==================================================================== */}
      <div id="transport-cards" className="v2-cards-section-wrapper">
        <div className="v2-cards-container">
          <div className="v2-cards-grid" role="list" aria-label="Transportlogistik Dienstleistungen">
            {SERVICE_ITEMS.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  ref={(el) => { cardRefs.current[service.id] = el; }}
                  className={`v2-service-card v2-card-${service.id}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => openModal(service.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(service.id);
                    }
                  }}
                  aria-haspopup="dialog"
                  aria-label={`${service.title} Details anzeigen`}
                >
                  {/* Card Background Photograph */}
                  <div className="v2-card-bg-box">
                    <img 
                      src={service.image} 
                      alt=""
                      className="v2-card-bg-img"
                      loading="lazy"
                      width="600"
                      height="380"
                      aria-hidden="true"
                    />
                    <div className="v2-card-dark-gradient" aria-hidden="true" />
                  </div>

                  {/* Top-Right Number Indicator (01 —, 02 —, 03 —) */}
                  <div className="v2-card-index-indicator" aria-hidden="true">
                    <span>{service.number}</span>
                    <span className="v2-card-dash">—</span>
                  </div>

                  {/* Card Interactive Content Area */}
                  <div className="v2-card-foreground">
                    <div className="v2-card-title-group">
                      {/* Lime Line Icon */}
                      <div className="v2-card-icon-box" aria-hidden="true">
                        <IconComp size={32} strokeWidth={1.8} className="v2-card-icon" />
                      </div>

                      {/* Card Title */}
                      <h3 className="v2-card-title">{service.title}</h3>

                      {/* Lime Accent Line */}
                      <div className="v2-card-accent-line" aria-hidden="true" />
                    </div>

                    {/* Lower-Right Circular Arrow Button */}
                    <div className="v2-card-action-box" aria-hidden="true">
                      <div className="v2-card-circle-btn">
                        <ArrowRight size={18} strokeWidth={2} className="v2-card-arrow-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ====================================================================
          3. ACCESSIBLE SERVICE DETAIL MODAL DIALOG (PORTALED TO BODY)
          ==================================================================== */}
      {activeService && typeof document !== 'undefined' && createPortal(
        <div 
          className="v2-modal-backdrop" 
          onClick={closeModal}
          role="presentation"
        >
          <div 
            className="v2-modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-service-title"
            aria-describedby="modal-service-desc"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero Banner */}
            <div className="v2-modal-banner">
              <img 
                src={activeService.image} 
                alt={activeService.imageAlt}
                className="v2-modal-banner-img"
              />
              <div className="v2-modal-banner-gradient" aria-hidden="true" />
              
              {/* Service Icon Badge */}
              <div className="v2-modal-badge" aria-hidden="true">
                <activeService.icon size={26} strokeWidth={2} className="v2-modal-badge-icon" />
              </div>

              {/* Close Button */}
              <button 
                ref={modalCloseBtnRef}
                type="button" 
                onClick={closeModal} 
                className="v2-modal-close-btn btn-slide-right"
                aria-label="Modal schließen"
              >
                <X size={20} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="v2-modal-body">
              <div className="v2-modal-header-meta">
                <span className="v2-modal-category">LEISTUNGSÜBERSICHT</span>
                <h3 id="modal-service-title" className="v2-modal-title">
                  {activeService.title}
                </h3>
                <div className="v2-modal-lime-bar" aria-hidden="true" />
              </div>

              {/* Professional Description */}
              <p id="modal-service-desc" className="v2-modal-description">
                {activeService.description}
              </p>

              {/* Service Features Checklist */}
              <div className="v2-modal-features">
                <h4 className="v2-modal-features-heading">Ihre Vorteile im Überblick</h4>
                <ul className="v2-features-list">
                  {activeService.features.map((feat) => (
                    <li key={feat} className="v2-feature-item">
                      <CheckCircle2 size={18} className="v2-feature-icon" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="v2-modal-actions">
                <a 
                  href="#kontakt" 
                  onClick={closeModal}
                  className="v2-modal-contact-cta btn-slide-left"
                >
                  <PhoneCall size={16} aria-hidden="true" />
                  <span>Jetzt Transport anfragen</span>
                </a>
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="v2-modal-dismiss-btn btn-slide-right"
                >
                  Schließen
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
