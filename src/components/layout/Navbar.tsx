'use client';

import { useState, useSyncExternalStore } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Globe, Moon, Sun } from 'lucide-react';
import { MobileMenu, HamburgerButton } from './MobileMenu';

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { href: '#about', label: t('about') },
    { href: '#skills', label: t('skills') },
    { href: '#projects', label: t('projects') },
    { href: '#contact', label: t('contact') },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            isScrolled
              ? 'bg-bg-primary/80 backdrop-blur-lg border-b border-dark-border/50 shadow-lg shadow-black/10'
              : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl md:text-2xl font-display font-bold gradient-text-static"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('portfolio')}
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-4 py-2 text-text-secondary hover:text-accent-green font-medium transition-colors group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.span
                    className="absolute inset-0 bg-accent-green/10 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Desktop Controls */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                className="p-2.5 rounded-lg bg-bg-tertiary/50 backdrop-blur-sm border border-dark-border/50 text-text-secondary hover:text-accent-green hover:border-accent-green/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={t('language')}
              >
                <Globe className="w-5 h-5" />
              </motion.button>

              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2.5 rounded-lg bg-bg-tertiary/50 backdrop-blur-sm border border-dark-border/50 text-text-secondary hover:text-accent-green hover:border-accent-green/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title={t('theme')}
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>
              )}

              {/* CTA Button */}
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="ml-2 px-4 py-2 rounded-lg bg-accent-green text-bg-primary font-medium hover:bg-accent-green/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === 'pt' ? 'Contato' : 'Contact'}
              </motion.a>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Language Toggle - Mobile */}
              <motion.button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-bg-tertiary/50 backdrop-blur-sm border border-dark-border/50 text-text-secondary"
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xs font-mono uppercase">{language}</span>
              </motion.button>

              {/* Hamburger */}
              <HamburgerButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
