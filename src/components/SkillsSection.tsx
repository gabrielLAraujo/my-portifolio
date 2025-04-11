"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  FaReact, FaNodeJs, FaDocker, FaGitAlt,
  FaHtml5, FaCss3Alt, FaJs, FaDatabase,
  FaServer, FaCloud, FaCode, FaTools
} from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "frontend" | "backend" | "devops" | "other";
}

const skills: Skill[] = [
  // Frontend
  { name: "React", icon: FaReact, category: "frontend" },
  { name: "HTML5", icon: FaHtml5, category: "frontend" },
  { name: "CSS3", icon: FaCss3Alt, category: "frontend" },
  { name: "JavaScript", icon: FaJs, category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: FaNodeJs, category: "backend" },
  { name: "Express", icon: FaServer, category: "backend" },
  { name: "MongoDB", icon: FaDatabase, category: "backend" },
  { name: "PostgreSQL", icon: FaDatabase, category: "backend" },
  
  // DevOps
  { name: "Docker", icon: FaDocker, category: "devops" },
  { name: "Git", icon: FaGitAlt, category: "devops" },
  { name: "AWS", icon: FaCloud, category: "devops" },
  { name: "CI/CD", icon: FaTools, category: "devops" },
  
  // Outros
  { name: "TypeScript", icon: FaCode, category: "other" },
  { name: "REST APIs", icon: FaCode, category: "other" },
  { name: "GraphQL", icon: FaCode, category: "other" },
  { name: "Testes", icon: FaCode, category: "other" },
];

const categories = {
  frontend: {
    pt: "Frontend",
    en: "Frontend"
  },
  backend: {
    pt: "Backend",
    en: "Backend"
  },
  devops: {
    pt: "DevOps",
    en: "DevOps"
  },
  other: {
    pt: "Outros",
    en: "Other"
  }
};

export function SkillsSection() {
  const { t, language } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("skills")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("skillsDescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([category, title]) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {title[language as keyof typeof title]}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      <skill.icon className="text-xl text-blue-600 dark:text-blue-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 