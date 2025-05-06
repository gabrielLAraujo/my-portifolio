"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 shadow-lg flex flex-col justify-between h-full text-blue-900 dark:text-blue-100">
      <div>
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200">{tech}</span>
          ))}
        </div>
        <div className="mb-4">
          <ul className="list-disc list-inside text-blue-700 dark:text-blue-200 text-sm space-y-1">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <a href={githubUrl} target="_blank" className="btn-primary">Ver Código</a>
        {previewUrl && (
          <a href={previewUrl} target="_blank" className="btn-secondary">Live Demo</a>
        )}
      </div>
    </motion.div>
  );
} 