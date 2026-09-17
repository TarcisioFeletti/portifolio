export interface SocialLink {
  label: string;
  url: string;
}

const SOCIALS: readonly [SocialLink, SocialLink] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tarcisio-feletti-3b9923219' },
  { label: 'GitHub', url: 'https://github.com/TarcisioFeletti' },
];

export const PROFILE = {
  name: 'Tarcisio Feletti',
  email: 'tarcisio.feletti@gmail.com',
  github: 'https://github.com/TarcisioFeletti',
  repo: 'https://github.com/TarcisioFeletti/portifolio',
  cvPath: 'assets/tarcisio-feletti-cv.pdf',
  cvFileName: 'Tarcisio-Feletti-CV.pdf',
  socials: SOCIALS,
  year: 2026,
} as const;

export const SITE = {
  url: 'https://tarcisiofeletti.github.io/portifolio',
} as const;
