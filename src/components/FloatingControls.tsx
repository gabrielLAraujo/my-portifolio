"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaSun, FaMoon, FaGlobeAmericas } from "react-icons/fa";

export function FloatingControls() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <motion.div
      className="fixed right-6 top-6 z-50 flex gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-800 dark:text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === "dark" ? (
          <FaSun className="text-xl text-yellow-500" />
        ) : (
          <FaMoon className="text-xl text-blue-500" />
        )}
      </motion.button>

      <motion.button
        onClick={toggleLanguage}
        className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-800 dark:text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGlobeAmericas className="text-xl text-green-500" />
        <span className="sr-only">
          {language === "pt" ? "Switch to English" : "Mudar para Português"}
        </span>
      </motion.button>
    </motion.div>
  );
} 