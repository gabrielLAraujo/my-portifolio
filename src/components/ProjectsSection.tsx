"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectPreview } from "./ProjectPreview";

const projects = [
  {
    title: "Dev Logger",
    description: "Sistema para registro e acompanhamento de commits e projetos de desenvolvimento. Permite gerenciar projetos, visualizar commits em tempo real e gerar relatórios de produtividade.",
    githubUrl: "https://github.com/gabrielLAraujo/dev-logger",
    liveUrl: "https://dev-logger.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub API"],
  }
];

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("projectsDescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectPreview key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
} 