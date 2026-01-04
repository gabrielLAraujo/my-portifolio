'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectCardBento, ProjectCardCompact } from '@/components/ProjectCardBento';
import { getFeaturedProjects, getOtherProjects } from '@/data/projects/projects.data';
import { ArrowUpRight, Github } from 'lucide-react';
import { StaticMeshGradient } from '@/components/effects/MeshGradient';

export function ProjectsSection() {
  const { t, language } = useLanguage();

  const featuredProjects = getFeaturedProjects();
  const otherProjects = getOtherProjects();

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-bg-primary overflow-hidden">
      {/* Background Effects */}
      <StaticMeshGradient className="opacity-50" />
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-accent-green/10 text-accent-green text-sm font-mono mb-6"
          >
            {language === 'pt' ? '// Portfólio' : '// Portfolio'}
          </motion.span>

          <h2 className="section-heading gradient-text-static mb-4">{t('projects')}</h2>

          <p className="section-subheading">{t('projectsDescription')}</p>
        </motion.div>

        {/* Featured Projects - Bento Grid */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-accent-green" />
              <h3 className="text-xl font-display font-semibold text-text-primary">
                {language === 'pt' ? 'Projetos em Destaque' : 'Featured Projects'}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-dark-border to-transparent" />
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {featuredProjects.map((project, index) => (
                <ProjectCardBento
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={
                    Array.isArray(project.technologies)
                      ? project.technologies.map((t) => (typeof t === 'string' ? t : t.name))
                      : []
                  }
                  githubUrl={project.links.github || project.githubUrl}
                  liveUrl={project.links.live || project.liveUrl}
                  imageUrl={
                    project.links.live || project.liveUrl
                      ? `https://api.microlink.io?url=${encodeURIComponent(
                          project.links.live || project.liveUrl || ''
                        )}&screenshot=true&meta=false&embed=screenshot.url`
                      : undefined
                  }
                  featured={index === 0}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects - Compact Grid */}
        {otherProjects.length > 0 && (
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-accent-purple" />
              <h3 className="text-xl font-display font-semibold text-text-primary">
                {language === 'pt' ? 'Outros Projetos' : 'Other Projects'}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-dark-border to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCardCompact
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={
                    Array.isArray(project.technologies)
                      ? project.technologies.map((t) => (typeof t === 'string' ? t : t.name))
                      : []
                  }
                  githubUrl={project.links.github || project.githubUrl}
                  liveUrl={project.links.live || project.liveUrl}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-bg-tertiary/30 backdrop-blur-sm border border-dark-border/50">
            <p className="text-text-secondary">
              {language === 'pt'
                ? 'Quer ver mais projetos? Confira meu GitHub!'
                : 'Want to see more projects? Check out my GitHub!'}
            </p>
            <motion.a
              href="https://github.com/gabrielLAraujo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              <span>{language === 'pt' ? 'Ver GitHub' : 'View GitHub'}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
