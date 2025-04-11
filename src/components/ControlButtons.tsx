"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

export function ControlButtons() {
  const { theme, setTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        title={t("theme")}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <button
        onClick={toggleLanguage}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        title={t("language")}
      >
        {language === "pt" ? "EN" : "PT"}
      </button>
    </div>
  );
}