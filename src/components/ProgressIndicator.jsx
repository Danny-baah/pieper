import React from 'react';
import { SCENES } from '../config/scenes';

export default function ProgressIndicator({ activeSceneIndex, progress, onSelectScene }) {
  const formattedIndex = String(activeSceneIndex + 1).padStart(2, '0');
  const formattedTotal = String(SCENES.length).padStart(2, '0');

  return (
    <div 
      className="reference-progress-row" 
      role="region" 
      aria-label="Szenenfortschritt"
    >
      {/* Scene Counter: 01 / 03 */}
      <div className="reference-scene-counter" aria-live="polite">
        <span className="counter-num">{formattedIndex}</span>
        <span className="counter-slash">/</span>
        <span className="counter-num">{formattedTotal}</span>
      </div>

      {/* 3 Slim Horizontal Segments */}
      <div className="reference-segments-track">
        {SCENES.map((scene, idx) => {
          const isActive = idx === activeSceneIndex;
          let fillWidth = '0%';

          if (isActive) {
            fillWidth = `${Math.min(Math.max(progress * 100, 0), 100)}%`;
          } else if (idx < activeSceneIndex) {
            fillWidth = '100%';
          } else {
            fillWidth = '0%';
          }

          return (
            <button
              key={scene.id}
              type="button"
              className={`reference-segment-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectScene(idx)}
              aria-label={`Zu Szene ${idx + 1} (${scene.serviceCategory}) springen`}
              aria-current={isActive ? 'true' : undefined}
            >
              <div className="reference-segment-track">
                <div 
                  className={`reference-segment-fill ${isActive ? 'active-fill' : ''}`}
                  style={{ width: fillWidth }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
