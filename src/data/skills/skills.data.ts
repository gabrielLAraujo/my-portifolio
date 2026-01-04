import { Skill, SkillCategories } from '@/types';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaCode,
  FaPython,
  FaVuejs,
  FaAws,
  FaCogs,
  FaProjectDiagram,
  FaSitemap,
  FaClipboardList,
  FaUsers,
  FaServer,
} from 'react-icons/fa';
import {
  SiSharp,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDotnet,
  SiMongodb,
  SiRedis,
} from 'react-icons/si';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: FaReact, category: 'frontend', level: 'expert' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frontend', level: 'expert' },
  { name: 'TypeScript', icon: SiTypescript, category: 'frontend', level: 'expert' },
  { name: 'JavaScript', icon: FaJs, category: 'frontend', level: 'expert' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend', level: 'advanced' },
  { name: 'Vue.js', icon: FaVuejs, category: 'frontend', level: 'intermediate' },
  { name: 'HTML5', icon: FaHtml5, category: 'frontend', level: 'expert' },
  { name: 'CSS3', icon: FaCss3Alt, category: 'frontend', level: 'advanced' },

  // Backend - Especialidades principais
  { name: 'C#', icon: SiSharp, category: 'backend', level: 'expert' },
  { name: '.NET', icon: SiDotnet, category: 'backend', level: 'expert' },
  { name: 'Node.js', icon: FaNodeJs, category: 'backend', level: 'advanced' },
  { name: 'Python', icon: FaPython, category: 'backend', level: 'intermediate' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'backend', level: 'expert' },
  { name: 'MongoDB', icon: SiMongodb, category: 'backend', level: 'intermediate' },
  { name: 'Redis', icon: SiRedis, category: 'backend', level: 'intermediate' },
  { name: 'SQL Server', icon: FaDatabase, category: 'backend', level: 'advanced' },

  // DevOps - Especialidades principais
  { name: 'Docker', icon: FaDocker, category: 'devops', level: 'expert' },
  { name: 'Git', icon: FaGitAlt, category: 'devops', level: 'expert' },
  { name: 'AWS', icon: FaAws, category: 'devops', level: 'expert' },
  { name: 'CI/CD', icon: FaCogs, category: 'devops', level: 'advanced' },
  { name: 'Linux', icon: FaServer, category: 'devops', level: 'advanced' },

  // Other
  { name: 'REST APIs', icon: FaProjectDiagram, category: 'other', level: 'expert' },
  { name: 'GraphQL', icon: FaSitemap, category: 'other', level: 'intermediate' },
  { name: 'Microservices', icon: FaCode, category: 'other', level: 'advanced' },
  { name: 'Scrum', icon: FaUsers, category: 'other', level: 'advanced' },
  { name: 'Kanban', icon: FaClipboardList, category: 'other', level: 'advanced' },
];

export const categories: SkillCategories = {
  frontend: {
    pt: 'Frontend',
    en: 'Frontend',
  },
  backend: {
    pt: 'Backend',
    en: 'Backend',
  },
  devops: {
    pt: 'DevOps',
    en: 'DevOps',
  },
  other: {
    pt: 'Outros',
    en: 'Other',
  },
};

export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

// Especialidades principais para destacar
export const mainExpertise = ['C#', '.NET', 'PostgreSQL', 'Docker', 'Git', 'AWS'];
