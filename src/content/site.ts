import { contactInfo } from '@/config/contact';

export type Locale = 'pt' | 'en';

export interface ServiceItem {
  title: string;
  text: string;
  example?: string;
  price?: string;
  timeline?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CaseLink {
  label: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  tag: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  links: CaseLink[];
  note?: string;
  image?: { src: string; alt: string; width: number; height: number };
}

export interface SiteContent {
  locale: Locale;
  htmlLang: string;
  nav: { href: string; label: string }[];
  switchLanguage: { href: string; label: string; ariaLabel: string };
  themeToggle: string;
  openMenu: string;
  closeMenu: string;
  skipToContent: string;
  whatsappMessage: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    photoAlt: string;
    caption: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    exampleLabel: string;
    items: ServiceItem[];
    extras: string[];
    priceNote?: string;
  };
  cases: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: { problem: string; solution: string; result: string };
    items: CaseStudy[];
    othersTitle: string;
    others: { name: string; text: string; href: string }[];
  };
  process: { eyebrow: string; title: string; steps: { title: string; text: string }[] };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stackLabel: string;
    stack: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    whatsappCta: string;
    location: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      invalid: string;
    };
  };
  faq: { id: string; eyebrow: string; title: string; items: FaqItem[] };
  footer: { rights: string };
}

const year = new Date().getFullYear();

const garagemUrl =
  'https://garagem.frauchesgabriel.work/p/_xIUXlec5yU0sLf1Fg9z2JgkNnmfnXRUypBIuOfvoHE';

export const content: Record<Locale, SiteContent> = {
  pt: {
    locale: 'pt',
    htmlLang: 'pt-BR',
    nav: [
      { href: '#servicos', label: 'Serviços' },
      { href: '#cases', label: 'Cases' },
      { href: '#como-trabalho', label: 'Como trabalho' },
      { href: '#sobre', label: 'Sobre' },
      { href: '#contato', label: 'Contato' },
    ],
    switchLanguage: { href: '/en', label: 'EN', ariaLabel: 'English version' },
    themeToggle: 'Alternar tema claro e escuro',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    skipToContent: 'Pular para o conteúdo',
    whatsappMessage: 'Olá, Gabriel! Vi seu site e quero conversar sobre um projeto.',
    hero: {
      eyebrow: 'Desenvolvimento de software · São José, SC · atendimento remoto',
      title: 'Software sob medida para pequenas e médias empresas.',
      lead: 'Painéis de gestão, sistemas internos e integrações com maquininha, banco e nota fiscal. Mais de 8 anos desenvolvendo com .NET, React e PostgreSQL, hoje em sistemas do mercado financeiro.',
      primaryCta: 'Conversar no WhatsApp',
      secondaryCta: 'Ver cases',
      photoAlt: 'Foto de Gabriel Leite Araújo',
      caption: 'Gabriel Leite Araújo, desenvolvedor full stack',
    },
    services: {
      eyebrow: 'Serviços',
      title: 'O que eu construo',
      intro:
        'Projetos sob medida, do primeiro rascunho ao sistema rodando no seu servidor ou na nuvem.',
      exampleLabel: 'Exemplo',
      items: [
        {
          title: 'Painéis de gestão e financeiro',
          text: 'Vendas, despesas e fluxo de caixa de cada empresa em uma tela, com dados importados da maquininha em vez de digitados de novo.',
          example: 'Fechamento',
          price: 'A partir de R$ 6.000',
          timeline: '3 a 5 semanas',
        },
        {
          title: 'Sistemas internos sob medida',
          text: 'Cadastros, controle de processos e áreas do cliente, com login, níveis de acesso e link público quando fizer sentido.',
          example: 'Garagem',
          price: 'A partir de R$ 12.000',
          timeline: '6 a 10 semanas',
        },
        {
          title: 'Integrações e automação',
          text: 'Ligar sistemas que hoje não conversam: maquininha, banco, nota fiscal, WhatsApp e planilhas. Menos trabalho manual e menos erro de digitação.',
          price: 'A partir de R$ 2.500',
          timeline: '1 a 3 semanas',
        },
        {
          title: 'Sites institucionais',
          text: 'Site rápido, fácil de achar no Google e com contato direto pelo WhatsApp.',
          example: 'Espaço Desenvolver & Viver',
          price: 'Site a partir de R$ 2.500 · landing page a partir de R$ 1.500',
          timeline: '1 a 3 semanas',
        },
      ],
      extras: ['Suporte mensal: a partir de R$ 1.200 por mês (10 horas)', 'Hora avulsa: R$ 120'],
      priceNote:
        'Valores de referência. O preço do seu projeto vai na proposta, depois da conversa sobre o escopo.',
    },
    cases: {
      eyebrow: 'Cases',
      title: 'Projetos em produção',
      intro: 'Sistemas que estão no ar e em uso, contados pelo problema que resolvem.',
      labels: { problem: 'Problema', solution: 'Solução', result: 'Resultado' },
      items: [
        {
          id: 'fechamento',
          name: 'Fechamento',
          tag: 'Gestão financeira',
          problem:
            'Dinheiro espalhado em várias empresas, contas e na maquininha, sem um retrato claro de quanto entra, quanto sai e onde.',
          solution:
            'Sistema web de gestão financeira, pessoal e das empresas, que importa as vendas da maquininha (Stone), organiza as movimentações por empresa e mostra vendas e fluxo de caixa mês a mês. Acesso por papéis (dono, operador e leitura), com convite por link.',
          result: 'As contas de cada empresa em uma tela, sem montar planilha no fim do mês.',
          stack: ['.NET 10', 'PostgreSQL', 'React', 'Docker'],
          links: [],
          note: 'Demo pública em breve',
        },
        {
          id: 'garagem',
          name: 'Garagem',
          tag: 'Produto próprio',
          problem:
            'O histórico de manutenção do carro fica espalhado em notas, fotos e na memória do dono.',
          solution:
            'App web com peças e custos, fotos e notas fiscais, lembretes por quilometragem ou tempo, tabela FIPE e link público de leitura para compartilhar o histórico.',
          result:
            'Histórico completo em um lugar, com 880 testes automatizados garantindo que continue funcionando.',
          stack: ['.NET 10', 'Clean Architecture', 'PostgreSQL', 'React'],
          links: [
            { label: 'Ver demo', href: garagemUrl },
            {
              label: 'Código no GitHub',
              href: 'https://github.com/gabrielLAraujo/app-maintenance-history',
            },
          ],
          image: {
            src: '/cases/garagem.webp',
            alt: 'Tela do Garagem com o histórico de manutenções de um carro',
            width: 1280,
            height: 800,
          },
        },
        {
          id: 'espaco-desenvolver-viver',
          name: 'Espaço Desenvolver & Viver',
          tag: 'Cliente · site institucional',
          problem:
            'Um espaço de psicoterapia precisava apresentar a equipe e os consultórios e facilitar o primeiro contato dos pacientes.',
          solution:
            'Site institucional com proposta, equipe multidisciplinar, consultórios e localização, e agendamento direto pelo WhatsApp.',
          result: 'O paciente chega ao WhatsApp do espaço em um clique, sem formulário longo.',
          stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          links: [{ label: 'Ver site', href: 'https://web-tan-omega-79.vercel.app/' }],
          image: {
            src: '/cases/espaco-desenvolver-viver.webp',
            alt: 'Página inicial do site do Espaço Desenvolver & Viver',
            width: 1280,
            height: 800,
          },
        },
      ],
      othersTitle: 'Outros projetos',
      others: [
        {
          name: 'NextReport',
          text: 'Gerador de relatórios com templates em HTML e exportação para PDF e Excel.',
          href: 'https://next-report-lime.vercel.app/',
        },
        {
          name: 'Evera',
          text: 'Landing page de e-book em português, inglês e espanhol.',
          href: 'https://magenta-cajeta-0629ae.netlify.app/',
        },
      ],
    },
    process: {
      eyebrow: 'Como trabalho',
      title: 'Do primeiro contato ao sistema no ar',
      steps: [
        {
          title: 'Conversa',
          text: 'Você conta o problema; eu pergunto como o trabalho é feito hoje e o que precisa mudar.',
        },
        { title: 'Proposta', text: 'Escopo, prazo e preço por escrito antes de começar.' },
        {
          title: 'Entregas a cada 15 dias',
          text: 'Você usa o que já está pronto e ajusta o rumo no caminho.',
        },
        { title: 'Suporte', text: 'Depois da entrega, correções e melhorias combinadas.' },
      ],
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Quem vai construir o seu sistema',
      paragraphs: [
        'Sou Gabriel Leite Araújo, desenvolvedor full stack há mais de 8 anos. Trabalho com .NET e C# no back-end, React e TypeScript no front-end e PostgreSQL nos dados.',
        'Hoje desenvolvo sistemas do mercado financeiro. Antes, trabalhei com monitoramento de frotas e com indexação de dados geotécnicos.',
        'Entrego com testes automatizados e deploy contínuo, para o sistema continuar funcionando depois da entrega.',
      ],
      stackLabel: 'Tecnologias que uso no dia a dia',
      stack: [
        'C#',
        '.NET',
        'Node.js',
        'React',
        'TypeScript',
        'PostgreSQL',
        'SQL Server',
        'RabbitMQ',
        'Docker',
        'AWS',
        'CI/CD',
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar sobre o seu projeto',
      lead: 'Conte em poucas linhas o que você precisa. A conversa inicial serve para entender o problema, sem compromisso.',
      whatsappCta: 'Conversar no WhatsApp',
      location: 'São José, SC · atendimento remoto em todo o Brasil',
      form: {
        name: 'Nome',
        email: 'E-mail',
        message: 'O que você precisa?',
        submit: 'Enviar mensagem',
        sending: 'Enviando…',
        success: 'Mensagem enviada. Respondo no e-mail que você informou.',
        error: 'Não foi possível enviar agora. Tente pelo WhatsApp ou por e-mail.',
        invalid:
          'Confira os campos: nome com pelo menos 2 letras, e-mail válido e mensagem com 10 caracteres ou mais.',
      },
    },
    faq: {
      id: 'duvidas',
      eyebrow: 'Dúvidas',
      title: 'Perguntas frequentes',
      items: [
        {
          question: 'Quanto custa o meu projeto?',
          answer:
            'Os valores em Serviços são o ponto de partida. Depois da conversa sobre o que você precisa, envio uma proposta por escrito com escopo, prazo e preço.',
        },
        {
          question: 'Quanto tempo leva?',
          answer:
            'Uma landing page fica pronta em 1 a 2 semanas; um site institucional, em 2 a 3; um painel de gestão, em 3 a 5; e um sistema interno, em 6 a 10 semanas. O prazo do seu projeto vai na proposta.',
        },
        {
          question: 'Atende empresas de outras cidades?',
          answer: 'Sim. Atendo remotamente em todo o Brasil, por WhatsApp, e-mail e videochamada.',
        },
        {
          question: 'Como acompanho o andamento?',
          answer:
            'A cada 15 dias você recebe uma entrega que já pode usar e dá o retorno para ajustar o que vem depois.',
        },
        {
          question: 'E depois que o sistema estiver pronto?',
          answer:
            'As correções combinadas na proposta estão incluídas. Para melhorias contínuas, há o suporte mensal a partir de R$ 1.200 por 10 horas.',
        },
        {
          question: 'Onde o sistema fica hospedado?',
          answer:
            'No seu servidor ou em um serviço de nuvem. Ajudo a escolher a opção e deixo tudo configurado.',
        },
      ],
    },
    footer: { rights: `© ${year} Gabriel Leite Araújo` },
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    nav: [
      { href: '#services', label: 'Services' },
      { href: '#work', label: 'Work' },
      { href: '#how-i-work', label: 'How I work' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    switchLanguage: { href: '/', label: 'PT', ariaLabel: 'Versão em português' },
    themeToggle: 'Toggle light and dark theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    whatsappMessage: 'Hi Gabriel, I saw your website and would like to talk about a project.',
    hero: {
      eyebrow: 'Software engineer · Brazil (UTC−3) · remote',
      title: 'Senior .NET and React engineer for contract work.',
      lead: '8+ years building back-end services, web apps and integrations with C#/.NET, React and PostgreSQL. Currently working on financial-market systems.',
      primaryCta: 'Email me',
      secondaryCta: 'See my work',
      photoAlt: 'Photo of Gabriel Leite Araújo',
      caption: 'Gabriel Leite Araújo, full stack engineer',
    },
    services: {
      eyebrow: 'Services',
      title: 'What I can take on',
      intro: 'Contract work as a senior individual contributor, from design to production.',
      exampleLabel: 'Example',
      items: [
        {
          title: 'Back-end services and APIs in .NET',
          text: 'Minimal APIs and services with PostgreSQL or SQL Server, clean architecture, automated tests and observability.',
          example: 'Garagem',
        },
        {
          title: 'Full stack product work',
          text: 'React and TypeScript front-ends on top of .NET or Node.js back-ends, with typed API clients generated from OpenAPI.',
          example: 'Fechamento',
        },
        {
          title: 'Integrations and messaging',
          text: 'Payment and bank data imports, queues with RabbitMQ and SNS/SQS, and jobs that keep systems in sync.',
        },
      ],
      extras: ['Contract rate: from US$ 35 per hour'],
    },
    cases: {
      eyebrow: 'Work',
      title: 'Systems in production',
      intro: 'Live systems, described by the problem they solve.',
      labels: { problem: 'Problem', solution: 'Solution', result: 'Result' },
      items: [
        {
          id: 'fechamento',
          name: 'Fechamento',
          tag: 'Financial management',
          problem:
            'Money spread across several companies, bank accounts and card terminals, with no clear picture of what comes in, what goes out and where.',
          solution:
            'Web app for personal and business finances that imports card-terminal sales (Stone), organizes transactions by company and shows sales and monthly cash flow. Role-based access (owner, operator, viewer) with invite links.',
          result: 'Each company’s accounts on one screen, with no spreadsheet at month end.',
          stack: ['.NET 10', 'PostgreSQL', 'React', 'Docker'],
          links: [],
          note: 'Public demo coming soon',
        },
        {
          id: 'garagem',
          name: 'Garagem',
          tag: 'Own product',
          problem:
            'A car’s maintenance history ends up scattered across receipts, photos and memory.',
          solution:
            'Web app with parts and costs, photos and invoices, reminders by mileage or time, FIPE price table and a read-only public link to share the history.',
          result: 'The full history in one place, backed by 880 automated tests.',
          stack: ['.NET 10', 'Clean Architecture', 'PostgreSQL', 'React'],
          links: [
            { label: 'Open demo', href: garagemUrl },
            {
              label: 'Code on GitHub',
              href: 'https://github.com/gabrielLAraujo/app-maintenance-history',
            },
          ],
          image: {
            src: '/cases/garagem.webp',
            alt: 'Garagem screen showing a car’s maintenance history',
            width: 1280,
            height: 800,
          },
        },
        {
          id: 'espaco-desenvolver-viver',
          name: 'Espaço Desenvolver & Viver',
          tag: 'Client · website',
          problem:
            'A psychotherapy practice needed to present its team and rooms and make the first contact easy for patients.',
          solution:
            'Website with the practice’s approach, team, rooms and location, and booking straight through WhatsApp.',
          result: 'Patients reach the practice on WhatsApp in one click, with no long form.',
          stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          links: [{ label: 'Visit site', href: 'https://web-tan-omega-79.vercel.app/' }],
          image: {
            src: '/cases/espaco-desenvolver-viver.webp',
            alt: 'Home page of the Espaço Desenvolver & Viver website',
            width: 1280,
            height: 800,
          },
        },
      ],
      othersTitle: 'Other projects',
      others: [
        {
          name: 'NextReport',
          text: 'Report generator with HTML templates and PDF and Excel export.',
          href: 'https://next-report-lime.vercel.app/',
        },
        {
          name: 'Evera',
          text: 'E-book landing page in Portuguese, English and Spanish.',
          href: 'https://magenta-cajeta-0629ae.netlify.app/',
        },
      ],
    },
    process: {
      eyebrow: 'How I work',
      title: 'From first call to production',
      steps: [
        {
          title: 'Short call',
          text: 'We go through the problem, the team and how work gets done today.',
        },
        {
          title: 'Written scope',
          text: 'Scope, timeline and estimate in writing before any work starts.',
        },
        {
          title: 'Two-week deliveries',
          text: 'Working software every two weeks, so priorities can change early.',
        },
        { title: 'Support', text: 'Fixes and improvements after delivery, as agreed.' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Who you would be working with',
      paragraphs: [
        'I’m Gabriel Leite Araújo, a full stack engineer with more than 8 years of experience. I work with .NET and C# on the back end, React and TypeScript on the front end, and PostgreSQL for data.',
        'I currently build financial-market systems. Before that, I worked on fleet monitoring and on indexing geotechnical data.',
        'I ship with automated tests and continuous deployment, so the system keeps working after handover.',
      ],
      stackLabel: 'Day-to-day stack',
      stack: [
        'C#',
        '.NET',
        'Node.js',
        'React',
        'TypeScript',
        'PostgreSQL',
        'SQL Server',
        'RabbitMQ',
        'SNS/SQS',
        'Docker',
        'AWS',
        'CI/CD',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell me about your project',
      lead: 'A few lines on the problem, the team and the timeline are enough to start.',
      whatsappCta: 'Message on WhatsApp',
      location: 'São José, SC, Brazil · UTC−3 · remote',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'What do you need?',
        submit: 'Send message',
        sending: 'Sending…',
        success: 'Message sent. I’ll reply to the email you provided.',
        error: 'The message could not be sent. Please try email or WhatsApp.',
        invalid:
          'Please check the fields: a name with at least 2 letters, a valid email and a message of 10 characters or more.',
      },
    },
    faq: {
      id: 'faq',
      eyebrow: 'FAQ',
      title: 'Common questions',
      items: [
        {
          question: 'What is your rate?',
          answer: 'From US$ 35 per hour for contract work.',
        },
        {
          question: 'Which time zone do you work in?',
          answer:
            'Brazil, UTC−3. That overlaps with US Eastern business hours and European afternoons.',
        },
        {
          question: 'How do we start?',
          answer:
            'A short call about the problem and the team, then scope, timeline and estimate in writing.',
        },
      ],
    },
    footer: { rights: `© ${year} Gabriel Leite Araújo` },
  },
};

export function whatsappHref(locale: Locale): string {
  const number = contactInfo.phone.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(content[locale].whatsappMessage)}`;
}
