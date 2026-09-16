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
  hud: {
    rec: 'Rec · disponível para propostas',
    frame: 'Portfólio · Desenvolvedor Full Stack',
    meta: 'Muniz Freire — ES, BR · 2026',
    tags: ['Exp 04+ anos', 'Stack java/spring · angular', 'Modo remoto'],
    take: 'Take 01',
  },
  hero: {
    line1: 'Desenvolvedor',
    line2: 'Full Stack',
    paragraphs: [
      'Construo aplicações web de ponta a ponta: Java e Spring no servidor, Angular e TypeScript na interface. Mais de quatro anos entregando sistemas para clientes corporativos.',
      'Gosto de assumir o problema inteiro — da modelagem do banco ao detalhe da tela que alguém usa todos os dias. Hoje em Muniz Freire (ES), disponível para remoto.',
    ],
    ctaMail: 'Falar comigo',
    ctaCv: 'Baixar CV',
  },
  plate: {
    left: 'Cena 01 — retrato',
    right: 'Iso 400 · f/2.8 · 1/250',
    focus: '▲ foco travado — full stack',
    portraitAlt: 'Retrato de Tarcisio Feletti em preto e branco',
    stickers: [
      { title: 'Full Stack', subtitle: 'Back-end + front-end na mesma entrega' },
      { title: 'Angular', subtitle: 'TypeScript' },
      { title: 'Java & Spring', subtitle: 'API REST' },
      { title: 'Front-end lead', subtitle: 'Decisões técnicas' },
      { title: 'SQL & Dados', subtitle: "©'26" },
      { title: 'Dev assistido por IA' },
    ],
  },
  strip: {
    logoLabel: 'Logotipo',
    logoSub: 'Tarcisio Feletti · dev 2026',
    readouts: [
      { label: 'Back-end', value: 'Java · Spring' },
      { label: 'Front-end', value: 'Angular · TS' },
      { label: 'Dados', value: 'SQL · JPA' },
      { label: 'Formação', value: 'UFES · SI' },
    ],
    modeLabel: 'Modo de gravação',
    modeTags: ['Full Stack', 'Angular', 'Spring', 'SQL'],
    modeFooter: ['Entrega ponta a ponta', '25 fps'],
  },
  about: {
    reel: 'Rolo 01 — quem eu sou',
    marquee: 'sobre mim · sobre mim · sobre mim · sobre mim · ',
    kicker: 'Sobre mim',
    title: 'Autonomia técnica, do back ao front',
    paragraphs: [
      'Sou desenvolvedor full stack com mais de quatro anos de experiência. Trabalho principalmente com Java e Spring no back-end e Angular com TypeScript no front-end, entregando sistemas completos para clientes de setores bem diferentes entre si — saúde, indústria, RH e jurídico.',
      'Ao longo da carreira fui assumindo cada vez mais autonomia: já fui responsável principal pelo front-end de um produto, tomei decisões de arquitetura e conduzi publicações e entregas. Em uma fase de projeto atuei como único desenvolvedor, respondendo por tudo — do banco ao deploy.',
      'Também incorporo desenvolvimento assistido por IA ao meu fluxo de trabalho, para ganhar produtividade sem abrir mão da qualidade do código. Formado em Sistemas de Informação pela UFES, com base sólida em arquitetura de software, banco de dados e lógica de programação.',
    ],
    stats: [
      { value: '+4', label: 'anos construindo aplicações web', accent: 'teal' },
      { value: '04', label: 'setores: saúde, indústria, RH e jurídico', accent: 'yellow' },
      { value: '06', label: 'produtos entregues a clientes corporativos', accent: 'orange' },
      { value: '02', label: 'certificações (AWS e Cisco)', accent: 'pink' },
    ],
  },
  stack: {
    reel: 'Rolo 02 — ferramentas',
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
      'Git',
      'Angular Material',
      'Spring Data',
      'POO / OOP',
      'AI-assisted dev',
    ],
    groups: [
      {
        title: 'Back-end',
        items:
          'Java, Spring Framework, Spring Boot, Spring MVC, Spring Data, Hibernate, JPA, API REST, POO',
      },
      {
        title: 'Front-end',
        items: 'Angular, TypeScript, JavaScript, HTML5, CSS, Angular Material',
      },
      { title: 'Dados', items: 'SQL, modelagem de dados' },
      {
        title: 'Ferramentas e práticas',
        items:
          'Git, GitHub, desenvolvimento assistido por IA, metodologias ágeis, análise e resolução de problemas',
      },
      { title: 'Idiomas', items: 'Inglês (avançado), Português (nativo)' },
    ],
  },
  experience: {
    reel: 'Rolo 03 — trajetória',
    title: 'Experiência',
    jobs: [
      {
        role: 'Desenvolvedor de Software',
        org: 'Optsolv',
        place: 'Vila Velha, ES',
        period: '05/2024 — 09/2026',
        stack: 'Java · Spring · Angular · TypeScript · SQL',
        summary:
          'Atuação full stack no desenvolvimento de sistemas para clientes corporativos, com responsabilidade técnica sobre o front-end dos produtos em que atuei.',
        highlights: [
          'ArcelorMittal — migração de um sistema interno legado em WPF (.NET) para uma aplicação web moderna em Angular, usando desenvolvimento assistido por IA para acelerar a modernização mantendo a qualidade do código.',
          'WeDo / Comunify — responsável principal pelo front-end em Angular da plataforma de RH e engajamento de colaboradores: posts internos, gamificação e integrações com parceiros da marca, respondendo por praticamente todas as decisões técnicas do front.',
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
    reel: 'Rolo 04 — entregas',
    title: 'Projetos em destaque',
    note: 'Sistemas entregues em projetos de clientes. Detalhes sob acordo de confidencialidade.',
    cta: 'Ver meu GitHub',
    takeLabel: 'take 01',
    items: [
      {
        sector: 'Indústria',
        name: 'ArcelorMittal',
        body: 'Migração de um sistema interno legado em WPF (.NET) para uma aplicação web em Angular, com desenvolvimento assistido por IA apoiando a modernização.',
        stack: 'Angular · TypeScript · Spring',
      },
      {
        sector: 'RH & engajamento',
        name: 'WeDo / Comunify',
        body: 'Front-end de uma plataforma de RH: posts internos, gamificação e integrações com parceiros da marca. Fui o responsável principal pelo front.',
        stack: 'Angular · TypeScript',
      },
      {
        sector: 'Saúde',
        name: 'Unimed Goiânia',
        body: 'Sistema de agendamento de consultas desenvolvido de ponta a ponta. Em uma fase do projeto, como único desenvolvedor.',
        stack: 'Angular · Spring · SQL',
      },
      {
        sector: 'Jurídico',
        name: 'Risch Law Firm',
        body: 'Sistema de organização de processos e operações de um escritório de imigração, desenvolvido em Angular e Spring.',
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
    reel: 'Fim do rolo — contato',
    kicker: 'Contato',
    title: 'Vamos conversar',
    emailLabel: 'E-mail',
    phoneLabel: 'Telefone',
    profilesLabel: 'Redes',
    locationLabel: 'Onde estou',
    location:
      'Muniz Freire, ES. Disponível para remoto — aberto a híbrido ou presencial na Grande Vitória.',
    footerRole: 'Desenvolvedor Full Stack',
  },
};
