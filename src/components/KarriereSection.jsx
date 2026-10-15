import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Warehouse, 
  Wrench, 
  Briefcase, 
  ArrowRight,
  CheckCircle2,
  Sprout,
  Mail,
  Copy,
  Check,
  ExternalLink,
  X,
  Send
} from 'lucide-react';

const BENEFITS = [
  'Teamgeist & faires Miteinander',
  'Sicherer Arbeitsplatz mit Perspektive',
  'Moderne Ausstattung & Fuhrpark',
  'Pünktliche & faire Vergütung'
];

const JOB_CATEGORIES = [
  {
    id: 'berufskraftfahrer',
    title: 'Berufskraftfahrer (m/w/d)',
    icon: Truck,
  },
  {
    id: 'lager-logistik',
    title: 'Lager & Logistik (m/w/d)',
    icon: Warehouse,
  },
  {
    id: 'technik-werkstatt',
    title: 'Technik & Werkstatt (m/w/d)',
    icon: Wrench,
  },
  {
    id: 'verwaltung-organisation',
    title: 'Verwaltung & Organisation (m/w/d)',
    icon: Briefcase,
  }
];

export default function KarriereSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = 'info@pieper-spedition.com';
  const subject = 'Bewerbung bei Pieper Internationale Transporte';
  const body = 'Sehr geehrte Damen und Herren,\n\nhiermit bewerbe ich mich für eine Position bei PIEPER Internationale Transporte.\n\nMit freundlichen Grüßen,\n';

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const scrollToJobs = (e) => {
    e.preventDefault();
    const target = document.getElementById('stellenangebote');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyClick = (e) => {
    e.preventDefault();
    // Attempt standard mailto protocol
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback
    }
    // Also open modal so webmail/Gmail users or users without desktop mail client can immediately compose
    setIsModalOpen(true);
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="karriere" 
      className="pieper-karriere-section"
      aria-labelledby="karriere-main-heading"
    >
      <div className="karriere-main-container">
        {/* ==================================================================
            1. UPPER HERO SPLIT: INTRO & CLEAN IMAGE
            ================================================================== */}
        <div className="karriere-hero-split">
          {/* Left Column: Intro Copy, Benefits & Action */}
          <div className="karriere-left-column">
            {/* Eyebrow */}
            <div className="karriere-eyebrow-wrapper">
              <span className="karriere-eyebrow-line" aria-hidden="true" />
              <span className="karriere-eyebrow-text">KARRIERE</span>
            </div>

            {/* Main Headline */}
            <h2 id="karriere-main-heading" className="karriere-heading">
              <span className="karriere-heading-dark">Gemeinsam</span>
              <br />
              <span className="karriere-heading-dark">mehr </span>
              <span className="karriere-heading-lime">bewegen.</span>
            </h2>

            {/* Supporting Copy - concise */}
            <p className="karriere-intro-paragraph">
              Werde Teil unseres Teams. Bei PIEPER erwarten dich sichere Perspektiven, 
              ein moderner Fuhrpark und ein verlässliches Miteinander.
            </p>

            {/* Compact Key Benefits */}
            <div className="karriere-benefits-compact" aria-label="Ihre Vorteile">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="karriere-benefit-pill">
                  <CheckCircle2 size={16} className="karriere-benefit-check" aria-hidden="true" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA Button */}
            <div className="karriere-cta-wrapper">
              <a 
                href="#stellenangebote" 
                onClick={scrollToJobs}
                className="karriere-primary-cta btn-slide-left"
              >
                <span>Offene Stellen entdecken</span>
                <ArrowRight size={17} strokeWidth={2.2} className="karriere-cta-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean, Authentic Single Image */}
          <div className="karriere-right-column">
            <div className="karriere-image-frame">
              <span className="ki-badge">KI-generiert</span>
              <img 
                src="./images/karriere_hero_simple.jpg" 
                alt="Vertrauensvoller Händedruck in der Logistik – Partnerschaft und Karriere bei Pieper"
                className="karriere-hero-photo"
                loading="lazy"
                width="1280"
                height="720"
              />
              <div className="karriere-photo-overlay" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* ==================================================================
            2. OFFENE STELLEN (CLEAN 4-CARD OVERVIEW)
            ================================================================== */}
        <div id="stellenangebote" className="karriere-jobs-wrapper">
          <div className="karriere-jobs-header">
            <div className="karriere-jobs-eyebrow-row">
              <span className="karriere-jobs-lime-line" aria-hidden="true" />
              <h3 className="karriere-jobs-headline">Offene Stellen</h3>
            </div>
            <p className="karriere-jobs-subtitle">
              Vielfältige Aufgaben. Starke Perspektiven.
            </p>
          </div>

          <div className="karriere-jobs-grid" role="list" aria-label="Offene Stellen">
            {JOB_CATEGORIES.map((job) => {
              const IconComponent = job.icon;

              return (
                <a
                  key={job.id}
                  href="#kontakt"
                  className="karriere-job-card"
                  role="listitem"
                  aria-label={`${job.title} - Jetzt bewerben`}
                >
                  <div className="karriere-card-content">
                    <div className="karriere-card-top-row">
                      <div className="karriere-card-icon-box" aria-hidden="true">
                        <IconComponent size={22} strokeWidth={1.8} className="karriere-card-icon" />
                      </div>
                      <div className="karriere-card-arrow-wrap" aria-hidden="true">
                        <ArrowRight size={15} strokeWidth={2} className="karriere-card-arrow" />
                      </div>
                    </div>

                    <h4 className="karriere-card-title">{job.title}</h4>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ==================================================================
            3. SUSTAINABILITY & DIRECT APPLICATION BANNER
            ================================================================== */}
        <div className="karriere-sustainability-panel">
          <div className="karriere-sustainability-left">
            <div className="karriere-sprout-icon-box" aria-hidden="true">
              <Sprout size={26} strokeWidth={1.8} className="karriere-sprout-icon" />
            </div>
            <div className="karriere-sustainability-text">
              <h4 className="karriere-sustainability-title">Nachhaltige Perspektiven.</h4>
              <p className="karriere-sustainability-desc">
                Wir investieren in Menschen – für eine starke Zukunft in der Logistik.
              </p>
            </div>
          </div>

          <div className="karriere-sustainability-right">
            <button 
              type="button"
              onClick={handleApplyClick}
              className="karriere-outline-cta btn-slide-right"
              aria-label="Jetzt per E-Mail bewerben"
            >
              <span>Jetzt bewerben</span>
              <ArrowRight size={16} strokeWidth={2.2} className="karriere-outline-arrow" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Direct Application & Email Options Modal */}
      {isModalOpen && (
        <div 
          className="karriere-modal-overlay" 
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="karriere-modal-title"
        >
          <div 
            className="karriere-modal-card" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="karriere-modal-header">
              <div className="karriere-modal-icon-wrap" aria-hidden="true">
                <Mail size={22} className="karriere-modal-icon" />
              </div>
              <div className="karriere-modal-titles">
                <h3 id="karriere-modal-title" className="karriere-modal-title">
                  Bewerbung senden
                </h3>
                <p className="karriere-modal-subtitle">
                  Direkt an <strong>{email}</strong>
                </p>
              </div>
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                className="karriere-modal-close"
                aria-label="Modal schließen"
              >
                <X size={18} />
              </button>
            </div>

            {/* Email Launch Options */}
            <div className="karriere-modal-options">
              {/* Option 1: Standard Mail Client */}
              <a 
                href={mailtoUrl}
                className="karriere-modal-opt-btn primary-mail-btn"
              >
                <div className="karriere-opt-left">
                  <div className="karriere-opt-icon-circle">
                    <Send size={18} />
                  </div>
                  <div className="karriere-opt-texts">
                    <span className="karriere-opt-name">Standard E-Mail-Programm</span>
                    <span className="karriere-opt-hint">Outlook, Apple Mail, Thunderbird</span>
                  </div>
                </div>
                <ArrowRight size={16} className="karriere-opt-arrow" />
              </a>

              {/* Option 2: Gmail Webmail */}
              <a 
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="karriere-modal-opt-btn"
              >
                <div className="karriere-opt-left">
                  <div className="karriere-opt-icon-circle gmail-circle">
                    <Mail size={18} />
                  </div>
                  <div className="karriere-opt-texts">
                    <span className="karriere-opt-name">In Gmail öffnen</span>
                    <span className="karriere-opt-hint">Öffnet neues Browser-Tab mit vorbereiteter E-Mail</span>
                  </div>
                </div>
                <ExternalLink size={16} className="karriere-opt-arrow" />
              </a>

              {/* Option 3: Outlook Web */}
              <a 
                href={outlookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="karriere-modal-opt-btn"
              >
                <div className="karriere-opt-left">
                  <div className="karriere-opt-icon-circle outlook-circle">
                    <Mail size={18} />
                  </div>
                  <div className="karriere-opt-texts">
                    <span className="karriere-opt-name">In Outlook Web öffnen</span>
                    <span className="karriere-opt-hint">outlook.live.com / office.com</span>
                  </div>
                </div>
                <ExternalLink size={16} className="karriere-opt-arrow" />
              </a>

              {/* Option 4: Copy Email */}
              <button 
                type="button"
                onClick={handleCopyEmail}
                className="karriere-modal-opt-btn copy-btn"
              >
                <div className="karriere-opt-left">
                  <div className="karriere-opt-icon-circle copy-circle">
                    {copied ? <Check size={18} className="karriere-check-icon" /> : <Copy size={18} />}
                  </div>
                  <div className="karriere-opt-texts">
                    <span className="karriere-opt-name">
                      {copied ? 'E-Mail-Adresse kopiert!' : 'E-Mail-Adresse kopieren'}
                    </span>
                    <span className="karriere-opt-hint">{email}</span>
                  </div>
                </div>
                {copied ? (
                  <span className="karriere-copied-badge">Kopiert ✓</span>
                ) : (
                  <Copy size={16} className="karriere-opt-arrow" />
                )}
              </button>
            </div>

            {/* Footer / Alternate */}
            <div className="karriere-modal-footer">
              <a 
                href="#kontakt" 
                onClick={() => setIsModalOpen(false)}
                className="karriere-modal-alt-link"
              >
                Oder direkt unser Kontaktformular nutzen →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
