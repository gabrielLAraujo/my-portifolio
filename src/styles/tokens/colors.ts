/**
 * Design System - Color Tokens
 *
 * Centralizes all color values used throughout the application
 */

export const colors = {
  // Primary colors
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },

  // Semantic colors for light mode
  light: {
    background: '#ffffff',
    surface: '#f8fafc',
    surfaceHover: '#f1f5f9',
    border: '#e2e8f0',
    borderHover: '#cbd5e1',
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      tertiary: '#94a3b8',
    },
    accent: '#0ea5e9',
    accentHover: '#0284c7',
  },

  // Semantic colors for dark mode
  dark: {
    background: '#0f172a',
    backgroundAlt: '#1e293b',
    surface: '#1e293b',
    surfaceHover: '#334155',
    border: '#334155',
    borderHover: '#475569',
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
    },
    accent: '#38bdf8',
    accentHover: '#7dd3fc',
  },

  // Status colors
  status: {
    success: {
      light: '#10b981',
      dark: '#34d399',
    },
    error: {
      light: '#ef4444',
      dark: '#f87171',
    },
    warning: {
      light: '#f59e0b',
      dark: '#fbbf24',
    },
    info: {
      light: '#3b82f6',
      dark: '#60a5fa',
    },
  },

  // Blue scale (used throughout the site)
  blue: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#1e3a8a',
  },
} as const;

export type ColorToken = typeof colors;
