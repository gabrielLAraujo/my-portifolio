"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const { t, language } = useLanguage();

  const timeline = language === "pt" 
    ? [
        { year: "2019", text: "Comecei" },
        { year: "2023", text: "Dev Fullstack" },
        { year: "2025", text: "Portfólio ativo" }
      ]
    : [
        { year: "2019", text: "Started" },
        { year: "2023", text: "Fullstack Dev" },
        { year: "2025", text: "Active Portfolio" }
      ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-blue-950 text-blue-900 dark:text-blue-100">
      <div className="absolute inset-0 -z-10" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-6">
          Gabriel Leite Araújo
        </h1>

        <motion.div 
          className="relative w-48 h-48 mx-auto mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-2 rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt={language === "pt" ? "Foto de Gabriel Leite Araújo" : "Picture of Gabriel Leite Araújo"}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <p className="text-xl md:text-2xl text-blue-700 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
          {t("heroTitle")}
        </p>
        <p className="text-lg text-blue-600 dark:text-blue-400 mb-8 max-w-2xl mx-auto">
          {t("heroSubtitle")}
        </p>
        
        <motion.a
          href="#projects"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {t("viewMyProjects")}
          <ArrowRight size={20} />
        </motion.a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-12 left-0 right-0"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {timeline.map((item, index) => (
              <div key={item.year} className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {item.year}
                </div>
                <div className="text-sm text-blue-700 dark:text-blue-200">
                  {item.text}
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block w-24 h-0.5 bg-blue-200 dark:bg-blue-800 mx-auto my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 