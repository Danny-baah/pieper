/**
 * Private Client Preview Authentication Configuration
 * 
 * IMPORTANT SECURITY LIMITATION:
 * This is a lightweight, frontend-only preview gate designed to allow private client
 * reviews before the website is officially launched. A password stored in client-side code
 * can be inspected by technical users. For production or sensitive access control,
 * server-side authentication or hosting-level protection (e.g. Basic Auth / Cloudflare Access)
 * must be configured.
 */

export const PREVIEW_CONFIG = {
  // Configured default preview password
  password: 'Pieper2026!',
  
  // Storage key for session persistence
  storageKey: 'pieper_client_preview_access',
  
  // Storage type ('session' resets on browser close; 'local' persists across sessions)
  storageType: 'session',
};

/**
 * Check if the preview session is currently active
 */
export function isPreviewAuthenticated() {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(PREVIEW_CONFIG.storageKey) === 'true';
  } catch {
    return false;
  }
}

/**
 * Grant preview session access
 */
export function setPreviewAuthenticated(authenticated = true) {
  if (typeof window === 'undefined') return;
  try {
    if (authenticated) {
      sessionStorage.setItem(PREVIEW_CONFIG.storageKey, 'true');
    } else {
      sessionStorage.removeItem(PREVIEW_CONFIG.storageKey);
    }
  } catch {
    // SessionStorage unavailable fallback
  }
}
