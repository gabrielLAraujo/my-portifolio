"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "./ContactForm";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <motion.section 
      id="contato" 
      className="py-24 bg-gray-50 dark:bg-gray-800/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t.contact}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.interested}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <motion.a 
                href="mailto:bfrauches@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="font-medium mb-1">{t.email}</p>
                  <p className="text-gray-600 dark:text-gray-300">bfrauches@gmail.com</p>
                </div>
              </motion.a>

              <motion.div 
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <FaMapMarkerAlt className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <div>
                  <p className="font-medium mb-1">{t.location}</p>
                  <p className="text-gray-600 dark:text-gray-300">Navegantes, SC</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
} 