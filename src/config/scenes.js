/**
 * Pieper Internationale Transporte - Central Scene Configuration
 * Using unified continuous video stream (IMG_3138.MOV desktop, IMG_3139.MOV mobile)
 * Timestamps:
 *   Scene 0: 0.0s - 10.0s (Transportlogistik)
 *   Scene 1: 10.0s - 20.0s (Lagerlogistik)
 *   Scene 2: 20.0s - 27.9s (Transportlogistik)
 */

export const COMBINED_VIDEOS = {
  desktop: './videos/pieper_combined_desktop.mp4',
  mobile: './videos/pieper_combined_mobile.mp4',
  duration: 27.9,
};

export const SCENES = [
  {
    id: 'transport-a',
    index: 0,
    startTime: 0.0,
    endTime: 10.0,
    serviceCategory: 'Transportlogistik',
    overline: 'PIEPER INTERNATIONALE TRANSPORTE',
    headlinePrefix: 'Transport,',
    headlineSecondLinePrefix: 'der ',
    highlightWord: 'weiterdenkt.',
    supportingText: 'Zuverlässige Transport- und Lagerlogistik.\nPräzise geplant. Sicher ans Ziel.',
  },
  {
    id: 'warehouse',
    index: 1,
    startTime: 10.0,
    endTime: 20.0,
    serviceCategory: 'Lagerlogistik',
    overline: 'PIEPER INTERNATIONALE TRANSPORTE',
    headlinePrefix: 'Logistik,',
    headlineSecondLinePrefix: 'die ',
    highlightWord: 'bewegt.',
    supportingText: 'Effiziente Lagerprozesse.\nDurchdacht organisiert. Reibungslos umgesetzt.',
  },
  {
    id: 'transport-b',
    index: 2,
    startTime: 20.0,
    endTime: 27.9,
    serviceCategory: 'Transportlogistik',
    overline: 'PIEPER INTERNATIONALE TRANSPORTE',
    headlinePrefix: 'Transport,',
    headlineSecondLinePrefix: 'der ',
    highlightWord: 'weiterdenkt.',
    supportingText: 'Von der Straße bis ans Ziel.\nIhr Partner für zuverlässige Transporte.',
  },
];

export const COMPANY_INFO = {
  name: 'Pieper Internationale Transporte',
  address: 'Mühlentannen 11 – 13 · 49762 Lathen',
  phoneDisplay: '05933 - 93900',
  phoneHref: 'tel:0593393900',
  email: 'info@pieper-spedition.com',
  emailHref: 'mailto:info@pieper-spedition.com',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about', isActiveDefault: true },
  { label: 'Services', href: '#services' },
  { label: 'Karriere', href: '#karriere' },
  { label: 'Kontakt', href: '#kontakt' },
];
