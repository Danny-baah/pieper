import React, { useState, useEffect, useRef } from 'react';

export default function TypewriterHeadline({ scene }) {
  const [charCount, setCharCount] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showSupporting, setShowSupporting] = useState(false);

  const prevSceneIndexRef = useRef(scene.index);
  const timerRef = useRef(null);

  // Line 1: e.g. "Transport," or "Logistik,"
  const line1 = scene.headlinePrefix;
  // Line 2 prefix: e.g. "der " or "die "
  const line2Prefix = scene.headlineSecondLinePrefix;
  // Line 2 highlight: e.g. "weiterdenkt." or "bewegt."
  const highlightWord = scene.highlightWord;

  const totalChars = line1.length + line2Prefix.length + highlightWord.length;
  const isTyping = charCount < totalChars && !isFadingOut;

  // Scene transition fade out & reset
  useEffect(() => {
    if (prevSceneIndexRef.current !== scene.index) {
      prevSceneIndexRef.current = scene.index;
      setIsFadingOut(true);
      setShowSupporting(false);

      const fadeTimer = setTimeout(() => {
        setCharCount(0);
        setIsFadingOut(false);
      }, 200);

      return () => clearTimeout(fadeTimer);
    }
  }, [scene.index]);

  // Typing animation loop
  useEffect(() => {
    if (isFadingOut) return;

    if (charCount < totalChars) {
      timerRef.current = setTimeout(() => {
        setCharCount((prev) => prev + 1);
      }, 42);
    } else {
      const supTimer = setTimeout(() => {
        setShowSupporting(true);
      }, 100);
      return () => clearTimeout(supTimer);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [charCount, totalChars, isFadingOut, scene.index]);

  // Determine what is currently visible on Line 1 and Line 2
  const visibleLine1 = line1.slice(0, Math.min(charCount, line1.length));
  const charsRemaining = Math.max(0, charCount - line1.length);
  const visibleLine2Prefix = line2Prefix.slice(0, Math.min(charsRemaining, line2Prefix.length));
  const charsForHighlight = Math.max(0, charsRemaining - line2Prefix.length);
  const visibleHighlight = highlightWord.slice(0, Math.min(charsForHighlight, highlightWord.length));

  const isTypingLine1 = charCount < line1.length;

  return (
    <div className={`hero-story-content ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
      {/* Clean White Overline - No border, no background, directly on footage */}
      <div className="hero-clean-overline" aria-label={scene.overline}>
        {scene.overline}
      </div>

      {/* Main Heading with 2 Lines matching the Reference Design */}
      <div className="hero-heading-wrapper">
        <h1 className="hero-heading" aria-label={`${line1} ${line2Prefix}${highlightWord}`}>
          <span className="heading-line-1">
            {visibleLine1}
            {isTyping && isTypingLine1 && (
              <span className="typewriter-caret" aria-hidden="true">|</span>
            )}
          </span>
          <br />
          <span className="heading-line-2">
            <span className="heading-line2-prefix">{visibleLine2Prefix}</span>
            {visibleHighlight && (
              <span className="heading-highlight">{visibleHighlight}</span>
            )}
            {isTyping && !isTypingLine1 && (
              <span className="typewriter-caret" aria-hidden="true">|</span>
            )}
          </span>
        </h1>
      </div>

      {/* Signature Lime Accent Line directly beneath headline */}
      <div className={`hero-lime-accent-line ${showSupporting ? 'visible' : ''}`} aria-hidden="true" />

      {/* Supporting Text matching the reference image */}
      <div className="hero-supporting-wrapper">
        <p className={`hero-supporting-text ${showSupporting ? 'visible' : ''}`}>
          {scene.supportingText.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx < scene.supportingText.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}
