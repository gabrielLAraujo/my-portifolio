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
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Gabriel Leite Araújo
        </h1>

        <motion.div 
          className="relative w-48 h-48 mx-auto mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
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

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t("heroTitle")}
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          {t("heroSubtitle")}
        </p>
        
        <motion.a
          href="#projects"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {item.text}
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block w-24 h-0.5 bg-gray-300 dark:bg-gray-700 mx-auto my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 