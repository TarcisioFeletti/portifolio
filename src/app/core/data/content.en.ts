import { SiteContent } from './content.model';

export const CONTENT_EN: SiteContent = {
  lang: 'en',
  htmlLang: 'en',
  meta: {
    title: 'Tarcisio Feletti — Full Stack Developer',
    description:
      'Full Stack Developer with 4+ years in Java, Spring, Angular and TypeScript. Systems for healthcare, steel, HR and legal clients. Available for remote work.',
    locale: 'en_US',
  },
  skipLink: 'Skip to content',
  nav: {
    ariaLabel: 'Main',
    sections: [
      { id: 'sobre', label: 'About' },
      { id: 'stack', label: 'Stack' },
      { id: 'carreira', label: 'Career' },
      { id: 'projetos', label: 'Projects' },
      { id: 'formacao', label: 'Education' },
      { id: 'contato', label: 'Contact' },
    ],
    switchLabel: 'PT',
    switchAria: 'Ver em português',
    menuLabel: 'Open menu',
  },
  hero: {
    role: 'Full Stack Developer',
    valueProp:
      '4+ years building web systems with Java/Spring and Angular. Available for remote work and on-site in Greater Vitória.',
    portraitAlt: 'Portrait of Tarcisio Feletti',
    ctaMail: 'Get in touch',
    highlights: [
      { value: '+4', label: 'years of experience' },
      { value: '04', label: 'industries served' },
      { value: '04', label: 'systems delivered' },
    ],
  },
  about: {
    kicker: 'About',
    title: { lead: 'Technical ownership,', highlight: 'back to front.' },
    paragraphs: [
      "Over my career I've taken on increasing autonomy: I've been the lead front-end developer on a product, made architecture decisions, and run releases and deliveries. At one project stage I was the only developer, answering for everything from database to deploy.",
      'On the back end, I build REST APIs in Spring Boot with tests from the start (TDD) and clean code. I have also set up CI/CD pipelines and used Docker and AWS in deliveries.',
    ],
    stats: [
      { value: '+4', label: 'years building web applications' },
      { value: '04', label: 'industries: healthcare, steel, HR, legal' },
      { value: '04', label: 'systems delivered for corporate clients' },
    ],
  },
  stack: {
    kicker: 'Stack',
    title: { lead: 'Everyday', highlight: 'tools.' },
    note: 'The tools I work with daily, roughly in order of closeness.',
    groups: [
      {
        title: 'Back end',
        items: [
          'Java',
          'Spring Framework',
          'Spring Boot',
          'Spring MVC',
          'Spring Data',
          'Hibernate',
          'JPA',
          'REST APIs',
          'TDD',
          'OOP',
        ],
      },
      {
        title: 'Front end',
        items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Angular Material'],
      },
      { title: 'Data', items: ['SQL', 'data modelling'] },
      { title: 'Infra & delivery', items: ['Docker', 'CI/CD (pipelines)', 'AWS'] },
      {
        title: 'Tools & practices',
        items: ['Git', 'GitHub', 'clean code', 'automated testing', 'agile methodologies'],
      },
      { title: 'Languages', items: ['English (advanced)', 'Portuguese (native)'] },
    ],
  },
  experience: {
    kicker: 'Career',
    title: { lead: 'Professional', highlight: 'experience.' },
    jobs: [
      {
        role: 'Software Developer',
        org: 'Optsolv',
        place: 'Vila Velha, ES',
        period: '05/2024 — 09/2026',
        summary:
          'Systems for corporate clients, with technical ownership of the Angular front end and back-end work in Java and Spring Boot.',
        tech: ['Java', 'Spring', 'Angular', 'TypeScript', 'SQL'],
        highlights: [
          'Lead front-end developer (Angular) on the WeDo / Comunify platform, answering for nearly all front-end technical decisions, and also shipped back-end features in Java and Spring Boot, with REST APIs and TDD.',
          'Migrated an ArcelorMittal internal system from desktop (WPF/.NET) to a modern web application.',
        ],
      },
      {
        role: 'Full Stack Developer',
        org: 'Itix',
        place: 'Espírito Santo, Brazil',
        period: '01/2023 — 05/2024',
        summary:
          "Full stack web application development for the company's clients, taking part in technical decisions and releases.",
        tech: ['Java', 'Spring', 'Angular', 'TypeScript', 'SQL'],
        highlights: [
          'Unimed Goiânia appointment scheduling system, from database to interface — at one stage, as the only developer.',
          'Case and operations system for Risch Law Firm, built as the Angular + Spring developer.',
        ],
      },
      {
        role: 'Intern',
        org: 'Itix',
        place: 'Alegre, ES',
        period: '07/2022 — 01/2023',
        summary:
          'My first professional experience in software development, supporting the team with development tasks and fixes, applying Java, Spring and Angular in practice.',
        tech: ['Java', 'Spring', 'Angular'],
        highlights: [],
      },
    ],
  },
  projects: {
    kicker: 'Projects',
    title: { lead: 'Systems I', highlight: 'helped build.' },
    linkLabel: 'View project',
    items: [
      {
        name: 'ArcelorMittal',
        meta: 'Steel industry · Optsolv',
        body: 'An internal system, formerly desktop (WPF/.NET), rebuilt as a web application. Legacy migration to Angular, using AI-assisted development to speed up modernisation while keeping code quality.',
        tech: ['Angular', 'TypeScript', 'Spring'],
      },
      {
        name: 'WeDo / Comunify',
        meta: 'HR & engagement · Optsolv',
        body: 'HR and engagement platform: internal posts, gamification and brand-partner integrations. I was the lead Angular front-end developer and built REST APIs in Spring Boot with TDD.',
        tech: ['Angular', 'Spring Boot', 'TDD'],
      },
      {
        name: 'Unimed Goiânia',
        meta: 'Healthcare · Itix',
        body: 'Medical appointment scheduling for a healthcare provider, from database to interface. At one project stage I was the only developer, owning technical decisions and releases.',
        tech: ['Angular', 'Spring', 'SQL'],
      },
      {
        name: 'Risch Law Firm',
        meta: 'Legal · Itix',
        body: 'Case and operations management for an immigration law firm, built end to end as the Angular + Spring developer.',
        tech: ['Angular', 'Spring', 'SQL'],
      },
      {
        name: 'This portfolio',
        meta: 'Open source',
        body: 'Bilingual static site in Angular 22, prerendered and deployed to GitHub Pages with GitHub Actions.',
        tech: ['Angular 22', 'SSG', 'GitHub Pages'],
        link: 'https://github.com/TarcisioFeletti/portifolio',
      },
    ],
  },
  education: {
    kicker: 'Education',
    title: { lead: 'Academic', highlight: 'background.' },
    degree: {
      label: "Bachelor's degree",
      period: '2018 — 2023',
      course: 'Information Systems',
      school: 'UFES — Federal University of Espírito Santo',
    },
    research: {
      kicker: 'Undergraduate research · UFES, 2021–2022',
      body: 'Clustering Search metaheuristic applied to the routing problem in forest inventory planning.',
    },
    technical: {
      label: 'Technical diploma',
      course: 'Computing — CEEFMTI Bráulio Franco',
      period: '2015 — 2017',
    },
    certKicker: 'Certifications',
    certs: ['AWS Academy Cloud Foundations', 'CCNA: Introduction to Networks'],
  },
  contact: {
    kicker: 'Contact',
    title: { lead: "Let's", highlight: 'talk.' },
    emailLabel: 'E-mail',
    profilesLabel: 'Profiles',
    locationLabel: 'Based in',
    location:
      'Muniz Freire, ES, Brazil. Available for remote — open to hybrid or on-site in Greater Vitória.',
    footerRole: 'Full Stack Developer',
    sourceLabel: 'Source of this site',
  },
};
