'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { href: '#about', label: t('about') },
    { href: '#skills', label: t('skills') },
    { href: '#projects', label: t('projects') },
    { href: '#contact', label: t('contact') },
  ];

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-bg-primary/95 backdrop-blur-lg"
            onClick={onClose}
          />

          {/* Menu Content */}
          <div className="relative h-full flex flex-col p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-display font-bold gradient-text-static"
              >
                {t('portfolio')}
              </motion.span>

              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                onClick={onClose}
                className="p-2 rounded-lg bg-bg-tertiary/50 text-text-secondary hover:text-accent-green transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1">
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="group flex items-center gap-4 text-3xl font-display font-bold text-text-primary hover:text-accent-green transition-colors w-full text-left"
                    >
                      <span className="text-sm font-mono text-accent-green opacity-50 group-hover:opacity-100">
                        0{index + 1}
                      </span>
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 pt-8 border-t border-dark-border/50"
            >
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-tertiary/50 text-text-secondary hover:text-accent-green transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="font-mono text-sm uppercase">{language}</span>
              </button>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-tertiary/50 text-text-secondary hover:text-accent-green transition-colors"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span className="font-mono text-sm">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>
              )}
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-accent-green/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hamburger Button Component
export function HamburgerButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-bg-tertiary/50 backdrop-blur-sm border border-dark-border/50 hover:border-accent-green/50 transition-colors"
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={isOpen}
    >
      <div className="w-5 h-4 relative flex flex-col justify-between">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 7 : 0,
          }}
          className="w-full h-0.5 bg-current rounded-full origin-left"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
          className="w-full h-0.5 bg-current rounded-full"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -7 : 0,
          }}
          className="w-full h-0.5 bg-current rounded-full origin-left"
        />
      </div>
    </button>
  );
}
