export type Lang = 'pt' | 'en';

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  items: string;
}

export interface ClientWork {
  name: string;
  sector: string;
  product: string;
  role: string;
  stack: string;
}

export interface Job {
  role: string;
  org: string;
  place: string;
  period: string;
  stack: string;
  summary: string;
  clients: ClientWork[];
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
    role: string;
    valueProp: string;
    portraitAlt: string;
    ctaMail: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    stats: Stat[];
  };
  stack: { title: string; note: string; skills: string[]; groups: SkillGroup[] };
  experience: { title: string; clientsLabel: string; jobs: Job[] };
  openSource: { title: string; name: string; body: string; stack: string; cta: string };
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
