"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectPreviewProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

export function ProjectPreview({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl
}: ProjectPreviewProps) {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const previewUrl = imageUrl || `https://api.microlink.io?url=${encodeURIComponent(liveUrl || githubUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
  const projectUrl = liveUrl || githubUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-blue-50 dark:bg-blue-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full text-blue-900 dark:text-blue-100"
    >
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative h-48 w-full bg-blue-100 dark:bg-blue-800 group cursor-pointer"
      >
        <Image
          src={previewUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl"
          onLoadingComplete={() => setIsLoading(false)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/project-placeholder.png';
          }}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <div className="absolute inset-0 bg-white/50 dark:bg-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-blue-900 dark:text-blue-100 font-medium">{t("viewProject")}</span>
        </div>
      </a>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {title}
        </h3>
        
        <p className="mb-4 text-base md:text-lg">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t("viewCode")}
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t("viewLive")}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 