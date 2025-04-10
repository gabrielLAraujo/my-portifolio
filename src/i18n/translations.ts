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
    projectsDescription: "Aqui estão alguns dos meus projetos mais recentes. Cada projeto é uma oportunidade de aplicar e expandir minhas habilidades."
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
    projectsDescription: "Here are some of my recent projects. Each project is an opportunity to apply and expand my skills."
  }
}; 