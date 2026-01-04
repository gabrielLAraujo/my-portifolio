'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { MeshGradient } from '@/components/effects/MeshGradient';
import { MagneticButton } from '@/components/effects/MagneticButton';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

function useScrambleText(text: string, delay: number = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let iteration = 0;

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }

        iteration += 1 / 3;
      }, 40);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay]);

  return {
    displayText:
      displayText ||
      text
        .split('')
        .map(() => '_')
        .join(''),
    isComplete,
  };
}

export function HeroSection() {
  const { t, language } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fullName = 'Gabriel Leite Araujo';
  const { displayText: scrambledName, isComplete } = useScrambleText(fullName, 500);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gabrielLAraujo', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/gabriel-leite-araujo', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gabrielleite.araujo@hotmail.com', label: 'Email' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Animated Mesh Gradient Background */}
      <MeshGradient intensity="medium" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-tertiary/50 backdrop-blur-sm border border-dark-border/50 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-sm text-text-secondary font-mono">
            {language === 'pt' ? 'Disponível para projetos' : 'Available for projects'}
          </span>
        </motion.div>

        {/* Name with Scramble Effect */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight"
        >
          <span className="gradient-text">{scrambledName}</span>
          {!isComplete && (
            <motion.span
              className="inline-block w-[4px] h-[0.8em] bg-accent-green ml-2 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, repeatType: 'reverse' }}
            />
          )}
        </motion.h1>

        {/* Profile Image with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="relative mx-auto mb-8"
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.02}
            transitionSpeed={2000}
            gyroscope={true}
            className="w-40 h-40 md:w-48 md:h-48 mx-auto"
          >
            <div className="relative w-full h-full">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-accent-green via-accent-purple to-accent-cyan animate-spin-slow">
                <div className="w-full h-full rounded-full bg-bg-primary" />
              </div>

              {/* Image container */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-green/20 to-accent-purple/20 animate-pulse rounded-full" />
                )}
                <Image
                  src="/profile.jpg"
                  alt={
                    language === 'pt'
                      ? 'Foto de perfil de Gabriel Leite Araújo'
                      : 'Profile picture of Gabriel Leite Araújo'
                  }
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 160px, 192px"
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-accent-green/20 blur-2xl -z-10" />
            </div>
          </Tilt>
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-xl md:text-2xl text-text-primary mb-4 font-display"
        >
          Full Stack Software Engineer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('heroSubtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <MagneticButton href="#projects" className="btn-primary group" strength={0.2}>
            <span>{t('viewMyProjects')}</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </MagneticButton>

          <MagneticButton href="#contact" className="btn-secondary" strength={0.2}>
            <span>{language === 'pt' ? 'Entre em Contato' : 'Get In Touch'}</span>
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-bg-tertiary/50 backdrop-blur-sm border border-dark-border/50 text-text-secondary hover:text-accent-green hover:border-accent-green/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-green transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">
            {language === 'pt' ? 'Scroll' : 'Scroll'}
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-current"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
