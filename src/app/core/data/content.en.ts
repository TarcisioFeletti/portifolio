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
  hud: {
    rec: 'Rec · open to opportunities',
    frame: 'Portfolio · Full Stack Developer',
    meta: 'Espírito Santo, BR · 2026',
    tags: ['Exp 04+ years', 'Stack java/spring · angular', 'Remote mode'],
    take: 'Take 01',
  },
  hero: {
    line1: 'Full Stack',
    line2: 'Developer',
    paragraphs: [
      'I build web applications end to end: Java and Spring on the server, Angular and TypeScript on the interface. Over four years delivering systems for corporate clients.',
      'I like owning the whole problem — from the data model to the detail of the screen someone uses every day. Based in Espírito Santo, Brazil, available for remote work.',
    ],
    ctaMail: 'Get in touch',
  },
  plate: {
    left: 'Scene 01 — portrait',
    right: 'Iso 400 · f/2.8 · 1/250',
    focus: '▲ focus locked — full stack',
    portraitAlt: 'Black and white portrait of Tarcisio Feletti',
    stickers: [
      { title: 'Full Stack', subtitle: 'Back end + front end in one delivery' },
      { title: 'Angular', subtitle: 'TypeScript' },
      { title: 'Java & Spring', subtitle: 'REST APIs' },
      { title: 'Front-end lead', subtitle: 'Technical decisions' },
      { title: 'SQL & Data', subtitle: "©'26" },
      { title: 'AI-assisted dev' },
    ],
  },
  strip: {
    logoLabel: 'Logotype',
    logoSub: 'Tarcisio Feletti · dev 2026',
    readouts: [
      { label: 'Back end', value: 'Java · Spring' },
      { label: 'Front end', value: 'Angular · TS' },
      { label: 'Data', value: 'SQL · JPA' },
      { label: 'Education', value: 'UFES · IS' },
    ],
    modeLabel: 'Recording mode',
    modeTags: ['Full Stack', 'Angular', 'Spring', 'SQL'],
    modeFooter: ['End-to-end delivery', '25 fps'],
  },
  about: {
    reel: 'Reel 01 — who I am',
    marquee: 'about me · about me · about me · about me · ',
    kicker: 'About me',
    title: 'Technical ownership, back to front',
    paragraphs: [
      "I'm a full stack developer with over four years of experience. I work mainly with Java and Spring on the back end and Angular with TypeScript on the front end, delivering complete systems for clients in very different industries — healthcare, steel, HR and legal.",
      "Over my career I've taken on increasing autonomy: I've been the lead front-end developer on a product, made architecture decisions, and run releases and deliveries. At one project stage I was the only developer, answering for everything from database to deploy.",
      'I also fold AI-assisted development into my workflow to gain productivity without giving up code quality. I hold a degree in Information Systems from UFES, with a solid foundation in software architecture, databases and programming logic.',
    ],
    stats: [
      { value: '+4', label: 'years building web applications', accent: 'teal' },
      { value: '04', label: 'industries: healthcare, steel, HR, legal', accent: 'yellow' },
      { value: '06', label: 'products delivered for corporate clients', accent: 'orange' },
      { value: '02', label: 'certifications (AWS and Cisco)', accent: 'pink' },
    ],
  },
  stack: {
    reel: 'Reel 02 — tooling',
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
      'Git',
      'Angular Material',
      'Spring Data',
      'POO / OOP',
      'AI-assisted dev',
    ],
    groups: [
      {
        title: 'Back end',
        items:
          'Java, Spring Framework, Spring Boot, Spring MVC, Spring Data, Hibernate, JPA, REST APIs, OOP',
      },
      {
        title: 'Front end',
        items: 'Angular, TypeScript, JavaScript, HTML5, CSS, Angular Material',
      },
      { title: 'Data', items: 'SQL, data modelling' },
      {
        title: 'Tools & practices',
        items:
          'Git, GitHub, AI-assisted development, agile methodologies, problem analysis and solving',
      },
      { title: 'Languages', items: 'English (advanced), Portuguese (native)' },
    ],
  },
  experience: {
    reel: 'Reel 03 — track record',
    title: 'Experience',
    jobs: [
      {
        role: 'Software Developer',
        org: 'Optsolv',
        place: 'Vila Velha, ES',
        period: '05/2024 — 09/2026',
        stack: 'Java · Spring · Angular · TypeScript · SQL',
        summary:
          'Full stack work on systems for corporate clients, with technical ownership of the front end on the products I worked on.',
        highlights: [
          'ArcelorMittal — migrated a legacy internal WPF (.NET) system to a modern Angular web application, using AI-assisted development to speed up modernisation while keeping code quality.',
          'WeDo / Comunify — lead front-end developer (Angular) on an HR and employee-engagement platform: internal posts, gamification and brand-partner integrations, answering for nearly all front-end technical decisions.',
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
    reel: 'Reel 04 — deliveries',
    title: 'Selected work',
    note: 'Systems delivered on client projects. Details available under NDA.',
    cta: 'Visit my GitHub',
    takeLabel: 'take 01',
    items: [
      {
        sector: 'Steel industry',
        name: 'ArcelorMittal',
        body: 'Migration of a legacy internal WPF (.NET) system to an Angular web application, with AI-assisted development supporting the modernisation.',
        stack: 'Angular · TypeScript · Spring',
      },
      {
        sector: 'HR & engagement',
        name: 'WeDo / Comunify',
        body: 'Front end of an HR platform: internal posts, gamification and brand-partner integrations. I was the lead front-end developer.',
        stack: 'Angular · TypeScript',
      },
      {
        sector: 'Healthcare',
        name: 'Unimed Goiânia',
        body: 'Appointment scheduling system built end to end. At one project stage, as the only developer.',
        stack: 'Angular · Spring · SQL',
      },
      {
        sector: 'Legal',
        name: 'Risch Law Firm',
        body: 'Case and operations management system for an immigration law firm, built in Angular and Spring.',
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
    reel: 'End of reel — contact',
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
