/**
 * Design System - Animation Tokens
 *
 * Defines timing functions, durations, and keyframes for animations
 */

export const animation = {
  // Timing functions (easing)
  timing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // Durations (in milliseconds)
  duration: {
    fastest: 100,
    faster: 150,
    fast: 200,
    normal: 300,
    slow: 400,
    slower: 500,
    slowest: 700,
  },

  // Delays (in milliseconds)
  delay: {
    none: 0,
    short: 100,
    normal: 200,
    long: 300,
  },
} as const;

export type AnimationToken = typeof animation;
