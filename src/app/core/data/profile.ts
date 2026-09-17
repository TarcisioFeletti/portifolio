export interface SocialLink {
  label: string;
  url: string;
}

const SOCIALS: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tarcisio-feletti-3b9923219' },
  { label: 'GitHub', url: 'https://github.com/TarcisioFeletti' },
];

export const PROFILE = {
  name: 'Tarcisio Feletti',
  initials: 'TF',
  email: 'tarcisio.feletti@gmail.com',
  github: 'https://github.com/TarcisioFeletti',
  githubLabel: 'github.com/TarcisioFeletti',
  socials: SOCIALS,
  year: 2026,
} as const;

export const SITE = {
  url: 'https://tarcisiofeletti.github.io/portifolio',
} as const;
