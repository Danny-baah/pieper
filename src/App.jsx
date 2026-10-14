import React, { useEffect } from 'react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TransportlogistikSection from './components/TransportlogistikSection';
import LagerlogistikSection from './components/LagerlogistikSection';
import KarriereSection from './components/KarriereSection';
import KontaktSection from './components/KontaktSection';
import Footer from './components/Footer';
import './App.css';
import './styles/About.css';
import './styles/Transportlogistik.css';
import './styles/Lagerlogistik.css';
import './styles/Karriere.css';
import './styles/Kontakt.css';
import './styles/Footer.css';

function App() {
  useEffect(() => {
    // Entrance animations for left/right aligned buttons upon entering viewport
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
  }, []);

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
    </div>
  );
}

export default App;

