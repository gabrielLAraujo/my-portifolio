import { ComponentType } from 'react';

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'other';

export interface Skill {
  name: string;
  icon: ComponentType<{ className?: string }>;
  category: SkillCategory;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience?: number;
}

export interface SkillCategoryConfig {
  pt: string;
  en: string;
}

export type SkillCategories = Record<SkillCategory, SkillCategoryConfig>;
