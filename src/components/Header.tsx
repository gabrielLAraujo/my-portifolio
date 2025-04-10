"use client";

import { motion } from "framer-motion";
import { FaUser, FaCode, FaEnvelopeOpenText } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { ControlButtons } from "./ControlButtons";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50 py-3">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold"
        >
          {t.portfolio}
        </motion.h1>
        <div className="flex items-center space-x-6">
          <motion.a 
            href="#sobre" 
            className="hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUser className="text-lg" />
            <span className="hidden sm:inline">{t.about}</span>
          </motion.a>
          <motion.a 
            href="#projetos" 
            className="hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode className="text-lg" />
            <span className="hidden sm:inline">{t.projects}</span>
          </motion.a>
          <motion.a 
            href="#contato" 
            className="hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelopeOpenText className="text-lg" />
            <span className="hidden sm:inline">{t.contact}</span>
          </motion.a>
          <ControlButtons />
        </div>
      </nav>
    </header>
  );
} 