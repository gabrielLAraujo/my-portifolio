"use client";

import { createContext, useContext, useState } from "react";
import { translations, type Translations } from "@/i18n/translations";

interface LanguageContextType {
  language: "pt" | "en";
  setLanguage: (lang: "pt" | "en") => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 