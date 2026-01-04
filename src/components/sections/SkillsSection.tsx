'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { categories, getSkillsByCategory } from '@/data/skills/skills.data';

export function SkillsSection() {
  const { t, language } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
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
            {t('skills')}
          </h2>
          <p className="text-lg text-blue-700 dark:text-blue-200">{t('skillsDescription')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([category, title]) => {
            const categorySkills = getSkillsByCategory(category);

            return (
              <motion.div
                key={category}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {title[language as keyof typeof title]}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      className="flex items-center gap-2 p-2 rounded-lg bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors cursor-pointer"
                      title={skill.level ? `Level: ${skill.level}` : undefined}
                    >
                      <skill.icon className="text-xl text-blue-600 dark:text-blue-200 flex-shrink-0" />
                      <span className="text-sm text-blue-900 dark:text-blue-100">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
