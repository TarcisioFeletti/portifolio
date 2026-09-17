import { SiteContent } from './content.model';

export const CONTENT_PT: SiteContent = {
  lang: 'pt',
  htmlLang: 'pt-BR',
  meta: {
    title: 'Tarcisio Feletti — Desenvolvedor Full Stack',
    description:
      'Desenvolvedor Full Stack com mais de 4 anos em Java, Spring, Angular e TypeScript. Projetos para saúde, indústria, RH e jurídico. Disponível para remoto.',
    locale: 'pt_BR',
  },
  skipLink: 'Pular para o conteúdo',
  nav: {
    ariaLabel: 'Principal',
    sections: [
      { id: 'sobre', label: 'Sobre' },
      { id: 'stack', label: 'Stack' },
      { id: 'carreira', label: 'Carreira' },
      { id: 'projetos', label: 'Projetos' },
      { id: 'formacao', label: 'Formação' },
      { id: 'contato', label: 'Contato' },
    ],
    switchLabel: 'EN',
    switchAria: 'View in English',
    menuLabel: 'Abrir menu',
  },
  hero: {
    role: 'Desenvolvedor Full Stack',
    valueProp:
      'Mais de 4 anos construindo sistemas web com Java/Spring e Angular. Disponível para remoto e presencial na Grande Vitória.',
    portraitAlt: 'Retrato de Tarcisio Feletti',
    ctaMail: 'Falar comigo',
    ctaCv: 'Baixar CV',
    highlights: [
      { value: '+4', label: 'anos de experiência' },
      { value: '04', label: 'setores atendidos' },
      { value: '04', label: 'sistemas entregues' },
    ],
  },
  about: {
    kicker: 'Sobre',
    title: { lead: 'Autonomia técnica,', highlight: 'do back ao front.' },
    paragraphs: [
      'Ao longo da carreira fui assumindo cada vez mais autonomia: já fui responsável principal pelo front-end de um produto, tomei decisões de arquitetura e conduzi publicações e entregas. Em uma fase de projeto atuei como único desenvolvedor, respondendo por tudo — do banco ao deploy.',
      'No back-end, construo APIs REST em Spring Boot com testes desde o início (TDD) e código limpo. Também já montei pipelines de CI/CD e usei Docker e AWS nas entregas.',
    ],
    stats: [
      { value: '+4', label: 'anos construindo aplicações web' },
      { value: '04', label: 'setores: saúde, indústria, RH e jurídico' },
      { value: '04', label: 'sistemas entregues a clientes corporativos' },
    ],
  },
  stack: {
    kicker: 'Stack',
    title: { lead: 'Ferramentas do', highlight: 'dia a dia.' },
    note: 'As ferramentas que uso no dia a dia, em ordem de proximidade.',
    groups: [
      {
        title: 'Back-end',
        items: [
          'Java',
          'Spring Framework',
          'Spring Boot',
          'Spring MVC',
          'Spring Data',
          'Hibernate',
          'JPA',
          'API REST',
          'TDD',
          'POO',
        ],
      },
      {
        title: 'Front-end',
        items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Angular Material'],
      },
      { title: 'Dados', items: ['SQL', 'modelagem de dados'] },
      { title: 'Infra e entrega', items: ['Docker', 'CI/CD (pipelines)', 'AWS'] },
      {
        title: 'Ferramentas e práticas',
        items: ['Git', 'GitHub', 'clean code', 'testes automatizados', 'metodologias ágeis'],
      },
      { title: 'Idiomas', items: ['Inglês (avançado)', 'Português (nativo)'] },
    ],
  },
  experience: {
    kicker: 'Carreira',
    title: { lead: 'Experiência', highlight: 'profissional.' },
    jobs: [
      {
        role: 'Desenvolvedor de Software',
        org: 'Optsolv',
        place: 'Vila Velha, ES',
        period: '05/2024 — 09/2026',
        summary:
          'Desenvolvimento de sistemas para clientes corporativos, com responsabilidade técnica sobre o front-end em Angular e contribuição no back-end em Java e Spring Boot.',
        tech: ['Java', 'Spring', 'Angular', 'TypeScript', 'SQL'],
        highlights: [
          'Responsável principal pelo front-end em Angular da plataforma WeDo / Comunify, respondendo por praticamente todas as decisões técnicas do front, e também contribuí com features no back-end em Java e Spring Boot, com APIs REST e TDD.',
          'Migração de um sistema interno da ArcelorMittal de desktop (WPF/.NET) para aplicação web moderna.',
        ],
      },
      {
        role: 'Desenvolvedor Full Stack',
        org: 'Itix',
        place: 'Espírito Santo, Brasil',
        period: '01/2023 — 05/2024',
        summary:
          'Desenvolvimento de aplicações web full stack para clientes da empresa, com participação em decisões técnicas e nas publicações.',
        tech: ['Java', 'Spring', 'Angular', 'TypeScript', 'SQL'],
        highlights: [
          'Sistema de agendamento de consultas da Unimed Goiânia, do banco de dados à interface — em uma fase, como único desenvolvedor.',
          'Sistema de processos e operações do Risch Law Firm, desenvolvido como dev Angular + Spring.',
        ],
      },
      {
        role: 'Estagiário',
        org: 'Itix',
        place: 'Alegre, ES',
        period: '07/2022 — 01/2023',
        summary:
          'Primeiro contato profissional com desenvolvimento de software, apoiando o time em tarefas de desenvolvimento e correções, com aplicação prática de Java, Spring e Angular.',
        tech: ['Java', 'Spring', 'Angular'],
        highlights: [],
      },
    ],
  },
  projects: {
    kicker: 'Projetos',
    title: { lead: 'Sistemas que', highlight: 'entrei para construir.' },
    linkLabel: 'Ver projeto',
    items: [
      {
        name: 'ArcelorMittal',
        meta: 'Indústria · Optsolv',
        body: 'Sistema interno antes em desktop (WPF/.NET), reconstruído como aplicação web. Migração do legado para Angular, com desenvolvimento assistido por IA para acelerar a modernização mantendo a qualidade do código.',
        tech: ['Angular', 'TypeScript', 'Spring'],
      },
      {
        name: 'WeDo / Comunify',
        meta: 'RH & engajamento · Optsolv',
        body: 'Plataforma de RH e engajamento: posts internos, gamificação e integrações com parceiros da marca. Fui responsável principal pelo front-end em Angular e construí APIs REST em Spring Boot com TDD.',
        tech: ['Angular', 'Spring Boot', 'TDD'],
      },
      {
        name: 'Unimed Goiânia',
        meta: 'Saúde · Itix',
        body: 'Agendamento de consultas médicas para uma operadora de saúde, do banco à interface. Em uma fase do projeto atuei como único desenvolvedor, assumindo decisões técnicas e publicações.',
        tech: ['Angular', 'Spring', 'SQL'],
      },
      {
        name: 'Risch Law Firm',
        meta: 'Jurídico · Itix',
        body: 'Organização de processos e operações de um escritório de advocacia de imigração, desenvolvida de ponta a ponta como dev Angular + Spring.',
        tech: ['Angular', 'Spring', 'SQL'],
      },
      {
        name: 'Este portfólio',
        meta: 'Open source',
        body: 'Site bilíngue estático em Angular 22, pré-renderizado e publicado no GitHub Pages via GitHub Actions.',
        tech: ['Angular 22', 'SSG', 'GitHub Pages'],
        link: 'https://github.com/TarcisioFeletti/portifolio',
      },
    ],
  },
  education: {
    kicker: 'Formação',
    title: { lead: 'Base', highlight: 'acadêmica.' },
    degree: {
      label: 'Bacharelado',
      period: '2018 — 2023',
      course: 'Sistemas de Informação',
      school: 'UFES — Universidade Federal do Espírito Santo',
    },
    research: {
      kicker: 'Iniciação científica · UFES, 2021–2022',
      body: 'Meta-heurística Clustering Search aplicada ao problema de roteamento no planejamento de inventário florestal.',
    },
    technical: {
      label: 'Ensino técnico',
      course: 'Informática — CEEFMTI Bráulio Franco',
      period: '2015 — 2017',
    },
    certKicker: 'Certificações',
    certs: ['AWS Academy Cloud Foundations', 'CCNA: Introduction to Networks'],
  },
  contact: {
    kicker: 'Contato',
    title: { lead: 'Vamos', highlight: 'conversar.' },
    emailLabel: 'E-mail',
    profilesLabel: 'Redes',
    locationLabel: 'Onde estou',
    location:
      'Muniz Freire, ES. Disponível para remoto — aberto a híbrido ou presencial na Grande Vitória.',
    ctaCv: 'Baixar CV',
    footerRole: 'Desenvolvedor Full Stack',
    sourceLabel: 'Código deste site',
  },
};
