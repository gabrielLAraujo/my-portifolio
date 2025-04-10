"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectPreviewProps {
  projectUrl: string;
  githubUrl: string;
  title: string;
  onClose?: () => void;
  isModal?: boolean;
}

export function ProjectPreview({ projectUrl, githubUrl, title, onClose, isModal = false }: ProjectPreviewProps) {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const previewUrl = `https://api.microlink.io?url=${encodeURIComponent(projectUrl)}&screenshot=true&meta=false&embed=screenshot.url&scale=0.75&waitUntil=networkidle2`;

  const previewContent = (
    <>
      <div className="relative w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-t-xl overflow-hidden">
        <iframe
          src={previewUrl}
          className="w-full h-full border-none scale-100"
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
        <div className="flex gap-4">
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            title={t.viewProject}
          >
            <FaExternalLinkAlt className="text-white text-xl" />
          </Link>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
            title="GitHub"
          >
            <FaGithub className="text-white text-xl" />
          </Link>
        </div>
      </div>
    </>
  );

  if (isModal) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-5xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          {previewContent}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="relative group">
      {previewContent}
    </div>
  );
} 