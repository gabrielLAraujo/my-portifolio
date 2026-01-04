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
  FaFileCode,
} from 'react-icons/fa';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: FaReact, category: 'frontend', level: 'expert' },
  { name: 'JavaScript', icon: FaJs, category: 'frontend', level: 'expert' },
  { name: 'TypeScript', icon: FaFileCode, category: 'frontend', level: 'advanced' },
  { name: 'Vue.js', icon: FaVuejs, category: 'frontend', level: 'intermediate' },
  { name: 'HTML5', icon: FaHtml5, category: 'frontend', level: 'expert' },
  { name: 'CSS3', icon: FaCss3Alt, category: 'frontend', level: 'advanced' },

  // Backend
  { name: 'Node.js', icon: FaNodeJs, category: 'backend', level: 'advanced' },
  { name: 'C#', icon: FaCode, category: 'backend', level: 'intermediate' },
  { name: 'Python', icon: FaPython, category: 'backend', level: 'intermediate' },
  { name: 'MongoDB', icon: FaDatabase, category: 'backend', level: 'intermediate' },
  { name: 'PostgreSQL', icon: FaDatabase, category: 'backend', level: 'intermediate' },

  // DevOps
  { name: 'Docker', icon: FaDocker, category: 'devops', level: 'intermediate' },
  { name: 'Git', icon: FaGitAlt, category: 'devops', level: 'advanced' },
  { name: 'AWS', icon: FaAws, category: 'devops', level: 'beginner' },
  { name: 'CI/CD', icon: FaCogs, category: 'devops', level: 'intermediate' },

  // Other
  { name: 'REST', icon: FaProjectDiagram, category: 'other', level: 'advanced' },
  { name: 'GraphQL', icon: FaSitemap, category: 'other', level: 'intermediate' },
  { name: 'Kanban', icon: FaClipboardList, category: 'other', level: 'advanced' },
  { name: 'Scrum', icon: FaUsers, category: 'other', level: 'advanced' },
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
