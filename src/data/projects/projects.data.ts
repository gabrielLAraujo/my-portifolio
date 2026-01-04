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
