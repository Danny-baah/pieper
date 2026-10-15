import React from 'react';
import { Truck, Warehouse } from 'lucide-react';
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

        {/* Item 1: Zuverlässige Transporte -> Scrolls to #services (Transportlogistik) */}
        <a
          href="#services"
          onClick={scrollToService('services')}
          className="service-bridge-item btn-slide-left"
          aria-label="Zuverlässige Transporte – Zu Transportlogistik scrollen"
        >
          <div className="service-bridge-icon-wrap" aria-hidden="true">
            <Truck size={36} strokeWidth={2} className="service-bridge-icon" />
          </div>
          <div className="service-bridge-text-wrap">
            <span className="service-bridge-title">Zuverlässige Transporte</span>
            <span className="service-bridge-subtitle">Termintreue &amp; Präzision auf jeder Route</span>
          </div>
        </a>

        {/* Center Vertical Divider Line */}
        <div className="service-bridge-divider" aria-hidden="true" />

        {/* Item 2: Effiziente Lagerlogistik -> Scrolls to #lagerlogistik */}
        <a
          href="#lagerlogistik"
          onClick={scrollToService('lagerlogistik')}
          className="service-bridge-item btn-slide-right"
          aria-label="Effiziente Lagerlogistik – Zu Lagerlogistik scrollen"
        >
          <div className="service-bridge-icon-wrap" aria-hidden="true">
            <Warehouse size={36} strokeWidth={2} className="service-bridge-icon" />
          </div>
          <div className="service-bridge-text-wrap">
            <span className="service-bridge-title">Effiziente Lagerlogistik</span>
            <span className="service-bridge-subtitle">Moderne Lager- &amp; Umschlaglogistik</span>
          </div>
        </a>
      </div>
    </section>
  );
}
