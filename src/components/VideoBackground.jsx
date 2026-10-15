import React, { useRef, useState, useEffect } from 'react';
import { COMBINED_VIDEOS, SCENES } from '../config/scenes';

export default function VideoBackground({
  activeSceneIndex,
  onSceneChange,
  onProgressUpdate,
  manualTargetIndex,
  onManualSwitchHandled,
}) {
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false
  );

  const videoRef = useRef(null);
  const activeSceneIndexRef = useRef(activeSceneIndex);

  useEffect(() => {
    activeSceneIndexRef.current = activeSceneIndex;
  }, [activeSceneIndex]);

  // Track viewport mobile/desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaChange = (e) => setIsMobile(e.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  const videoSrc = isMobile ? COMBINED_VIDEOS.mobile : COMBINED_VIDEOS.desktop;

  // Initial playback
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((err) => {
        console.warn('Autoplay prevented:', err);
      });
    }
  }, [videoSrc]);

  // Handle manual scene jump from service selector or progress bar
  useEffect(() => {
    if (manualTargetIndex !== null && manualTargetIndex !== undefined) {
      const video = videoRef.current;
      if (video) {
        const targetScene = SCENES[manualTargetIndex] || SCENES[0];
        video.currentTime = targetScene.startTime;
        onSceneChange(manualTargetIndex);
      }
      onManualSwitchHandled();
    }
  }, [manualTargetIndex, onSceneChange, onManualSwitchHandled]);

  // Timeupdate handler: detect scene changes & drive real progress
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const currentTime = video.currentTime;

    // Determine active scene based on cut timestamps (0-9.9s, 9.9-17.9s, 17.9-end)
    let currentSceneIdx = 0;
    if (currentTime >= 17.9) {
      currentSceneIdx = 2;
    } else if (currentTime >= 9.9) {
      currentSceneIdx = 1;
    } else {
      currentSceneIdx = 0;
    }

    if (currentSceneIdx !== activeSceneIndexRef.current) {
      onSceneChange(currentSceneIdx);
    }

    // Calculate progress within current scene (0.0 to 1.0)
    const currentScene = SCENES[currentSceneIdx];
    const sceneDuration = currentScene.endTime - currentScene.startTime;
    const sceneElapsed = Math.max(0, currentTime - currentScene.startTime);
    const progress = Math.min(Math.max(sceneElapsed / sceneDuration, 0), 1);

    onProgressUpdate(progress);
  };

  return (
    <div className="hero-video-container" aria-hidden="true">
      {/* Single Unified Continuous Background Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="hero-video-continuous"
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Cinematic Overlays matching the reference image */}
      <div className="hero-reference-gradient" />
    </div>
  );
}
