import { Project, Technology } from '@/types';

/**
 * Type guard to check if a value is a valid Project
 */
export function isProject(value: unknown): value is Project {
  if (!value || typeof value !== 'object') return false;

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.id === 'string' &&
    typeof obj.title === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.featured === 'boolean' &&
    (Array.isArray(obj.technologies) || obj.technologies === undefined) &&
    (typeof obj.links === 'object' || obj.links === undefined)
  );
}

/**
 * Type guard to check if a value is a valid Technology
 */
export function isTechnology(value: unknown): value is Technology {
  if (!value || typeof value !== 'object') return false;

  const obj = value as Record<string, unknown>;

  return typeof obj.name === 'string';
}

/**
 * Type guard to check if a value is a string array
 */
export function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

/**
 * Type guard to check if a value is an email
 */
export function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

/**
 * Type guard to check if a value is a URL
 */
export function isUrl(value: string): boolean {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}
