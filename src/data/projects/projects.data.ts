import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'garagem',
    title: 'Garagem — Histórico do Carro',
    description:
      'App full-stack para o histórico de manutenções e modificações de veículos: peças e custos, fotos e notas fiscais, lembretes por km ou tempo, catálogo FIPE e link público só leitura. .NET 10 com Clean Architecture, DDD e CQRS, React no front e 880 testes. Construído com agentes de IA a partir de spec e planos escritos por mim.',
    longDescription:
      'API em Minimal APIs com Result/ProblemDetails, eventos de domínio na mesma transação, concorrência otimista, FIPE como camada anticorrupção com cache e fallback, uploads seguros (tipo pelos bytes, EXIF removido) e link público por allowlist. Front em React + TypeScript com tipos gerados do OpenAPI. Deploy em imagem única via Coolify numa VPS, com HTTPS e migrations no start.',
    technologies: ['.NET 10', 'C#', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    links: {
      github: 'https://github.com/gabrielLAraujo/app-maintenance-history',
      live: 'https://garagem.frauchesgabriel.work/p/_xIUXlec5yU0sLf1Fg9z2JgkNnmfnXRUypBIuOfvoHE',
    },
    featured: true,
    status: 'active',
    githubUrl: 'https://github.com/gabrielLAraujo/app-maintenance-history',
    liveUrl: 'https://garagem.frauchesgabriel.work/p/_xIUXlec5yU0sLf1Fg9z2JgkNnmfnXRUypBIuOfvoHE',
  },
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
