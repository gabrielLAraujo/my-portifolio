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
}

export const translations: Record<"pt" | "en", Translations> = {
  pt: {
    portfolio: "Portfólio",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    theme: "Alternar tema",
    language: "Alternar idioma",
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    send: "Enviar",
    sending: "Enviando...",
    messageSent: "Mensagem enviada com sucesso!",
    messageError: "Erro ao enviar mensagem",
    interested: "Interessado em trabalhar juntos? Entre em contato!",
    viewProject: "Ver projeto",
    viewCode: "Ver código",
    viewPreview: "Ver preview",
    location: "Localização",
    skills: "Habilidades",
    keyFeatures: "Recursos Principais",
    projectsDescription: "Aqui estão alguns dos meus projetos mais recentes. Cada projeto é uma oportunidade de aplicar e expandir minhas habilidades.",
    viewMyProjects: "Veja meus projetos",
    heroTitle: "Desenvolvedor Full Stack apaixonado por criar soluções web modernas e eficientes",
    heroSubtitle: "Especializado em desenvolvimento de aplicações web com foco em experiência do usuário e boas práticas de programação",
    skillsDescription: "Minhas principais habilidades e tecnologias",
    viewLive: "Ver projeto",
    aboutTitle: "Olá, eu sou Gabriel Araújo",
    aboutDescription1: "Sou um desenvolvedor Full Stack apaixonado por criar soluções web modernas e eficientes. Com experiência em desenvolvimento de aplicações web, busco sempre entregar produtos de alta qualidade.",
    aboutDescription2: "Especializado em tecnologias como React, Next.js, Node.js e TypeScript, tenho um forte compromisso com boas práticas de programação e experiência do usuário.",
    aboutDescription3: "Atualmente, foco em desenvolver aplicações web escaláveis e responsivas, sempre buscando aprender novas tecnologias e melhorar minhas habilidades.",
    experience: "3+ anos de experiência",
    education: "Graduação em Análise e Desenvolvimento de Sistemas",
  },
  en: {
    portfolio: "Portfolio",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    theme: "Toggle theme",
    language: "Toggle language",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    sending: "Sending...",
    messageSent: "Message sent successfully!",
    messageError: "Error sending message",
    interested: "Interested in working together? Get in touch!",
    viewProject: "View project",
    viewCode: "View code",
    viewPreview: "View preview",
    location: "Location",
    skills: "Skills",
    keyFeatures: "Key Features",
    projectsDescription: "Here are some of my recent projects. Each project is an opportunity to apply and expand my skills.",
    viewMyProjects: "View my projects",
    heroTitle: "Full Stack Developer passionate about creating modern and efficient web solutions",
    heroSubtitle: "Specialized in web application development with a focus on user experience and programming best practices",
    skillsDescription: "My main skills and technologies",
    viewLive: "View project",
    aboutTitle: "Hi, I'm Gabriel Araújo",
    aboutDescription1: "I'm a Full Stack developer passionate about creating modern and efficient web solutions. With experience in web application development, I always strive to deliver high-quality products.",
    aboutDescription2: "Specialized in technologies like React, Next.js, Node.js, and TypeScript, I have a strong commitment to programming best practices and user experience.",
    aboutDescription3: "Currently, I focus on developing scalable and responsive web applications, always seeking to learn new technologies and improve my skills.",
    experience: "3+ years of experience",
    education: "Bachelor's in Systems Analysis and Development",
  }
}; 