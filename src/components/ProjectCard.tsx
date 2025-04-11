"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheck, FaCode, FaRocket } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  previewUrl?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  features, 
  technologies, 
  githubUrl, 
  previewUrl 
}: ProjectCardProps) {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {description}
      </p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <FaRocket className="text-blue-600 dark:text-blue-400" />
          {t("keyFeatures")}
        </h4>
        <motion.ul variants={container} className="space-y-2">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              variants={item}
              className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
            >
              <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <FaCode className="text-blue-600 dark:text-blue-400" />
          {t("skills")}
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="text-xl" />
          {t("viewCode")}
        </motion.a>
        
        {previewUrl && (
          <motion.a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt />
            {t("viewPreview")}
          </motion.a>
        )}
      </div>
    </motion.div>
  );
} 