import React from 'react';
import { Truck, Warehouse, ArrowRight } from 'lucide-react';

export default function ServiceSelectors({ activeCategory, onSelectService }) {
  const isTransportActive = activeCategory === 'Transportlogistik';
  const isWarehouseActive = activeCategory === 'Lagerlogistik';

  const handleTransportClick = () => {
    onSelectService(0);
    const target = document.getElementById('services') || document.getElementById('transportlogistik');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWarehouseClick = () => {
    onSelectService(1);
    const target = document.getElementById('lagerlogistik');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="reference-actions-container">
      {/* Contact CTA Button on its own line before the service icons */}
      <div className="hero-contact-row">
        <a 
          href="#kontakt" 
          className="hero-contact-action-btn btn-slide-left"
          aria-label="Zur Kontaktseite gehen"
        >
          <span>Kontakt</span>
          <ArrowRight size={16} className="contact-btn-arrow" aria-hidden="true" />
        </a>
      </div>

      {/* Service Icons Row directly below Contact Button */}
      <div className="reference-service-selectors" role="region" aria-label="Leistungsbereiche">
        {/* Transportlogistik */}
        <button
          type="button"
          className={`reference-service-btn ${isTransportActive ? 'active' : ''}`}
          onClick={handleTransportClick}
          aria-pressed={isTransportActive}
          aria-label="Transportlogistik ansehen und zur Sektion scrollen"
        >
          <div className="reference-icon-container">
            <Truck 
              className="reference-icon" 
              size={28} 
              strokeWidth={1.75} 
              aria-hidden="true" 
            />
            {isTransportActive && <span className="service-active-underline" aria-hidden="true" />}
          </div>
          <span className="reference-service-label">Transportlogistik</span>
        </button>

        {/* Lagerlogistik - No dot, no border */}
        <button
          type="button"
          className={`reference-service-btn ${isWarehouseActive ? 'active' : ''}`}
          onClick={handleWarehouseClick}
          aria-pressed={isWarehouseActive}
          aria-label="Lagerlogistik ansehen und zur Sektion scrollen"
        >
          <div className="reference-icon-container">
            <Warehouse 
              className="reference-icon" 
              size={28} 
              strokeWidth={1.75} 
              aria-hidden="true" 
            />
            {isWarehouseActive && <span className="service-active-underline" aria-hidden="true" />}
          </div>
          <span className="reference-service-label">Lagerlogistik</span>
        </button>
      </div>
    </div>
  );
}
