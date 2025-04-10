"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  githubUrl: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="group h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
      >
        <button 
          className="w-full text-left"
          onClick={() => setIsModalOpen(true)}
        >
          <ProjectPreview
            projectUrl={projectUrl}
            githubUrl={githubUrl}
            title={title}
          />
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </button>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <ProjectPreview
            projectUrl={projectUrl}
            githubUrl={githubUrl}
            title={title}
            onClose={() => setIsModalOpen(false)}
            isModal
          />
        )}
      </AnimatePresence>
    </>
  );
} 