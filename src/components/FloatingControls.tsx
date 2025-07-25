"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaSun, FaMoon, FaGlobeAmericas, FaKeyboard } from "react-icons/fa";
import { useState, useEffect } from "react";

export function FloatingControls() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [showKeyboardHints, setShowKeyboardHints] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Evitar erro de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  // Não renderizar até que o componente seja montado
  if (!mounted) {
    return null;
  }

  const keyboardShortcuts = [
    {
      key: "Alt + T",
      action: language === "pt" ? "Alternar tema" : "Toggle theme",
    },
    {
      key: "Alt + L",
      action: language === "pt" ? "Alternar idioma" : "Toggle language",
    },
    {
      key: "Alt + 1-5",
      action: language === "pt" ? "Navegar seções" : "Navigate sections",
    },
    {
      key: "Esc",
      action: language === "pt" ? "Voltar ao topo" : "Back to top",
    },
  ];

  return (
    <>
      <motion.div
        className="fixed right-6 top-6 z-50 flex gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        role="toolbar"
        aria-label={
          language === "pt" ? "Controles de interface" : "Interface controls"
        }
      >
        <motion.button
          onClick={toggleTheme}
          onKeyDown={(e) => {
            if (e.altKey && e.key.toLowerCase() === "t") {
              e.preventDefault();
              toggleTheme();
            }
          }}
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={
            theme === "dark"
              ? language === "pt"
                ? "Mudar para tema claro (Alt + T)"
                : "Switch to light theme (Alt + T)"
              : language === "pt"
              ? "Mudar para tema escuro (Alt + T)"
              : "Switch to dark theme (Alt + T)"
          }
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? (
            <FaSun className="text-xl text-yellow-500" aria-hidden="true" />
          ) : (
            <FaMoon className="text-xl text-yellow-500" aria-hidden="true" />
          )}
        </motion.button>

        <motion.button
          onClick={toggleLanguage}
          onKeyDown={(e) => {
            if (e.altKey && e.key.toLowerCase() === "l") {
              e.preventDefault();
              toggleLanguage();
            }
          }}
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={
            language === "pt"
              ? "Mudar para inglês (Alt + L)"
              : "Mudar para português (Alt + L)"
          }
          aria-pressed={language === "en"}
        >
          <FaGlobeAmericas
            className="text-xl text-green-500"
            aria-hidden="true"
          />
          <span className="sr-only">
            {language === "pt"
              ? "Idioma atual: Português"
              : "Current language: English"}
          </span>
        </motion.button>

        <motion.button
          onClick={() => setShowKeyboardHints(!showKeyboardHints)}
          className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={
            language === "pt"
              ? "Mostrar atalhos de teclado"
              : "Show keyboard shortcuts"
          }
          aria-expanded={showKeyboardHints}
        >
          <FaKeyboard className="text-xl text-purple-500" aria-hidden="true" />
        </motion.button>
      </motion.div>

      {/* Keyboard Shortcuts Panel */}
      {showKeyboardHints && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          className="fixed right-6 top-24 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 max-w-xs"
          role="dialog"
          aria-labelledby="keyboard-shortcuts-title"
          aria-modal="false"
        >
          <h3
            id="keyboard-shortcuts-title"
            className="text-lg font-semibold text-gray-800 dark:text-white mb-3"
          >
            {language === "pt" ? "Atalhos de Teclado" : "Keyboard Shortcuts"}
          </h3>
          <ul className="space-y-2">
            {keyboardShortcuts.map((shortcut, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-sm"
              >
                <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                  {shortcut.key}
                </kbd>
                <span className="text-gray-600 dark:text-gray-300 ml-2">
                  {shortcut.action}
                </span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowKeyboardHints(false)}
            className="mt-3 text-xs text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
          >
            {language === "pt" ? "Fechar" : "Close"}
          </button>
        </motion.div>
      )}
    </>
  );
}
