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
      { id: 'experiencia', label: 'Experience' },
      { id: 'projetos', label: 'Work' },
      { id: 'contato', label: 'Contact' },
    ],
    switchLabel: 'PT',
    switchAria: 'Ver em português',
  },
  hero: {
    role: 'Full Stack Developer',
    valueProp:
      '4+ years building web systems with Java/Spring and Angular. Available for remote work and on-site in Greater Vitória.',
    portraitAlt: 'Portrait of Tarcisio Feletti',
    ctaMail: 'Get in touch',
  },
  about: {
    kicker: 'About me',
    title: 'Technical ownership, back to front',
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
    title: 'Stack & skills',
    note: 'The tools I work with daily, roughly in order of closeness.',
    skills: [
      'Angular',
      'TypeScript',
      'Java',
      'Spring Boot',
      'SQL',
      'Hibernate / JPA',
      'REST API',
      'TDD',
      'Docker',
      'CI/CD',
      'AWS',
      'Git',
    ],
    groups: [
      {
        title: 'Back end',
        items:
          'Java, Spring Framework, Spring Boot, Spring MVC, Spring Data, Hibernate, JPA, REST APIs, TDD, OOP',
      },
      {
        title: 'Front end',
        items: 'Angular, TypeScript, JavaScript, HTML5, CSS, Angular Material',
      },
      { title: 'Data', items: 'SQL, data modelling' },
      { title: 'Infra & delivery', items: 'Docker, CI/CD (pipelines), AWS' },
      {
        title: 'Tools & practices',
        items: 'Git, GitHub, clean code, automated testing, agile methodologies',
      },
      { title: 'Languages', items: 'English (advanced), Portuguese (native)' },
    ],
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        role: 'Software Developer',
        org: 'Optsolv',
        place: 'Vila Velha, ES',
        period: '05/2024 — 09/2026',
        stack: 'Java · Spring · Angular · TypeScript · SQL',
        summary:
          'Systems for corporate clients, with technical ownership of the front end and back-end work in Java and Spring Boot.',
        highlights: [
          'ArcelorMittal — migrated a legacy internal WPF (.NET) system to a modern Angular web application, using AI-assisted development to speed up modernisation while keeping code quality.',
          'WeDo / Comunify — lead front-end developer (Angular), answering for nearly all front-end technical decisions. On the Java and Spring Boot back end, built REST APIs with TDD and automated tests.',
        ],
      },
      {
        role: 'Full Stack Developer',
        org: 'Itix',
        place: 'Espírito Santo, Brazil',
        period: '01/2023 — 05/2024',
        stack: 'Java · Spring · Angular · TypeScript · SQL',
        summary:
          "Full stack web application development for the company's clients, taking part in technical decisions and releases.",
        highlights: [
          'Unimed Goiânia (healthcare) — built a medical appointment scheduling system end to end in Angular and Spring. At one project stage I was the only developer, owning the technical decisions and the releases.',
          "Risch Law Firm (legal/immigration) — as the Angular + Spring developer, built the firm's entire case and operations management system.",
        ],
      },
      {
        role: 'Intern',
        org: 'Itix',
        place: 'Alegre, ES',
        period: '07/2022 — 01/2023',
        stack: 'Java · Spring · Angular',
        summary:
          'My first professional experience in software development, supporting the team with development tasks and fixes, applying Java, Spring and Angular in practice.',
        highlights: [],
      },
    ],
  },
  projects: {
    title: 'Selected work',
    note: 'Systems for corporate clients. Code and screens are not public.',
    cta: 'Visit my GitHub',
    takeLabel: 'take 01',
    items: [
      {
        sector: 'Steel industry',
        name: 'ArcelorMittal',
        body: 'An internal system, formerly desktop (WPF/.NET), rebuilt as a web application.',
        stack: 'Angular · TypeScript · Spring',
      },
      {
        sector: 'HR & engagement',
        name: 'WeDo / Comunify',
        body: 'HR and employee-engagement platform: internal posts, gamification and brand-partner integrations.',
        stack: 'Angular · Spring Boot · TDD',
      },
      {
        sector: 'Healthcare',
        name: 'Unimed Goiânia',
        body: 'Medical appointment scheduling for a healthcare provider, from database to interface.',
        stack: 'Angular · Spring · SQL',
      },
      {
        sector: 'Legal',
        name: 'Risch Law Firm',
        body: 'Case and operations management for an immigration law firm.',
        stack: 'Angular · Spring · SQL',
      },
    ],
  },
  education: {
    kicker: 'Education',
    title: 'Academic background',
    items: [
      {
        course: 'BSc in Information Systems',
        school: 'UFES — Federal University of Espírito Santo',
        period: '2018 — 2023',
      },
      {
        course: 'Technical Diploma in Computing',
        school: 'CEEFMTI Bráulio Franco',
        period: '2015 — 2017',
      },
    ],
    certKicker: 'Certifications',
    certs: ['AWS Academy Cloud Foundations', 'CCNA: Introduction to Networks'],
    research: {
      kicker: 'Undergraduate research · UFES, 2021–2022',
      body: 'Clustering Search metaheuristic applied to the routing problem in forest inventory planning.',
    },
  },
  contact: {
    kicker: 'Contact',
    title: "Let's talk",
    emailLabel: 'E-mail',
    profilesLabel: 'Profiles',
    locationLabel: 'Based in',
    location:
      'Muniz Freire, ES, Brazil. Available for remote — open to hybrid or on-site in Greater Vitória.',
    footerRole: 'Full Stack Developer',
  },
};
