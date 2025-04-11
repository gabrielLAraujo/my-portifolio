"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t("aboutTitle")}
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>{t("aboutDescription1")}</p>
              <p>{t("aboutDescription2")}</p>
              <p>{t("aboutDescription3")}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">{t("experience")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">{t("education")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-gray-700 dark:text-gray-300">{t("location")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 