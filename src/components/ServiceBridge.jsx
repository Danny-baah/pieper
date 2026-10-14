import React from 'react';
import '../styles/ServiceBridge.css';

// Custom Warehouse with Boxes SVG matching the exact reference icon
function WarehouseBoxesIcon({ size = 66, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      aria-hidden="true"
    >
      {/* Gable Roof & Outer Building Walls */}
      <path d="M 8 26 L 32 12 L 56 26 L 56 52 L 8 52 Z" strokeWidth="3" />
      {/* Inner Central Gate/Bay Frame */}
      <path d="M 18 52 L 18 31 L 46 31 L 46 52" strokeWidth="2.6" />
      {/* Stacked Cargo Boxes inside */}
      <rect x="22" y="37" width="11" height="15" strokeWidth="2.4" />
      <rect x="33" y="44" width="9.5" height="8" strokeWidth="2.4" />
    </svg>
  );
}

// Custom Motion Delivery Truck SVG matching the reference with speed lines
function MotionTruckIcon({ size = 66, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      aria-hidden="true"
    >
      {/* 3 speed/motion lines entering cargo box on left */}
      <line x1="6" y1="20" x2="23" y2="20" strokeWidth="3" />
      <line x1="11" y1="27" x2="25" y2="27" strokeWidth="3" />
      <line x1="6" y1="34" x2="23" y2="34" strokeWidth="3" />

      {/* Cargo box container */}
      <path d="M 17 14 L 38 14 L 38 41 L 17 41" strokeWidth="3" />

      {/* Truck cab */}
      <path d="M 38 22 L 48 22 L 56 33 L 56 41 L 38 41" strokeWidth="3" />

      {/* Cab windshield */}
      <path d="M 39 25 L 47 25 L 52 33 L 39 33 Z" strokeWidth="2" />

      {/* Wheels */}
      <circle cx="25" cy="46" r="6" strokeWidth="3.2" />
      <circle cx="48" cy="46" r="6" strokeWidth="3.2" />
      {/* Chassis line */}
      <line x1="31" y1="46" x2="42" y2="46" strokeWidth="2.5" />
    </svg>
  );
}

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
        {/* Item 1: Lagerlogistik */}
        <a
          href="#lagerlogistik"
          onClick={scrollToService('lagerlogistik')}
          className="service-ribbon-item btn-slide-left"
          aria-label="Zu Lagerlogistik scrollen"
        >
          <div className="ribbon-item-icon-wrap">
            <WarehouseBoxesIcon size={66} className="ribbon-item-icon" />
          </div>
          <span className="ribbon-item-title">LAGERLOGISTIK</span>
        </a>

        {/* Item 2: Transportlogistik */}
        <a
          href="#services"
          onClick={scrollToService('services')}
          className="service-ribbon-item btn-slide-right"
          aria-label="Zu Transportlogistik scrollen"
        >
          <div className="ribbon-item-icon-wrap">
            <MotionTruckIcon size={66} className="ribbon-item-icon" />
          </div>
          <span className="ribbon-item-title">TRANSPORTLOGISTIK</span>
        </a>
      </div>
    </section>
  );
}
