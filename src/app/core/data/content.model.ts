export type Lang = 'pt' | 'en';

export type Accent = 'yellow' | 'teal' | 'pink' | 'orange' | 'green' | 'paper';

export interface Stat {
  value: string;
  label: string;
  accent: Accent;
}

export interface SkillGroup {
  title: string;
  items: string;
}

export interface Job {
  role: string;
  org: string;
  place: string;
  period: string;
  stack: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  sector: string;
  name: string;
  body: string;
  stack: string;
}

export interface Education {
  course: string;
  school: string;
  period: string;
}

export interface SiteContent {
  lang: Lang;
  htmlLang: string;
  meta: { title: string; description: string; locale: string };
  skipLink: string;
  nav: {
    ariaLabel: string;
    sections: { id: string; label: string }[];
    switchLabel: string;
    switchAria: string;
  };
  hero: {
    line1: string;
    line2: string;
    paragraphs: [string, string];
    ctaMail: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    stats: Stat[];
  };
  stack: { title: string; note: string; skills: string[]; groups: SkillGroup[] };
  experience: { title: string; jobs: Job[] };
  projects: {
    title: string;
    note: string;
    cta: string;
    takeLabel: string;
    items: Project[];
  };
  education: {
    kicker: string;
    title: string;
    items: Education[];
    certKicker: string;
    certs: string[];
    research: { kicker: string; body: string };
  };
  contact: {
    kicker: string;
    title: string;
    emailLabel: string;
    profilesLabel: string;
    locationLabel: string;
    location: string;
    footerRole: string;
  };
}
