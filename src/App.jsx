import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TransportlogistikSection from './components/TransportlogistikSection';
import LagerlogistikSection from './components/LagerlogistikSection';
import KarriereSection from './components/KarriereSection';
import KontaktSection from './components/KontaktSection';
import Footer from './components/Footer';
import PreviewLogin from './components/PreviewLogin';
import { isPreviewAuthenticated, setPreviewAuthenticated } from './config/previewAuth';
import { Lock } from 'lucide-react';
import './App.css';
import './styles/About.css';
import './styles/Transportlogistik.css';
import './styles/Lagerlogistik.css';
import './styles/Karriere.css';
import './styles/Kontakt.css';
import './styles/Footer.css';
import './styles/PreviewLogin.css';

function App() {
  // Session-persisted preview gate state
  const [isAuthenticated, setIsAuthenticated] = useState(() => isPreviewAuthenticated());

  // Keep page title anonymous prior to authentication
  useEffect(() => {
    if (isAuthenticated) {
      document.title = 'Pieper Internationale Transporte | Zuverlässige Transport- & Lagerlogistik';
    } else {
      document.title = 'Preview';
    }
  }, [isAuthenticated]);

  // Entrance animations for left/right aligned buttons upon entering viewport
  useEffect(() => {
    if (!isAuthenticated) return;

    const slideButtons = document.querySelectorAll('.btn-slide-left, .btn-slide-right');
    
    if (!('IntersectionObserver' in window)) {
      slideButtons.forEach((el) => el.classList.add('is-btn-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-btn-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -25px 0px' }
    );

    slideButtons.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isAuthenticated]);

  const handleLoginSuccess = () => {
    setPreviewAuthenticated(true);
    setIsAuthenticated(true);
  };

  const handleRelockPreview = () => {
    setPreviewAuthenticated(false);
    setIsAuthenticated(false);
  };

  // If client has not entered the preview password, show anonymous login screen
  if (!isAuthenticated) {
    return <PreviewLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="pieper-app-root">
      {/* 
        Pieper Internationale Transporte - Single Page Architecture
        Hero Section (Continuous cinematic video)
        About Section (Editorial company profile & authentic fleet collage)
        Transportlogistik Section (Asymmetric split hero & 3 compact service cards)
        Lagerlogistik Section (Asymmetric warehouse composition & 2x2 service grid)
        Karriere Section (Asymmetric recruitment hero, benefits, 4 clean categories)
        Kontakt Section (Direct contact panels, real links, directions, opening hours)
        Footer (Facility sunset banner, contact columns, Europe route map, feature badges, legal bar)
      */}
      <Hero />
      <AboutSection />
      <TransportlogistikSection />
      <LagerlogistikSection />
      <KarriereSection />
      <KontaktSection />
      <Footer />

      {/* Discreet floating lock pill allowing client to return to login screen at any time */}
      <button
        type="button"
        onClick={handleRelockPreview}
        className="preview-relock-banner"
        title="Vorschau sperren und zum Login zurückkehren"
        aria-label="Vorschau sperren"
      >
        <Lock size={13} strokeWidth={2} />
        <span>Vorschau sperren</span>
      </button>
    </div>
  );
}

export default App;
