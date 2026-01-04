'use client';

import React, { createContext, useContext, useState } from 'react';
import { translations, type Translations } from '@/i18n/translations';

interface LanguageContextType {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
  toggleLanguage: () => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): 'pt' | 'en' {
  if (typeof window === 'undefined') return 'en';

  const savedLanguage = localStorage.getItem('language') as 'pt' | 'en' | null;
  if (savedLanguage) return savedLanguage;

  const browserLanguage = navigator.language.toLowerCase();
  const detectedLanguage = browserLanguage.startsWith('pt') ? 'pt' : 'en';
  localStorage.setItem('language', detectedLanguage);
  return detectedLanguage;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<'pt' | 'en'>(getInitialLanguage);

  const setLanguage = (lang: 'pt' | 'en') => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
