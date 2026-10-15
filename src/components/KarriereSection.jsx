import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Settings, 
  TrendingUp, 
  Truck, 
  Warehouse, 
  Wrench, 
  Briefcase, 
  Sprout, 
  ArrowRight, 
  Quote
} from 'lucide-react';

const EMPLOYEE_BENEFITS = [
  {
    id: 'team',
    icon: Users,
    heading: 'Starkes Team',
    description: 'Gemeinsam mehr erreichen.',
  },
  {
    id: 'arbeitsplatz',
    icon: ShieldCheck,
    heading: 'Sicherer Arbeitsplatz',
    description: 'Langfristige Perspektiven.',
  },
  {
    id: 'ausstattung',
    icon: Settings,
    heading: 'Moderne Ausstattung',
    description: 'Effizient und zukunftsorientiert.',
  },
  {
    id: 'chancen',
    icon: TrendingUp,
    heading: 'Entwicklung & Chancen',
    description: 'Weiterbildung und neue Möglichkeiten.',
  },
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
  const scrollToJobs = (e) => {
    e.preventDefault();
    const target = document.getElementById('stellenangebote');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="karriere" 
      className="pieper-karriere-section"
      aria-labelledby="karriere-main-heading"
    >
      <div className="karriere-main-container">
        {/* ==================================================================
            1. UPPER HERO SPLIT: INTRO & BENEFITS (LEFT) + ASYMMETRIC COLLAGE (RIGHT)
            ================================================================== */}
        <div className="karriere-hero-split">
          {/* Left Column: Intro Copy, CTA, and Employee Benefits */}
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

            {/* Supporting Copy */}
            <p className="karriere-intro-paragraph">
              Werde Teil eines starken Teams. Bei PIEPER Internationale Transporte erwarten 
              dich sichere Perspektiven, ein modernes Arbeitsumfeld und die Möglichkeit, 
              gemeinsam zu wachsen.
            </p>

            {/* Primary CTA Button */}
            <div className="karriere-cta-wrapper">
              <a 
                href="#stellenangebote" 
                onClick={scrollToJobs}
                className="karriere-primary-cta btn-slide-left"
              >
                <span>Unsere Stellenangebote</span>
                <ArrowRight size={17} strokeWidth={2.2} className="karriere-cta-arrow" aria-hidden="true" />
              </a>
            </div>

            {/* Four Employee Benefits with Vertical Dividers */}
            <div className="karriere-benefits-row" role="list" aria-label="Mitarbeiter-Vorteile bei Pieper">
              {EMPLOYEE_BENEFITS.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <React.Fragment key={benefit.id}>
                    {idx > 0 && <span className="karriere-benefit-divider" aria-hidden="true" />}
                    <div className="karriere-benefit-item" role="listitem">
                      <div className="karriere-benefit-icon-box" aria-hidden="true">
                        <IconComponent size={24} strokeWidth={1.8} className="karriere-benefit-icon" />
                      </div>
                      <h3 className="karriere-benefit-title">{benefit.heading}</h3>
                      <p className="karriere-benefit-desc">{benefit.description}</p>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Right Column: Recruitment Imagery Collage */}
          <div className="karriere-right-column">
            <div className="karriere-collage-frame">
              <span className="ki-badge">KI-generiert</span>
              {/* Primary Collage Composite Image (High-Res Pieper Driver, Truck, Quote Panel & Sub-Photos) */}
              <img 
                src="./images/karriere_hero_collage.png" 
                alt="Pieper Logistik-Team und Berufskraftfahrer vor Fuhrpark"
                className="karriere-collage-photo"
                loading="lazy"
                width="644"
                height="380"
              />

              {/* Accessible/Semantic Quote Panel */}
              <div className="karriere-quote-panel" aria-label="Mitarbeiterzitat">
                <Quote size={28} className="karriere-quote-symbol" aria-hidden="true" />
                <p className="karriere-quote-text">
                  Starke Menschen machen starke Logistik möglich.
                </p>
                <div className="karriere-quote-accent-line" aria-hidden="true" />
                <div className="karriere-quote-values" aria-label="Unternehmenswerte">
                  <span>TEAMGEIST.</span>
                  <span>VERANTWORTUNG.</span>
                  <span>GEMEINSAME ZUKUNFT.</span>
                </div>
              </div>

              {/* Supporting Strip of 3 Photographs */}
              <div className="karriere-supporting-strip" aria-hidden="true">
                <div className="karriere-strip-thumb">
                  <img src="./images/karriere_sub1_warehouse_back.jpg" alt="" loading="lazy" />
                </div>
                <div className="karriere-strip-thumb">
                  <img src="./images/karriere_sub2_tablet_woman.jpg" alt="" loading="lazy" />
                </div>
                <div className="karriere-strip-thumb">
                  <img src="./images/karriere_sub3_vest_driver.jpg" alt="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================
            2. JOB CATEGORIES: OFFENE STELLEN (CLEAN 4-CARD OVERVIEW)
            ================================================================== */}
        <div id="stellenangebote" className="karriere-jobs-wrapper">
          {/* Section Heading */}
          <div className="karriere-jobs-header">
            <div className="karriere-jobs-eyebrow-row">
              <span className="karriere-jobs-lime-line" aria-hidden="true" />
              <h3 className="karriere-jobs-headline">Offene Stellen</h3>
            </div>
            <p className="karriere-jobs-subtitle">
              Vielfältige Aufgaben. Starke Perspektiven.
            </p>
          </div>

          {/* Clean 4-Card Overview Grid - Static, No Expanding Panels or Modals */}
          <div className="karriere-jobs-grid" role="list" aria-label="Offene Stellen">
            {JOB_CATEGORIES.map((job) => {
              const IconComponent = job.icon;

              return (
                <div
                  key={job.id}
                  className="karriere-job-card"
                  role="listitem"
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
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================================================================
            3. SUSTAINABILITY & FINAL RECRUITMENT CTA PANEL
            ================================================================== */}
        <div className="karriere-sustainability-panel">
          <div className="karriere-sustainability-left">
            <div className="karriere-sprout-icon-box" aria-hidden="true">
              <Sprout size={28} strokeWidth={1.8} className="karriere-sprout-icon" />
            </div>
            <div className="karriere-sustainability-text">
              <h4 className="karriere-sustainability-title">Nachhaltige Perspektiven.</h4>
              <p className="karriere-sustainability-desc">
                Wir investieren in Menschen – für eine starke Zukunft in der Logistik.
              </p>
            </div>
          </div>

          <div className="karriere-sustainability-right">
            <a href="#kontakt" className="karriere-outline-cta btn-slide-right">
              <span>Jetzt bewerben</span>
              <ArrowRight size={16} strokeWidth={2.2} className="karriere-outline-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
