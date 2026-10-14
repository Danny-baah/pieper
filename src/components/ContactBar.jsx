import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../config/scenes';

export default function ContactBar() {
  return (
    <header className="contact-bar" aria-label="Unternehmenskontakt">
      <div className="contact-bar-container">
        {/* Left Side: Address & Phone */}
        <div className="contact-bar-left">
          <div className="contact-item address-item">
            <MapPin className="contact-icon" size={14} aria-hidden="true" />
            <span className="contact-text">{COMPANY_INFO.address}</span>
          </div>

          <span className="contact-divider" aria-hidden="true">·</span>

          <div className="contact-item phone-item">
            <Phone className="contact-icon" size={14} aria-hidden="true" />
            <a 
              href={COMPANY_INFO.phoneHref} 
              className="contact-link"
              aria-label={`Telefon: ${COMPANY_INFO.phoneDisplay}`}
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Right Side: Email */}
        <div className="contact-bar-right">
          <div className="contact-item email-item">
            <Mail className="contact-icon" size={14} aria-hidden="true" />
            <a 
              href={COMPANY_INFO.emailHref} 
              className="contact-link"
              aria-label={`E-Mail: ${COMPANY_INFO.email}`}
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
