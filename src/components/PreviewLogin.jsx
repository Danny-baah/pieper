import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { PREVIEW_CONFIG } from '../config/previewAuth';
import '../styles/PreviewLogin.css';

/**
 * PreviewLogin Component
 * 
 * Clean, minimalist, anonymous password-only gate for client review.
 * Recreates the exact visual reference:
 * - Fullscreen warm ivory background (#FCFAEE) with abstract curves and soft beige-green gradients
 * - Centered compact ivory card with subtle border and elevation
 * - Single password field with lock icon, placeholder "Password", and eye toggle
 * - Full-width "Login" button in Deep Forest Ink (#061B18)
 * - Completely anonymous: no logo, title, branding, username, or extra links
 */
export default function PreviewLogin({ onLoginSuccess }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      setError('Bitte geben Sie das Passwort ein.');
      return;
    }

    setIsLoading(true);
    setError('');

    // Brief validation delay for polished feel and feedback
    setTimeout(() => {
      if (password === PREVIEW_CONFIG.password) {
        setIsLoading(false);
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setIsLoading(false);
        setError('Ungültiges Passwort. Bitte erneut versuchen.');
      }
    }, 280);
  };

  return (
    <div className="preview-gate-container">
      {/* Abstract Background with subtle elegant curves and beige-green gradients */}
      <div className="preview-bg-artwork" aria-hidden="true">
        <svg
          className="preview-bg-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft linear and radial gradient definitions */}
            <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCFAEE" />
              <stop offset="50%" stopColor="#FAF7E7" />
              <stop offset="100%" stopColor="#F3EEDC" />
            </linearGradient>

            <linearGradient id="softWave1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EFEBD8" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#EBE7D3" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FCFAEE" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="softWave2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E8E5CE" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#EFEBDB" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FCFAEE" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="cornerGlow" cx="0%" cy="100%" r="70%">
              <stop offset="0%" stopColor="#E7E5D0" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#F5F3E4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FCFAEE" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="topRightGlow" cx="100%" cy="0%" r="60%">
              <stop offset="0%" stopColor="#EBE7D3" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#F8F6E9" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FCFAEE" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background fill */}
          <rect width="1440" height="900" fill="url(#bgGrad1)" />

          {/* Soft ambient tone regions */}
          <rect width="1440" height="900" fill="url(#cornerGlow)" />
          <rect width="1440" height="900" fill="url(#topRightGlow)" />

          {/* Abstract curved tone bands */}
          <path
            d="M -100,550 C 350,680 750,450 1550,150 L 1550,900 L -100,900 Z"
            fill="url(#softWave1)"
          />
          <path
            d="M 600,-50 C 1050,-10 1250,220 1550,420 L 1550,-50 Z"
            fill="url(#softWave2)"
          />

          {/* Elegant sweeping abstract curve lines matching reference */}
          <path
            d="M -50,620 C 320,680 580,560 980,360 C 1220,240 1380,120 1500,-20"
            fill="none"
            stroke="#D3CDB7"
            strokeWidth="1.2"
            strokeOpacity="0.8"
          />
          <path
            d="M 1150,-30 C 1220,120 1320,240 1500,320"
            fill="none"
            stroke="#D3CDB7"
            strokeWidth="1.2"
            strokeOpacity="0.7"
          />
          <path
            d="M -80,480 C 240,540 500,420 860,240 C 1100,120 1280,40 1420,-40"
            fill="none"
            stroke="#DFD9C5"
            strokeWidth="0.8"
            strokeOpacity="0.45"
          />
        </svg>
      </div>

      {/* Centered Minimalist Login Card */}
      <main className="preview-card-wrapper" role="main">
        <div className="preview-login-card">
          <form className="preview-login-form" onSubmit={handleSubmit} noValidate>
            {/* Single Password Input Field */}
            <div className={`preview-input-container ${error ? 'has-error' : ''}`}>
              <span className="preview-input-icon preview-lock-icon" aria-hidden="true">
                <Lock size={17} strokeWidth={1.8} />
              </span>

              <input
                id="preview-password-input"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Passwort"
                autoComplete="current-password"
                autoFocus
                disabled={isLoading}
                aria-label="Passwort"
                aria-invalid={!!error}
                aria-describedby={error ? 'preview-error-text' : undefined}
                className="preview-password-field"
              />

              <button
                type="button"
                className="preview-toggle-visibility-btn"
                onClick={handleTogglePassword}
                aria-label={showPassword ? 'Passwort verbergen' : 'Passwort anzeigen'}
                tabIndex={0}
              >
                {showPassword ? (
                  <Eye size={17} strokeWidth={1.8} />
                ) : (
                  <EyeOff size={17} strokeWidth={1.8} />
                )}
              </button>
            </div>

            {/* Discreet Error Message */}
            {error && (
              <div id="preview-error-text" className="preview-error-message" role="alert">
                {error}
              </div>
            )}

            {/* Full-width Login Button */}
            <button
              id="preview-login-submit-btn"
              type="submit"
              disabled={isLoading}
              className={`preview-login-button ${isLoading ? 'is-loading' : ''}`}
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="preview-spinner" />
                  <span>Login</span>
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
