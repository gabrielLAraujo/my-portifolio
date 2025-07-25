"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaGithub, FaExternalLinkAlt, FaImage } from "react-icons/fa";

interface ProjectPreviewProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured?: boolean;
}

export function ProjectPreview({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  featured = false,
}: ProjectPreviewProps) {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const previewUrl =
    imageUrl ||
    `https://api.microlink.io?url=${encodeURIComponent(
      liveUrl || githubUrl
    )}&screenshot=true&meta=false&embed=screenshot.url`;
  const projectUrl = liveUrl || githubUrl;

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-blue-50 dark:bg-blue-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full text-blue-900 dark:text-blue-100 ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`block relative w-full bg-blue-100 dark:bg-blue-800 group cursor-pointer ${
          featured ? "h-56" : "h-48"
        }`}
      >
        {!hasError ? (
          <Image
            src={previewUrl}
            alt={`Screenshot do projeto ${title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl"
            onLoad={handleImageLoad}
            onError={handleImageError}
            sizes={
              featured
                ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            quality={85}
            priority={featured}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900">
            <FaImage className="text-4xl text-blue-400 dark:text-blue-500 mb-2" />
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {title}
            </span>
          </div>
        )}

        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-blue-100 dark:bg-blue-800">
            <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div className="absolute inset-0 bg-white/50 dark:bg-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-blue-900 dark:text-blue-100 font-medium">
            {t("viewProject")}
          </span>
        </div>
      </a>

      <div className="p-6 flex flex-col flex-1">
        <h3
          className={`font-bold text-blue-600 dark:text-blue-400 mb-2 ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mb-4 text-blue-700 dark:text-blue-200 leading-relaxed ${
            featured ? "text-lg" : "text-base"
          }`}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            <FaGithub size={16} />
            {t("viewCode")}
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-blue-900 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              <FaExternalLinkAlt size={14} />
              {t("viewLive")}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
