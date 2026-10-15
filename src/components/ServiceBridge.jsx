import React from 'react';
import { Truck, Warehouse, ArrowDown } from 'lucide-react';
import '../styles/ServiceBridge.css';

export default function ServiceBridge() {
  const scrollToService = (targetId) => (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="pieper-service-bridge-section" 
      aria-label="Schnellzugriff auf Leistungsbereiche"
    >
      <div className="service-bridge-container">
        {/* Subtle Watermark Branding across band matching reference */}
        <div className="service-bridge-watermark" aria-hidden="true">
          PIEPER
        </div>

        {/* Item 1: Transportlogistik -> Scrolls to #services */}
        <a
          href="#services"
          onClick={scrollToService('services')}
          className="service-bridge-item btn-slide-left"
          aria-label="Zu Transportlogistik scrollen"
        >
          <div className="service-bridge-icon-wrap" aria-hidden="true">
            <Truck size={36} strokeWidth={2} className="service-bridge-icon" />
          </div>
          <span className="service-bridge-title">Transportlogistik</span>
          <div className="service-bridge-arrow-wrap" aria-hidden="true">
            <ArrowDown size={14} strokeWidth={2.4} className="service-bridge-arrow" />
          </div>
        </a>

        {/* Center Vertical Divider Line */}
        <div className="service-bridge-divider" aria-hidden="true" />

        {/* Item 2: Lagerlogistik -> Scrolls to #lagerlogistik */}
        <a
          href="#lagerlogistik"
          onClick={scrollToService('lagerlogistik')}
          className="service-bridge-item btn-slide-right"
          aria-label="Zu Lagerlogistik scrollen"
        >
          <div className="service-bridge-icon-wrap" aria-hidden="true">
            <Warehouse size={36} strokeWidth={2} className="service-bridge-icon" />
          </div>
          <span className="service-bridge-title">Lagerlogistik</span>
          <div className="service-bridge-arrow-wrap" aria-hidden="true">
            <ArrowDown size={14} strokeWidth={2.4} className="service-bridge-arrow" />
          </div>
        </a>
      </div>
    </section>
  );
}
