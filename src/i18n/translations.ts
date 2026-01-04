export type Translations = {
  portfolio: string;
  about: string;
  projects: string;
  contact: string;
  theme: string;
  language: string;
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  messageSent: string;
  messageError: string;
  interested: string;
  viewProject: string;
  viewCode: string;
  viewPreview: string;
  location: string;
  skills: string;
  keyFeatures: string;
  projectsDescription: string;
  viewMyProjects: string;
  heroTitle: string;
  heroSubtitle: string;
  skillsDescription: string;
  viewLive: string;
  aboutTitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
  aboutDescription3: string;
  experience: string;
  education: string;
};

export const translations: Record<'pt' | 'en', Translations> = {
  pt: {
    portfolio: 'Portfólio',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
    theme: 'Alternar tema',
    language: 'Alternar idioma',
    name: 'Nome',
    email: 'E-mail',
    message: 'Mensagem',
    send: 'Enviar',
    sending: 'Enviando...',
    messageSent: 'Mensagem enviada com sucesso!',
    messageError: 'Erro ao enviar mensagem',
    interested: 'Interessado em trabalhar juntos? Entre em contato!',
    viewProject: 'Ver projeto',
    viewCode: 'Ver código',
    viewPreview: 'Ver preview',
    location: 'Localização',
    skills: 'Habilidades',
    keyFeatures: 'Recursos Principais',
    projectsDescription:
      'Aqui estão alguns dos meus projetos mais recentes. Cada projeto é uma oportunidade de aplicar e expandir minhas habilidades.',
    viewMyProjects: 'Veja meus projetos',
    heroTitle: 'Full Stack Software Engineer apaixonado por criar soluções robustas e escaláveis',
    heroSubtitle:
      'Especialista em C#, .NET, PostgreSQL, Docker, Git e AWS. Foco em arquitetura de software e boas práticas de desenvolvimento',
    skillsDescription: 'Minhas principais habilidades e tecnologias',
    viewLive: 'Ver projeto',
    aboutTitle: 'Olá, eu sou Gabriel Araújo',
    aboutDescription1:
      'Sou um desenvolvedor Full Stack com forte expertise em backend, especializado em C#, .NET e PostgreSQL. Com mais de 7 anos de experiência, construo aplicações robustas e escaláveis.',
    aboutDescription2:
      'Domino tecnologias de infraestrutura como Docker, AWS e Git, garantindo deploys confiáveis e ambientes bem estruturados. No frontend, trabalho com React, Next.js e TypeScript.',
    aboutDescription3:
      'Meu foco está em arquitetura de software, código limpo e soluções que realmente resolvem problemas de negócio. Sempre buscando aprender e evoluir.',
    experience: '7+ anos de experiência',
    education: 'Graduação em Ciência da Computação',
  },
  en: {
    portfolio: 'Portfolio',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    theme: 'Toggle theme',
    language: 'Toggle language',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    sending: 'Sending...',
    messageSent: 'Message sent successfully!',
    messageError: 'Error sending message',
    interested: 'Interested in working together? Get in touch!',
    viewProject: 'View project',
    viewCode: 'View code',
    viewPreview: 'View preview',
    location: 'Location',
    skills: 'Skills',
    keyFeatures: 'Key Features',
    projectsDescription:
      'Here are some of my recent projects. Each project is an opportunity to apply and expand my skills.',
    viewMyProjects: 'View my projects',
    heroTitle:
      'Full Stack Software Engineer passionate about building robust and scalable solutions',
    heroSubtitle:
      'Expert in C#, .NET, PostgreSQL, Docker, Git and AWS. Focus on software architecture and development best practices',
    skillsDescription: 'My main skills and technologies',
    viewLive: 'View project',
    aboutTitle: "Hi, I'm Gabriel Araújo",
    aboutDescription1:
      "I'm a Full Stack developer with strong backend expertise, specialized in C#, .NET and PostgreSQL. With over 7 years of experience, I build robust and scalable applications.",
    aboutDescription2:
      'I master infrastructure technologies like Docker, AWS and Git, ensuring reliable deployments and well-structured environments. On the frontend, I work with React, Next.js and TypeScript.',
    aboutDescription3:
      'My focus is on software architecture, clean code and solutions that truly solve business problems. Always looking to learn and evolve.',
    experience: '7+ years of experience',
    education: "Bachelor's in Computer Science",
  },
};
