export type Lang = 'pt' | 'en';

export interface SectionTitle {
  lead: string;
  highlight: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Job {
  role: string;
  org: string;
  place: string;
  period: string;
  summary: string;
  tech: string[];
  highlights: string[];
}

export interface Project {
  name: string;
  meta: string;
  body: string;
  tech: string[];
  link?: string;
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
    menuLabel: string;
  };
  hero: {
    role: string;
    valueProp: string;
    portraitAlt: string;
    ctaMail: string;
    ctaCv: string;
    highlights: Stat[];
  };
  about: { kicker: string; title: SectionTitle; paragraphs: string[]; stats: Stat[] };
  stack: { kicker: string; title: SectionTitle; note: string; groups: SkillGroup[] };
  experience: { kicker: string; title: SectionTitle; jobs: Job[] };
  projects: { kicker: string; title: SectionTitle; linkLabel: string; items: Project[] };
  education: {
    kicker: string;
    title: SectionTitle;
    degree: { label: string; period: string; course: string; school: string };
    research: { kicker: string; body: string };
    technical: { label: string; course: string; period: string };
    certKicker: string;
    certs: string[];
  };
  contact: {
    kicker: string;
    title: SectionTitle;
    emailLabel: string;
    profilesLabel: string;
    locationLabel: string;
    location: string;
    footerRole: string;
    sourceLabel: string;
  };
}
