export type ProjectStatus = 'active' | 'archived' | 'in-progress' | 'completed';

export interface ProjectLinks {
  github?: string;
  live?: string;
  documentation?: string;
  demo?: string;
}

export interface ProjectMetadata {
  createdAt?: string;
  updatedAt?: string;
  stars?: number;
  forks?: number;
  views?: number;
}

export interface Technology {
  name: string;
  category?: 'frontend' | 'backend' | 'devops' | 'testing' | 'other';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[] | Technology[];
  links: ProjectLinks;
  metadata?: ProjectMetadata;
  featured: boolean;
  status?: ProjectStatus;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}
