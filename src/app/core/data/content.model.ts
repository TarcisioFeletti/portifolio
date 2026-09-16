export type Lang = 'pt' | 'en';

export type Accent = 'yellow' | 'teal' | 'pink' | 'orange' | 'green' | 'paper';

export interface LabelValue {
  label: string;
  value: string;
}

export interface Sticker {
  title: string;
  subtitle?: string;
}

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
  hud: { rec: string; frame: string; meta: string; tags: string[]; take: string };
  hero: {
    line1: string;
    line2: string;
    paragraphs: [string, string];
    ctaMail: string;
    ctaCv: string;
  };
  plate: {
    left: string;
    right: string;
    focus: string;
    portraitAlt: string;
    stickers: [Sticker, Sticker, Sticker, Sticker, Sticker, Sticker];
  };
  strip: {
    logoLabel: string;
    logoSub: string;
    readouts: LabelValue[];
    modeLabel: string;
    modeTags: string[];
    modeFooter: [string, string];
  };
  about: {
    reel: string;
    marquee: string;
    kicker: string;
    title: string;
    paragraphs: string[];
    stats: Stat[];
  };
  stack: { reel: string; title: string; note: string; skills: string[]; groups: SkillGroup[] };
  experience: { reel: string; title: string; jobs: Job[] };
  projects: {
    reel: string;
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
    reel: string;
    kicker: string;
    title: string;
    emailLabel: string;
    phoneLabel: string;
    profilesLabel: string;
    locationLabel: string;
    location: string;
    footerRole: string;
  };
}
