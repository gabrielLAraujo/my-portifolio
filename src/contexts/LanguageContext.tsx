"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, type Translations } from "@/i18n/translations";

interface LanguageContextType {
  language: "pt" | "en";
  setLanguage: (lang: "pt" | "en") => void;
  toggleLanguage: () => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"pt" | "en">("en");

  useEffect(() => {
    // Tenta obter o idioma salvo no localStorage
    const savedLanguage = localStorage.getItem("language") as "pt" | "en" | null;
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Se não houver idioma salvo, detecta o idioma do navegador
      const browserLanguage = navigator.language.toLowerCase();
      const detectedLanguage = browserLanguage.startsWith("pt") ? "pt" : "en";
      setLanguage(detectedLanguage);
      localStorage.setItem("language", detectedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: keyof Translations): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 