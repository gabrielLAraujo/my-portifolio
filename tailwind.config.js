/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: {
          DEFAULT: 'var(--surface)',
          muted: 'var(--surface-muted)',
        },
        line: 'var(--border)',
        ink: {
          DEFAULT: 'var(--text)',
          muted: 'var(--text-muted)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          soft: 'var(--primary-soft)',
          on: 'var(--on-primary)',
        },
        success: 'var(--success)',
        error: 'var(--error)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        eyebrow: [
          '0.8125rem',
          { lineHeight: '1.25rem', letterSpacing: '0.08em', fontWeight: '500' },
        ],
        small: ['0.875rem', { lineHeight: '1.25rem' }],
        body: ['1rem', { lineHeight: '1.625rem' }],
        lead: ['1.25rem', { lineHeight: '2rem' }],
        h3: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        h2: ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2-sm': [
          '1.75rem',
          { lineHeight: '2.25rem', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        display: ['3.5rem', { lineHeight: '3.75rem', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': [
          '2.25rem',
          { lineHeight: '2.625rem', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
      },
      borderRadius: {
        control: '8px',
        card: '12px',
      },
      boxShadow: {
        card: '0 1px 2px rgb(28 25 23 / 0.06), 0 1px 3px rgb(28 25 23 / 0.08)',
      },
      maxWidth: {
        content: '70rem',
      },
      keyframes: {
        enter: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        enter: 'enter 300ms ease-out both',
      },
    },
  },
  plugins: [],
};
