/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Background Hierarchy - Dark Mode Premium
        bg: {
          primary: '#0a0a0f',
          secondary: '#12121a',
          tertiary: '#1a1a2e',
          elevated: '#242438',
        },
        // Accent Gradient Signature
        accent: {
          green: '#00ff88',
          purple: '#7c3aed',
          cyan: '#00d4ff',
          pink: '#ff0080',
        },
        // Text Hierarchy
        text: {
          primary: '#f0f0f0',
          secondary: '#8892b0',
          muted: '#495670',
        },
        // Legacy colors for compatibility
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
        },
        dark: {
          primary: '#0a0a0f',
          secondary: '#12121a',
          surface: '#1a1a2e',
          accent: '#00ff88',
          purple: '#7c3aed',
          cyan: '#00d4ff',
          text: '#f0f0f0',
          muted: '#8892b0',
          border: '#2a2a3e',
        },
        surface: {
          light: '#f8fafc',
          dark: '#12121a',
        },
        border: {
          light: '#e2e8f0',
          dark: '#2a2a3e',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'coin-flip': 'coinFlip 2s ease-out forwards',
        'coin-bounce': 'coinBounce 0.5s ease-out 2s forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        gradient: 'gradient 8s ease infinite',
        'gradient-slow': 'gradient 15s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        shimmer: 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        coinFlip: {
          '0%': {
            transform: 'translateY(-100vh) rotateY(0deg) scale(0.1)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(-20px) rotateY(1800deg) scale(1.1)',
            opacity: '1',
          },
          '70%': {
            transform: 'translateY(10px) rotateY(1800deg) scale(0.95)',
          },
          '85%': {
            transform: 'translateY(-5px) rotateY(1800deg) scale(1.02)',
          },
          '100%': {
            transform: 'translateY(0) rotateY(1800deg) scale(1)',
            opacity: '1',
          },
        },
        coinBounce: {
          '0%': {
            transform: 'translateY(0) rotateY(1800deg) scale(1)',
          },
          '30%': {
            transform: 'translateY(-10px) rotateY(1800deg) scale(1.05)',
          },
          '60%': {
            transform: 'translateY(5px) rotateY(1800deg) scale(0.98)',
          },
          '100%': {
            transform: 'translateY(0) rotateY(1800deg) scale(1)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        gradient: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
          },
          '100%': {
            boxShadow: '0 0 40px rgba(0, 255, 136, 0.6), 0 0 60px rgba(124, 58, 237, 0.3)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        bounceSubtle: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
      boxShadow: {
        coin: '0 10px 30px rgba(0, 255, 136, 0.3), 0 0 20px rgba(124, 58, 237, 0.2)',
        'dark-lg': '0 10px 25px rgba(0, 0, 0, 0.5)',
        glow: '0 0 20px rgba(0, 255, 136, 0.4)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.4)',
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 255, 136, 0.3), 0 0 80px rgba(124, 58, 237, 0.2)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 136, 0.1)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #1a1a2e 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00ff88, #7c3aed)',
        'gradient-accent-reverse': 'linear-gradient(135deg, #7c3aed, #00ff88)',
        'gradient-cyan': 'linear-gradient(135deg, #00d4ff, #7c3aed)',
        'gradient-signature': 'linear-gradient(135deg, #00ff88, #7c3aed, #00d4ff)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, rgba(0, 255, 136, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(124, 58, 237, 0.15) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(0, 212, 255, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(255, 0, 128, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(0, 255, 136, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 100%, rgba(124, 58, 237, 0.1) 0px, transparent 50%)
        `,
        'grid-pattern': `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        'dot-pattern': 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'gradient-size': '200% 200%',
        'grid-size': '50px 50px',
        'dot-size': '20px 20px',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
      },
      scale: {
        102: '1.02',
        103: '1.03',
      },
      blur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    },
  },
  plugins: [],
};
