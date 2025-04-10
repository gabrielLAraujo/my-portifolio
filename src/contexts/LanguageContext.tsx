"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  portfolio: string;
  about: string;
  projects: string;
  contact: string;
  interested: string;
  email: string;
  location: string;
  name: string;
  message: string;
  send: string;
  theme: string;
  language: string;
  dark: string;
  light: string;
  portuguese: string;
  english: string;
  role: string;
  description: string;
  skills: string;
  viewProject: string;
  viewGithub: string;
}

const translations: Record<Language, Translations> = {
  pt: {
    portfolio: "Meu Portfólio",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    interested: "Interessado em trabalhar juntos? Entre em contato através do formulário ou diretamente por email!",
    email: "Email",
    location: "Localização",
    name: "Nome",
    message: "Mensagem",
    send: "Enviar",
    theme: "Tema",
    language: "Idioma",
    dark: "Escuro",
    light: "Claro",
    portuguese: "Português",
    english: "Inglês",
    role: "Desenvolvedor Full Stack",
    description: "Desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Especializado em JavaScript, TypeScript, React e Node.js.",
    skills: "Habilidades",
    viewProject: "Ver Projeto",
    viewGithub: "Ver no GitHub"
  },
  en: {
    portfolio: "My Portfolio",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    interested: "Interested in working together? Get in touch through the form or directly by email!",
    email: "Email",
    location: "Location",
    name: "Name",
    message: "Message",
    send: "Send",
    theme: "Theme",
    language: "Language",
    dark: "Dark",
    light: "Light",
    portuguese: "Portuguese",
    english: "English",
    role: "Full Stack Developer",
    description: "Developer passionate about creating innovative and efficient solutions. Specialized in JavaScript, TypeScript, React and Node.js.",
    skills: "Skills",
    viewProject: "View Project",
    viewGithub: "View on GitHub"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 