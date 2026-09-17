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
      { id: 'experiencia', label: 'Experiência' },
      { id: 'projetos', label: 'Projetos' },
      { id: 'contato', label: 'Contato' },
    ],
    switchLabel: 'EN',
    switchAria: 'View in English',
  },
  hero: {
    line1: 'Desenvolvedor',
    line2: 'Full Stack',
    paragraphs: [
      'Construo aplicações web de ponta a ponta: Java e Spring no servidor, Angular e TypeScript na interface. Mais de quatro anos entregando sistemas para clientes corporativos.',
      'Gosto de assumir o problema inteiro — da modelagem do banco ao detalhe da tela que alguém usa todos os dias. Hoje em Muniz Freire (ES), disponível para remoto.',
    ],
    ctaMail: 'Falar comigo',
  },
  about: {
    kicker: 'Sobre mim',
    title: 'Autonomia técnica, do back ao front',
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
    title: 'Stack & competências',
    note: 'As ferramentas que uso no dia a dia, em ordem de proximidade.',
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
        title: 'Back-end',
        items:
          'Java, Spring Framework, Spring Boot, Spring MVC, Spring Data, Hibernate, JPA, API REST, TDD, POO',
      },
      {
        title: 'Front-end',
        items: 'Angular, TypeScript, JavaScript, HTML5, CSS, Angular Material',
      },
      { title: 'Dados', items: 'SQL, modelagem de dados' },
      { title: 'Infra e entrega', items: 'Docker, CI/CD (pipelines), AWS' },
      {
        title: 'Ferramentas e práticas',
        items: 'Git, GitHub, clean code, testes automatizados, metodologias ágeis',
      },
      { title: 'Idiomas', items: 'Inglês (avançado), Português (nativo)' },
    ],
  },
  experience: {
    title: 'Experiência',
    jobs: [
      {
        role: 'Desenvolvedor de Software',
        org: 'Optsolv',
        place: 'Vila Velha, ES',
        period: '05/2024 — 09/2026',
        stack: 'Java · Spring · Angular · TypeScript · SQL',
        summary:
          'Desenvolvimento de sistemas para clientes corporativos, com responsabilidade técnica sobre o front-end e contribuição no back-end em Java e Spring Boot.',
        highlights: [
          'ArcelorMittal — migração de um sistema interno legado em WPF (.NET) para uma aplicação web moderna em Angular, usando desenvolvimento assistido por IA para acelerar a modernização mantendo a qualidade do código.',
          'WeDo / Comunify — responsável principal pelo front-end em Angular, respondendo por praticamente todas as decisões técnicas do front. No back-end em Java e Spring Boot, construí APIs REST com TDD e testes automatizados.',
        ],
      },
      {
        role: 'Desenvolvedor Full Stack',
        org: 'Itix',
        place: 'Espírito Santo, Brasil',
        period: '01/2023 — 05/2024',
        stack: 'Java · Spring · Angular · TypeScript · SQL',
        summary:
          'Desenvolvimento de aplicações web full stack para clientes da empresa, com participação em decisões técnicas e nas publicações.',
        highlights: [
          'Unimed Goiânia (saúde) — desenvolvimento completo de um sistema de agendamento de consultas em Angular e Spring. Em uma fase do projeto atuei como único desenvolvedor, assumindo as decisões técnicas e a responsabilidade pelas publicações.',
          'Risch Law Firm (jurídico/imigração) — desenvolvimento, como dev Angular + Spring, de todo o sistema de organização de processos e operações do escritório.',
        ],
      },
      {
        role: 'Estagiário',
        org: 'Itix',
        place: 'Alegre, ES',
        period: '07/2022 — 01/2023',
        stack: 'Java · Spring · Angular',
        summary:
          'Primeiro contato profissional com desenvolvimento de software, apoiando o time em tarefas de desenvolvimento e correções, com aplicação prática de Java, Spring e Angular.',
        highlights: [],
      },
    ],
  },
  projects: {
    title: 'Projetos em destaque',
    note: 'Sistemas de clientes corporativos. Código e telas não são públicos.',
    cta: 'Ver meu GitHub',
    takeLabel: 'take 01',
    items: [
      {
        sector: 'Indústria',
        name: 'ArcelorMittal',
        body: 'Sistema interno, antes em desktop (WPF/.NET), reconstruído como aplicação web.',
        stack: 'Angular · TypeScript · Spring',
      },
      {
        sector: 'RH & engajamento',
        name: 'WeDo / Comunify',
        body: 'Plataforma de RH e engajamento de colaboradores: posts internos, gamificação e integrações com parceiros da marca.',
        stack: 'Angular · Spring Boot · TDD',
      },
      {
        sector: 'Saúde',
        name: 'Unimed Goiânia',
        body: 'Agendamento de consultas médicas para uma operadora de saúde, do banco de dados à interface.',
        stack: 'Angular · Spring · SQL',
      },
      {
        sector: 'Jurídico',
        name: 'Risch Law Firm',
        body: 'Organização de processos e operações de um escritório de advocacia de imigração.',
        stack: 'Angular · Spring · SQL',
      },
    ],
  },
  education: {
    kicker: 'Formação',
    title: 'Base acadêmica',
    items: [
      {
        course: 'Bacharelado em Sistemas de Informação',
        school: 'UFES — Universidade Federal do Espírito Santo',
        period: '2018 — 2023',
      },
      {
        course: 'Ensino Técnico em Informática',
        school: 'CEEFMTI Bráulio Franco',
        period: '2015 — 2017',
      },
    ],
    certKicker: 'Certificações',
    certs: ['AWS Academy Cloud Foundations', 'CCNA: Introduction to Networks'],
    research: {
      kicker: 'Iniciação científica · UFES, 2021–2022',
      body: 'Meta-heurística Clustering Search aplicada ao problema de roteamento no planejamento de inventário florestal.',
    },
  },
  contact: {
    kicker: 'Contato',
    title: 'Vamos conversar',
    emailLabel: 'E-mail',
    profilesLabel: 'Redes',
    locationLabel: 'Onde estou',
    location:
      'Muniz Freire, ES. Disponível para remoto — aberto a híbrido ou presencial na Grande Vitória.',
    footerRole: 'Desenvolvedor Full Stack',
  },
};
