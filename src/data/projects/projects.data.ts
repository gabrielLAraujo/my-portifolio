import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'next-report',
    title: 'NextReport',
    description:
      'Gerador de relatórios avançado com templates HTML personalizáveis, suporte a Handlebars e exportação para PDF/Excel. Permite criar relatórios dinâmicos com formatação de dados, cálculos automáticos e visualização em tempo real.',
    longDescription:
      'Sistema completo de geração de relatórios com arquitetura escalável, suporte a múltiplos formatos de exportação e templates customizáveis usando Handlebars.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Handlebars', 'PDF Generation'],
    links: {
      github: 'https://github.com/gabrielLAraujo/next-report',
      live: 'https://next-report-lime.vercel.app/',
    },
    featured: true,
    status: 'active',
    githubUrl: 'https://github.com/gabrielLAraujo/next-report',
    liveUrl: 'https://next-report-lime.vercel.app/',
  },
  {
    id: 'dev-logger',
    title: 'Dev Logger',
    description:
      'Sistema completo para registro e acompanhamento de commits e projetos de desenvolvimento. Oferece dashboard interativo, métricas de produtividade, integração com GitHub API e relatórios detalhados de atividade de desenvolvimento.',
    longDescription:
      'Plataforma de monitoramento de desenvolvimento com integração GitHub, analytics de commits, visualizações de produtividade e relatórios detalhados.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GitHub API', 'Chart.js'],
    links: {
      github: 'https://github.com/gabrielLAraujo/dev-logger',
      live: 'https://dev-logger.vercel.app',
    },
    featured: true,
    status: 'active',
    githubUrl: 'https://github.com/gabrielLAraujo/dev-logger',
    liveUrl: 'https://dev-logger.vercel.app',
  },
  {
    id: 'pokedex',
    title: 'Pokedex',
    description:
      'Aplicação interativa de Pokédex com design moderno e responsivo. Inclui busca avançada, filtros por tipo e geração, visualização detalhada de cada Pokémon com stats, evoluções e informações completas usando a PokeAPI.',
    longDescription:
      'Pokédex moderna com busca avançada, filtros inteligentes, visualização detalhada de stats, evoluções e informações completas de cada Pokémon.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PokeAPI', 'Framer Motion'],
    links: {
      github: 'https://github.com/gabrielLAraujo/pokedex',
      live: 'https://pokedex-henna-rho.vercel.app/',
    },
    featured: false,
    status: 'active',
    githubUrl: 'https://github.com/gabrielLAraujo/pokedex',
    liveUrl: 'https://pokedex-henna-rho.vercel.app/',
  },
  {
    id: 'sample-dashboard',
    title: 'Sample Dashboard',
    description:
      'Dashboard moderno e responsivo construído com TypeScript, oferecendo visualizações de dados interativas, gráficos em tempo real e interface intuitiva para análise de métricas.',
    longDescription:
      'Dashboard completo com múltiplas visualizações de dados, gráficos interativos, filtros avançados e design responsivo para análise de métricas em tempo real.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Chart.js'],
    links: {
      github: 'https://github.com/gabrielLAraujo/saple-dashboard',
      live: 'https://dist-theta-fawn.vercel.app/',
    },
    featured: true,
    status: 'active',
    githubUrl: 'https://github.com/gabrielLAraujo/saple-dashboard',
    liveUrl: 'https://dist-theta-fawn.vercel.app/',
  },
  {
    id: 'evera-livro-landing',
    title: 'Evera Livro Landing',
    description:
      'Landing page moderna e otimizada para conversão de ebook, desenvolvida com foco em performance e experiência do usuário. Design responsivo, multi-idioma (PT/EN/ES) e otimizado para SEO.',
    longDescription:
      'Landing page profissional para ebook com animações suaves, formulários otimizados, seção de depoimentos, timer de oferta, integração com analytics e design focado em conversão e engajamento do usuário.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: {
      github: 'https://github.com/gabrielLAraujo/evera-livro-landing',
      live: 'https://magenta-cajeta-0629ae.netlify.app/',
    },
    featured: false,
    status: 'active',
    githubUrl: 'https://github.com/gabrielLAraujo/evera-livro-landing',
    liveUrl: 'https://magenta-cajeta-0629ae.netlify.app/',
  },
  {
    id: 'crypto-dashboard',
    title: 'Crypto Dashboard',
    description:
      'Dashboard de criptomoedas com acompanhamento de preços em tempo real, gráficos de mercado, análise de tendências e portfolio tracking. Interface moderna e intuitiva.',
    longDescription:
      'Plataforma completa para monitoramento de criptomoedas com atualizações em tempo real, gráficos interativos, histórico de preços, análise técnica e gerenciamento de portfolio.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Chart.js', 'WebSocket'],
    links: {
      github: 'https://github.com/gabrielLAraujo/crypto-dashboard',
      live: 'https://crypto-dashboard-cyan.vercel.app/',
    },
    featured: true,
    status: 'active',
    githubUrl: 'https://github.com/gabrielLAraujo/crypto-dashboard',
    liveUrl: 'https://crypto-dashboard-cyan.vercel.app/',
  },
  {
    id: 'espaco-desenvolver-viver',
    title: 'Espaço Desenvolver & Viver',
    description:
      'Site institucional para espaço de psicoterapia com design acolhedor e profissional. Apresenta informações sobre o espaço, equipe multidisciplinar, infraestrutura e formulário de contato integrado com WhatsApp.',
    longDescription:
      'Plataforma web completa para espaço de psicoterapia com seções sobre proposta, equipe profissional, infraestrutura dos consultórios, localização e sistema de agendamento via WhatsApp. Design responsivo e otimizado para conversão.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: {
      live: 'https://web-tan-omega-79.vercel.app/',
    },
    featured: true,
    status: 'active',
    liveUrl: 'https://web-tan-omega-79.vercel.app/',
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getOtherProjects = (): Project[] => {
  return projects.filter((project) => !project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
