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
  },
  {
    title: "Pokedex",
    description: "Sistema para registro e acompanhamento de commits e projetos de desenvolvimento. Permite gerenciar projetos, visualizar commits em tempo real e gerar relatórios de produtividade.",
    githubUrl: "https://github.com/gabrielLAraujo/pokedex",
    liveUrl: "https://pokedex-henna-rho.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PokeAPI"],
  }
];

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-white dark:bg-blue-950 text-blue-900 dark:text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            {t("projects")}
          </h2>
          <p className="text-lg text-blue-700 dark:text-blue-200">
            {t("projectsDescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectPreview
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageUrl={project.liveUrl ? `https://api.microlink.io?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url` : '/images/project-placeholder.png'}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 