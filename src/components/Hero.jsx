import React, { useState, useCallback } from 'react';
import { SCENES } from '../config/scenes';
import ContactBar from './ContactBar';
import Navbar from './Navbar';
import VideoBackground from './VideoBackground';
import TypewriterHeadline from './TypewriterHeadline';
import ServiceSelectors from './ServiceSelectors';
import ProgressIndicator from './ProgressIndicator';

export default function Hero() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [manualTargetIndex, setManualTargetIndex] = useState(null);

  const activeScene = SCENES[activeSceneIndex] || SCENES[0];

  const handleSceneChange = useCallback((newIndex) => {
    setActiveSceneIndex(newIndex);
  }, []);

  const handleProgressUpdate = useCallback((prog) => {
    setVideoProgress(prog);
  }, []);

  const handleSelectService = useCallback((targetIndex) => {
    setManualTargetIndex(targetIndex);
  }, []);

  const handleSelectScene = useCallback((targetIndex) => {
    setManualTargetIndex(targetIndex);
  }, []);

  const handleManualSwitchHandled = useCallback(() => {
    setManualTargetIndex(null);
  }, []);

  return (
    <section className="pieper-hero-section" id="home" aria-label="Hero Präsentation">
      {/* Background Unified Video Stream */}
      <VideoBackground
        activeSceneIndex={activeSceneIndex}
        onSceneChange={handleSceneChange}
        onProgressUpdate={handleProgressUpdate}
        manualTargetIndex={manualTargetIndex}
        onManualSwitchHandled={handleManualSwitchHandled}
      />

      {/* Top Region: Slim Contact Bar & Seamless Header */}
      <div className="hero-header-wrapper">
        <ContactBar />
        <Navbar />
      </div>

      {/* Hero Content Area aligned to the left matching the reference */}
      <div className="hero-reference-body">
        <div className="hero-story-column">
          <TypewriterHeadline scene={activeScene} />

          {/* Contact Action CTA */}
          <ServiceSelectors />

          {/* Progress Indicator (01 / 03 and 3 slim horizontal segments) */}
          <ProgressIndicator
            activeSceneIndex={activeSceneIndex}
            progress={videoProgress}
            onSelectScene={handleSelectScene}
          />
        </div>
      </div>
    </section>
  );
}
