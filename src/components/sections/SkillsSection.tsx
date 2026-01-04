'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories, getSkillsByCategory, skills } from '@/data/skills/skills.data';
import { useState } from 'react';
import { Code2, Server, Cloud, Wrench } from 'lucide-react';

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  devops: Cloud,
  other: Wrench,
};

const categoryColors = {
  frontend: 'accent-green',
  backend: 'accent-purple',
  devops: 'accent-cyan',
  other: 'accent-green',
};

const levelColors = {
  expert: 'bg-accent-green',
  advanced: 'bg-accent-purple',
  intermediate: 'bg-accent-cyan',
  beginner: 'bg-text-muted',
};

const levelWidths = {
  expert: 'w-full',
  advanced: 'w-3/4',
  intermediate: 'w-1/2',
  beginner: 'w-1/4',
};

export function SkillsSection() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-bg-primary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-mono mb-6"
          >
            {language === 'pt' ? '// Habilidades' : '// Skills'}
          </motion.span>

          <h2 className="section-heading gradient-text-static mb-4">{t('skills')}</h2>

          <p className="section-subheading">{t('skillsDescription')}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`
              px-4 py-2 rounded-full font-mono text-sm transition-all duration-300
              ${
                activeCategory === null
                  ? 'bg-accent-green text-bg-primary'
                  : 'bg-bg-tertiary/50 text-text-secondary hover:text-accent-green hover:border-accent-green/50 border border-dark-border/50'
              }
            `}
          >
            {language === 'pt' ? 'Todas' : 'All'}
          </button>
          {Object.entries(categories).map(([category, title]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-full font-mono text-sm transition-all duration-300
                  flex items-center gap-2
                  ${
                    activeCategory === category
                      ? 'bg-accent-green text-bg-primary'
                      : 'bg-bg-tertiary/50 text-text-secondary hover:text-accent-green hover:border-accent-green/50 border border-dark-border/50'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {title[language as keyof typeof title]}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(categories).map(([category, title]) => {
            const categorySkills = getSkillsByCategory(category);
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            const color = categoryColors[category as keyof typeof categoryColors];
            const isActive = activeCategory === null || activeCategory === category;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  scale: isActive ? 1 : 0.95,
                }}
                transition={{ duration: 0.3 }}
                className={`
                  relative p-6 rounded-2xl
                  bg-bg-tertiary/30 backdrop-blur-sm
                  border border-dark-border/50
                  hover:border-${color}/30
                  transition-all duration-300
                  ${!isActive && 'pointer-events-none'}
                `}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-${color}/10`}>
                    <Icon className={`w-5 h-5 text-${color}`} />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-text-primary">
                    {title[language as keyof typeof title]}
                  </h3>
                </div>

                {/* Skills List */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      className={`
                        group relative p-3 rounded-xl
                        bg-bg-primary/50
                        border border-dark-border/30
                        hover:border-${color}/30
                        transition-all duration-300
                        cursor-pointer
                      `}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center gap-3">
                        <skill.icon className={`w-5 h-5 text-${color} flex-shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm text-text-primary font-medium">
                            {skill.name}
                          </span>

                          {/* Level Bar */}
                          <div className="mt-1.5 h-1 rounded-full bg-dark-border/50 overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${levelColors[(skill.level || 'intermediate') as keyof typeof levelColors]}`}
                              initial={{ width: 0 }}
                              whileInView={{
                                width:
                                  levelWidths[
                                    (skill.level || 'intermediate') as keyof typeof levelWidths
                                  ].replace('w-', '') === 'full'
                                    ? '100%'
                                    : levelWidths[
                                        (skill.level || 'intermediate') as keyof typeof levelWidths
                                      ].replace('w-', ''),
                              }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Skill Level Tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{
                          opacity: hoveredSkill === skill.name ? 1 : 0,
                          y: hoveredSkill === skill.name ? 0 : 5,
                        }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-bg-primary border border-dark-border/50 text-xs text-text-secondary whitespace-nowrap z-10"
                      >
                        {(skill.level || 'intermediate').charAt(0).toUpperCase() +
                          (skill.level || 'intermediate').slice(1)}
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-${color}/5 rounded-bl-full pointer-events-none`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: skills.length, label: language === 'pt' ? 'Tecnologias' : 'Technologies' },
            {
              value: skills.filter((s) => s.level === 'expert').length,
              label: language === 'pt' ? 'Expert' : 'Expert',
            },
            {
              value: skills.filter((s) => s.level === 'advanced').length,
              label: language === 'pt' ? 'Avançado' : 'Advanced',
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-display font-bold gradient-text-static mb-1">
                {stat.value}+
              </div>
              <div className="text-sm text-text-secondary font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
