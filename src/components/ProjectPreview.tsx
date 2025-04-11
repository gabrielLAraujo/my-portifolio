"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectPreviewProps {
  title: string;
  description: string;
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
}

export function ProjectPreview({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  technologies,
}: ProjectPreviewProps) {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const previewUrl = image || `https://api.microlink.io?url=${encodeURIComponent(liveUrl || githubUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
  const projectUrl = liveUrl || githubUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative h-48 w-full bg-gray-100 dark:bg-gray-700 group cursor-pointer"
      >
        <Image
          src={previewUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onLoadingComplete={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium">{t("viewProject")}</span>
        </div>
      </a>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <FaGithub className="text-xl" />
            <span>{t("viewCode")}</span>
          </a>
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaExternalLinkAlt className="text-xl" />
              <span>{t("viewLive")}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 