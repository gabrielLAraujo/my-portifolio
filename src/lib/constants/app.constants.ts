/**
 * Application-wide constants
 */

export const APP_NAME = 'Gabriel Leite Araújo - Portfolio';
export const APP_DESCRIPTION = 'Full Stack Software Engineer Portfolio';
export const APP_URL = 'https://app.frauchesgabriel.work';

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/gabrielLAraujo',
  LINKEDIN: 'https://linkedin.com/in/gabrielaraujo',
} as const;

export const CONTACT_EMAIL = 'your-email@example.com';

export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const TOAST_DURATION = {
  SHORT: 3000,
  NORMAL: 5000,
  LONG: 7000,
} as const;

export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  GITHUB_STATS: '/api/github/stats',
} as const;

export const LOCAL_STORAGE_KEYS = {
  THEME: 'portfolio-theme',
  LANGUAGE: 'portfolio-language',
} as const;
