import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../config/scenes';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href, label) => {
    setActiveSection(label.toLowerCase());
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Hauptnavigation">
      <div className="navbar-container">
        {/* Brand Logo - Left */}
        <a 
          href="#" 
          className="navbar-brand" 
          aria-label="Pieper Internationale Transporte - Startseite"
        >
          <img 
            src="./images/pieper_logo_white.png" 
            alt="Pieper Internationale Transporte"
            className="brand-logo-img"
            width="220"
            height="56"
          />
        </a>

        {/* Right-Aligned Navigation Links */}
        <div className="navbar-links-right">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.label.toLowerCase();
            return (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(link.href, link.label)}
              >
                <span>{link.label}</span>
                {isActive && <span className="nav-active-line" aria-hidden="true" />}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-toggle-btn btn-slide-right"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileMenuOpen ? 'Navigation schließen' : 'Navigation öffnen'}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Panel / Drawer */}
      <div 
        id="mobile-nav-panel" 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">Navigation</span>
            <button 
              type="button"
              className="mobile-close-btn btn-slide-right"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Menü schließen"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-links-list">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.label.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleNavClick(link.href, link.label)}
              >
                <span>{link.label}</span>
                <span className="mobile-link-arrow">→</span>
              </a>
            ))}
          </div>

          <div className="mobile-drawer-footer">
            <div className="mobile-footer-label">Direkter Kontakt:</div>
            <a href={COMPANY_INFO.phoneHref} className="mobile-contact-pill">
              {COMPANY_INFO.phoneDisplay}
            </a>
            <a href={COMPANY_INFO.emailHref} className="mobile-contact-pill secondary">
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile */}
      {mobileMenuOpen && (
        <div 
          className="mobile-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true" 
        />
      )}
    </nav>
  );
}
