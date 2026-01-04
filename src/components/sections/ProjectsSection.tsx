'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectPreview } from '../ProjectPreview';
import { getFeaturedProjects, getOtherProjects } from '@/data/projects/projects.data';

export function ProjectsSection() {
  const { t, language } = useLanguage();

  const featuredProjects = getFeaturedProjects();
  const otherProjects = getOtherProjects();

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
            {t('projects')}
          </h2>
          <p className="text-lg text-blue-700 dark:text-blue-200 max-w-3xl mx-auto">
            {t('projectsDescription')}
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
              {language === 'pt' ? 'Projetos em Destaque' : 'Featured Projects'}
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectPreview
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={
                    Array.isArray(project.technologies)
                      ? project.technologies.map((t) => (typeof t === 'string' ? t : t.name))
                      : []
                  }
                  githubUrl={project.links.github || project.githubUrl || ''}
                  liveUrl={project.links.live || project.liveUrl || ''}
                  imageUrl={
                    project.links.live || project.liveUrl
                      ? `https://api.microlink.io?url=${encodeURIComponent(
                          project.links.live || project.liveUrl || ''
                        )}&screenshot=true&meta=false&embed=screenshot.url`
                      : '/images/project-placeholder.png'
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
              {language === 'pt' ? 'Outros Projetos' : 'Other Projects'}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <ProjectPreview
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={
                    Array.isArray(project.technologies)
                      ? project.technologies.map((t) => (typeof t === 'string' ? t : t.name))
                      : []
                  }
                  githubUrl={project.links.github || project.githubUrl || ''}
                  liveUrl={project.links.live || project.liveUrl || ''}
                  imageUrl={
                    project.links.live || project.liveUrl
                      ? `https://api.microlink.io?url=${encodeURIComponent(
                          project.links.live || project.liveUrl || ''
                        )}&screenshot=true&meta=false&embed=screenshot.url`
                      : '/images/project-placeholder.png'
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
            {language === 'pt'
              ? 'Quer ver mais projetos? Confira meu GitHub!'
              : 'Want to see more projects? Check out my GitHub!'}
          </p>
          <a
            href="https://github.com/gabrielLAraujo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            {language === 'pt' ? 'Ver GitHub' : 'View GitHub'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
