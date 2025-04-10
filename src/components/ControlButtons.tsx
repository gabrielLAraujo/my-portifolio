"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function ControlButtons() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        title={t.theme}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      <button
        onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        title={t.language}
      >
        <Globe size={20} />
      </button>
    </div>
  );
} 