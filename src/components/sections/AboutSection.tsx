'use client';

import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, Code2, GraduationCap, MapPin, Sparkles, Target } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const { t, language } = useLanguage();

  const stats = [
    {
      icon: Briefcase,
      value: 7,
      suffix: '+',
      label: language === 'pt' ? 'Anos de Experiência' : 'Years of Experience',
      color: 'accent-green',
    },
    {
      icon: Code2,
      value: 20,
      suffix: '+',
      label: language === 'pt' ? 'Projetos Concluídos' : 'Completed Projects',
      color: 'accent-purple',
    },
    {
      icon: GraduationCap,
      value: null,
      displayValue: 'CS',
      label: language === 'pt' ? 'Ciência da Computação' : 'Computer Science',
      color: 'accent-cyan',
    },
    {
      icon: MapPin,
      value: null,
      displayValue: 'BR',
      label: language === 'pt' ? 'Brasil' : 'Brazil',
      color: 'accent-green',
    },
  ];

  const focuses = [
    {
      icon: Target,
      text:
        language === 'pt'
          ? 'Desenvolvimento de aplicações web escaláveis'
          : 'Development of scalable web applications',
    },
    {
      icon: Sparkles,
      text:
        language === 'pt' ? 'Experiência do usuário excepcional' : 'Exceptional user experience',
    },
    {
      icon: Code2,
      text: language === 'pt' ? 'Código limpo e manutenível' : 'Clean and maintainable code',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-bg-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-background opacity-30" />

      {/* Gradient Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-accent-purple/10 text-accent-purple text-sm font-mono mb-6"
          >
            {language === 'pt' ? '// Sobre mim' : '// About me'}
          </motion.span>

          <h2 className="section-heading gradient-text-static">{t('about')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Image for Mobile */}
            <div className="lg:hidden flex justify-center mb-8">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                className="w-48 h-48"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden gradient-border">
                  <Image
                    src="/profile.jpg"
                    alt="Gabriel Leite Araujo"
                    fill
                    className="object-cover"
                  />
                </div>
              </Tilt>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-6">
                {t('aboutTitle')}
              </h3>

              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>{t('aboutDescription1')}</p>
                <p>{t('aboutDescription2')}</p>
                <p>{t('aboutDescription3')}</p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="card-glass p-6">
              <h4 className="text-lg font-display font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent-green" />
                {language === 'pt' ? 'Foco Principal' : 'Main Focus'}
              </h4>
              <ul className="space-y-3">
                {focuses.map((focus, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-text-secondary"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center">
                      <focus.icon className="w-4 h-4 text-accent-green" />
                    </span>
                    {focus.text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Image for Desktop */}
            <div className="hidden lg:flex justify-center mb-8">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                className="w-64 h-64"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-accent-green via-accent-purple to-accent-cyan animate-spin-slow">
                    <div className="w-full h-full rounded-2xl bg-bg-secondary" />
                  </div>
                  <div className="absolute inset-[4px] rounded-xl overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Gabriel Leite Araujo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-accent-green/10 blur-xl -z-10" />
                </div>
              </Tilt>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1000}
                    scale={1.02}
                    transitionSpeed={2000}
                  >
                    <div
                      className="
                      relative p-6 rounded-2xl text-center
                      bg-bg-tertiary/50 backdrop-blur-sm
                      border border-dark-border/50
                      hover:border-accent-green/30
                      transition-all duration-300
                      group
                    "
                    >
                      {/* Icon */}
                      <div
                        className={`
                        w-12 h-12 mx-auto mb-3 rounded-xl
                        bg-${stat.color}/10 
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-300
                      `}
                      >
                        <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                      </div>

                      {/* Value */}
                      <div className="text-3xl font-display font-bold text-text-primary mb-1">
                        {stat.value !== null ? (
                          <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                        ) : (
                          <span className="gradient-text-static">{stat.displayValue}</span>
                        )}
                      </div>

                      {/* Label */}
                      <div className="text-sm text-text-secondary">{stat.label}</div>

                      {/* Hover glow */}
                      <div
                        className={`
                        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 pointer-events-none
                        bg-gradient-to-br from-${stat.color}/5 to-transparent
                      `}
                      />
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
