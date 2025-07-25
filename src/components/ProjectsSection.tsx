"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectPreview } from "./ProjectPreview";

const projects = [
  {
    title: "NextReport",
    description:
      "Gerador de relatórios avançado com templates HTML personalizáveis, suporte a Handlebars e exportação para PDF/Excel. Permite criar relatórios dinâmicos com formatação de dados, cálculos automáticos e visualização em tempo real.",
    githubUrl: "https://github.com/gabrielLAraujo/next-report",
    liveUrl: "https://next-report-lime.vercel.app/",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Handlebars",
      "PDF Generation",
    ],
    featured: true,
  },
  {
    title: "Dev Logger",
    description:
      "Sistema completo para registro e acompanhamento de commits e projetos de desenvolvimento. Oferece dashboard interativo, métricas de produtividade, integração com GitHub API e relatórios detalhados de atividade de desenvolvimento.",
    githubUrl: "https://github.com/gabrielLAraujo/dev-logger",
    liveUrl: "https://dev-logger.vercel.app",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "Chart.js",
    ],
    featured: true,
  },
  {
    title: "Pokedex",
    description:
      "Aplicação interativa de Pokédex com design moderno e responsivo. Inclui busca avançada, filtros por tipo e geração, visualização detalhada de cada Pokémon com stats, evoluções e informações completas usando a PokeAPI.",
    githubUrl: "https://github.com/gabrielLAraujo/pokedex",
    liveUrl: "https://pokedex-henna-rho.vercel.app/",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PokeAPI",
      "Framer Motion",
    ],
    featured: false,
  },
];

export function ProjectsSection() {
  const { t, language } = useLanguage();

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-blue-950 text-blue-900 dark:text-blue-100"
    >
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
          <p className="text-lg text-blue-700 dark:text-blue-200 max-w-3xl mx-auto">
            {t("projectsDescription")}
          </p>
        </motion.div>

        {/* Projetos em Destaque */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center"
            >
              {language === "pt" ? "Projetos em Destaque" : "Featured Projects"}
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectPreview
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  imageUrl={
                    project.liveUrl
                      ? `https://api.microlink.io?url=${encodeURIComponent(
                          project.liveUrl
                        )}&screenshot=true&meta=false&embed=screenshot.url`
                      : "/images/project-placeholder.png"
                  }
                  featured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Outros Projetos */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center"
            >
              {language === "pt" ? "Outros Projetos" : "Other Projects"}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectPreview
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  imageUrl={
                    project.liveUrl
                      ? `https://api.microlink.io?url=${encodeURIComponent(
                          project.liveUrl
                        )}&screenshot=true&meta=false&embed=screenshot.url`
                      : "/images/project-placeholder.png"
                  }
                  featured={false}
                />
              ))}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-blue-700 dark:text-blue-200 mb-6">
            {language === "pt"
              ? "Quer ver mais projetos? Confira meu GitHub!"
              : "Want to see more projects? Check out my GitHub!"}
          </p>
          <a
            href="https://github.com/gabrielLAraujo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            {language === "pt" ? "Ver GitHub" : "View GitHub"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
