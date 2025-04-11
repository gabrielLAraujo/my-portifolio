"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ControlButtons } from "./ControlButtons";
import { motion } from "framer-motion";

export function Navbar() {
  const { t } = useLanguage();

  const navItems = [
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-x-6">
            <a 
              href="#" 
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              {t("portfolio")}
            </a>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium hover:underline transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <ControlButtons />
        </div>
      </div>
    </motion.nav>
  );
} 