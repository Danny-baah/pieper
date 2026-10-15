import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { 
  Recycle, 
  Warehouse, 
  Package, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  PhoneCall 
} from 'lucide-react';

// Custom SVG Icon matching the retail display shelving stand in the reference
function DisplayStandIcon({ size = 28, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="2" width="16" height="5" rx="1" />
      <rect x="4" y="9" width="16" height="5" rx="1" />
      <rect x="4" y="16" width="16" height="5" rx="1" />
      <path d="M7 4h10M7 11h10M7 18h10" />
      <path d="M6 21v2M18 21v2" />
    </svg>
  );
}

const LAGER_SERVICES = [
  {
    id: 'produktionsentsorgung',
    number: '01',
    title: 'Produktionsentsorgung',
    subtitle: 'Materialfluss & Entsorgungslogistik',
    description: 'Eine reibungslose Produktionsumgebung braucht durchdachte Entsorgungsprozesse. Wir unterstützen die strukturierte Abführung von Produktionsresten und Materialien, damit betriebliche Abläufe effizient organisiert bleiben.',
    features: [
      'Strukturierte Abführung direkt an Fertigungslinien',
      'Bereitstellung passender Sammel- und Behältersysteme',
      'Effiziente Taktung zur Vermeidung von Produktionsstillständen'
    ],
    image: './images/lager_card1_clean.jpg',
    imageAlt: 'Industrielle Produktionsentsorgung und Materialbehälter',
    icon: Recycle,
  },
  {
    id: 'warehouse-service',
    number: '02',
    title: 'Lagerservice',
    subtitle: 'Lagerhaltung & Bestandsorganisation',
    description: 'Zuverlässige Lagerprozesse bilden die Grundlage einer funktionierenden Lieferkette. Unser Lagerservice unterstützt die strukturierte Lagerung und Organisation Ihrer Waren sowie effiziente Abläufe innerhalb der Logistik.',
    features: [
      'Moderne Hochregallager und flexible Blocklagerflächen',
      'Transparente Bestandsführung und sichere Lagerung',
      'Höchste Sorgfalt bei Einlagerung und Auslagerung'
    ],
    image: './images/lager_card2_clean.jpg',
    imageAlt: 'Hochregallager und strukturierte Palettenlagerung',
    icon: Warehouse,
  },
  {
    id: 'kommissionierung-versand',
    number: '03',
    title: 'Kommissionierung & Versand',
    subtitle: 'Kommissionierung & Verpackung',
    description: 'Von der Zusammenstellung der Waren bis zur Versandvorbereitung kommt es auf präzise Abläufe an. Wir unterstützen organisierte Kommissionierungs- und Versandprozesse für einen zuverlässigen Warenfluss.',
    features: [
      'Präzise Zusammenstellung nach Ihren Auftragsdaten',
      'Fachgerechte Verpackung, Kennzeichnung und Versandbereitstellung',
      'Optimierte Durchlaufzeiten für termingerechten Warenausgang'
    ],
    image: './images/lager_card3_clean.jpg',
    imageAlt: 'Organisierte Kommissionierung und Fördertechnik',
    icon: Package,
  },
  {
    id: 'displaybau',
    number: '04',
    title: 'Displaybau',
    subtitle: 'Konfektionierung & POS-Präsentation',
    description: 'Für wirkungsvolle Produktpräsentationen kommt es auf eine sorgfältige Umsetzung an. Unser Displaybau unterstützt die Zusammenstellung und Vorbereitung von Displays nach den jeweiligen Anforderungen Ihres Projekts.',
    features: [
      'Fachgerechter Aufbau und Bestückung von Verkaufsdisplays',
      'Sichere Verpackung und Transportsicherung für den Handel',
      'Termintreue Koordination bis zum Point of Sale'
    ],
    image: './images/lager_card4_clean.jpg',
    imageAlt: 'Displaybau und POS-Warenpräsentation auf Paletten',
    icon: DisplayStandIcon,
  }
];

const BRAND_VALUES = [
  'SICHER',
  'ORGANISIERT',
  'EFFIZIENT',
  'FLEXIBEL'
];

export default function LagerlogistikSection() {
  const [activeModalId, setActiveModalId] = useState(null);
  const cardRefs = useRef({});
  const lastFocusedCardRef = useRef(null);
  const modalCloseBtnRef = useRef(null);

  const activeService = LAGER_SERVICES.find((s) => s.id === activeModalId) || null;

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

  // Handle ESC key and lock body scroll when modal is active
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
      id="lagerlogistik" 
      className="pieper-lager-section"
      aria-labelledby="lager-heading"
    >
      {/* ====================================================================
          1. UPPER SECTION: ASYMMETRIC SPLIT COMPOSITION (IMAGE ON LEFT, CONTENT ON RIGHT)
          ==================================================================== */}
      <div className="lager-hero-split-stage">
        {/* Subtle Watermark '02' behind right content */}
        <div className="lager-hero-watermark" aria-hidden="true">
          <span>02</span>
        </div>

        <div className="lager-hero-container">
          {/* Left Column: Prominent Angled Warehouse Photograph (Opposite of Transport) */}
          <div className="lager-hero-image-col">
            <div className="lager-image-frame">
              <span className="ki-badge lager-hero-ki-badge">KI-generiert</span>
              <img 
                src="./images/lager_warehouse_forklift.jpg" 
                alt="Gabelstapler bei der Palettenlogistik im Hochregallager"
                className="lager-forklift-photo"
                width="1440"
                height="800"
                loading="lazy"
              />
              <div className="lager-lighting-overlay" aria-hidden="true" />
            </div>

            {/* Editorial Angled Accent Blade on far-left edge */}
            <div className="lager-far-left-blade" aria-hidden="true" />
          </div>

          {/* Right Column: Intro Copy, CTA & Brand Values */}
          <div className="lager-hero-content-col">
            {/* Eyebrow */}
            <div className="lager-eyebrow-wrapper">
              <span className="lager-eyebrow-line" aria-hidden="true" />
              <span className="lager-eyebrow-text">LAGERLOGISTIK</span>
            </div>

            {/* Main Heading */}
            <h2 id="lager-heading" className="lager-heading">
              <span className="lager-heading-dark">Lagerlösungen,</span>
              <br />
              <span className="lager-heading-dark">die </span>
              <span className="lager-heading-lime">weiterdenken.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="lager-supporting-text">
              Von der Produktionsentsorgung bis zum Versand: Wir unterstützen 
              effiziente Warenflüsse mit durchdachten Lagerprozessen und 
              zuverlässiger Umsetzung.
            </p>

            {/* Bottom Row: CTA Button + Divider + Brand Values List */}
            <div className="lager-action-brand-row">
              {/* CTA Button */}
              <a 
                href="#lager-cards" 
                className="lager-cta-button btn-slide-left"
                aria-label="Zu unseren Lagerleistungen scrollen"
              >
                <span>Unsere Leistungen</span>
                <ArrowRight size={16} strokeWidth={2.4} className="lager-btn-arrow" aria-hidden="true" />
              </a>

              {/* Vertical low-contrast divider */}
              <div className="lager-brand-divider" aria-hidden="true" />

              {/* Compact Brand Values List */}
              <ul className="lager-brand-values-list" aria-label="Lagerlogistik Werte">
                {BRAND_VALUES.map((val) => (
                  <li key={val} className="lager-brand-value-item">
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          2. FOUR COMPACT SERVICE CARDS (4 COLUMNS, NO IMAGES AS REQUESTED)
          ==================================================================== */}
      <div id="lager-cards" className="lager-cards-section-wrapper">
        <div className="lager-cards-container">
          <div className="lager-cards-grid" role="list" aria-label="Lagerlogistik Dienstleistungen">
            {LAGER_SERVICES.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  ref={(el) => { cardRefs.current[service.id] = el; }}
                  className={`lager-service-card lager-card-${service.id}`}
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
                  {/* Subtle dark gradient overlay - NO background image as requested */}
                  <div className="lager-card-dark-gradient" aria-hidden="true" />

                  {/* Top-Right Number Indicator (01 —, 02 —, 03 —, 04 —) */}
                  <div className="lager-card-index-indicator" aria-hidden="true">
                    <span>{service.number}</span>
                    <span className="lager-card-dash">—</span>
                  </div>

                  {/* Card Interactive Content Area */}
                  <div className="lager-card-foreground">
                    <div className="lager-card-title-group">
                      {/* Lime Line Icon */}
                      <div className="lager-card-icon-box" aria-hidden="true">
                        <IconComp size={32} strokeWidth={1.8} className="lager-card-icon" />
                      </div>

                      {/* Card Title */}
                      <h3 className="lager-card-title">{service.title}</h3>

                      {/* Lime Accent Line */}
                      <div className="lager-card-accent-line" aria-hidden="true" />
                    </div>

                    {/* Lower-Right Circular Arrow Button */}
                    <div className="lager-card-action-box" aria-hidden="true">
                      <div className="lager-card-circle-btn">
                        <ArrowRight size={18} strokeWidth={2} className="lager-card-arrow-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================================================================
          3. ACCESSIBLE SERVICE DETAIL MODAL DIALOG (PORTALED TO BODY)
          ================================================================== */}
      {activeService && typeof document !== 'undefined' && createPortal(
        <div 
          className="lager-modal-backdrop" 
          onClick={closeModal}
          role="presentation"
        >
          <div 
            className="lager-modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lager-modal-title"
            aria-describedby="lager-modal-desc"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner */}
            <div className="lager-modal-banner">
              <span className="ki-badge">KI-generiert</span>
              <img 
                src={activeService.image} 
                alt={activeService.imageAlt}
                className="lager-modal-banner-img"
              />
              <div className="lager-modal-banner-gradient" aria-hidden="true" />

              {/* Service Icon Badge */}
              <div className="lager-modal-badge" aria-hidden="true">
                <activeService.icon size={26} strokeWidth={2} className="lager-modal-badge-icon" />
              </div>

              {/* Close Button */}
              <button 
                ref={modalCloseBtnRef}
                type="button" 
                onClick={closeModal}
                className="lager-modal-close-btn btn-slide-right"
                aria-label="Modal schließen"
              >
                <X size={20} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="lager-modal-body">
              <div className="lager-modal-header-meta">
                <span className="lager-modal-category">LAGERLOGISTIK LEISTUNG</span>
                <h3 id="lager-modal-title" className="lager-modal-title">
                  {activeService.title}
                </h3>
                <div className="lager-modal-lime-bar" aria-hidden="true" />
              </div>

              {/* Verified German Description from prompt */}
              <p id="lager-modal-desc" className="lager-modal-description">
                {activeService.description}
              </p>

              {/* Key Features Checklist */}
              <div className="lager-modal-features">
                <h4 className="lager-modal-features-heading">Vorteile und Leistungsmerkmale</h4>
                <ul className="lager-features-list">
                  {activeService.features.map((feat) => (
                    <li key={feat} className="lager-feature-item">
                      <CheckCircle2 size={18} className="lager-feature-icon" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="lager-modal-actions">
                <a 
                  href="#kontakt" 
                  onClick={closeModal}
                  className="lager-modal-contact-cta btn-slide-left"
                >
                  <PhoneCall size={16} aria-hidden="true" />
                  <span>Jetzt Lagerlogistik anfragen</span>
                </a>
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="lager-modal-dismiss-btn btn-slide-right"
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
