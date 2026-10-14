import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceSelectors() {
  return (
    <div className="reference-actions-container">
      {/* Contact CTA Button */}
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
    </div>
  );
}
