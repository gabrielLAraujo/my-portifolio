'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const { t, language } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const fullName = 'Gabriel Leite Araujo';

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullName[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullName]);

  const timeline =
    language === 'pt'
      ? [
          { year: '2018', text: 'Comecei' },
          { year: '2023', text: 'Dev Fullstack' },
          { year: '2025', text: 'Portfólio ativo' },
        ]
      : [
          { year: '2018', text: 'Started' },
          { year: '2023', text: 'Fullstack Dev' },
          { year: '2025', text: 'Active Portfolio' },
        ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-dark-primary text-blue-900 dark:text-dark-text">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gradient-dark opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-dark-text mb-6 min-h-[1.2em]">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="text-blue-500 dark:text-dark-accent"
          >
            |
          </motion.span>
        </h1>

        <motion.div
          className="relative w-48 h-48 mx-auto mb-8"
          initial={{
            y: -500,
            x: 0,
            rotateY: 0,
            opacity: 0,
          }}
          animate={{
            y: 0,
            x: [0, 20, -15, 8, -3, 0], // Oscilação suave
            rotateY: [0, 180, 360, 540, 720, 0], // Flip contínuo
            opacity: 1,
          }}
          transition={{
            duration: 2.5,
            ease: 'easeOut',
            x: {
              ease: 'easeInOut',
            },
            rotateY: {
              ease: 'linear',
            },
          }}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 via-purple-500 to-green-500 dark:from-dark-accent dark:via-dark-purple dark:to-dark-accent p-1 shadow-coin">
            <div className="w-full h-full rounded-full bg-white dark:bg-dark-primary p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-purple-200 dark:from-dark-secondary dark:to-dark-surface animate-pulse rounded-full" />
                )}

                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-20">
                  <motion.div
                    className="absolute top-2 right-6 w-2 h-2 bg-white dark:bg-dark-accent rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-yellow-300 dark:bg-dark-purple rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div
                    className="absolute top-8 left-2 w-1 h-1 bg-green-400 dark:bg-dark-accent rounded-full"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: 1.5 }}
                  />
                </div>

                <Image
                  src="/profile.jpg"
                  alt={
                    language === 'pt'
                      ? 'Foto de perfil de Gabriel Leite Araújo, Full Stack Software Engineer'
                      : 'Profile picture of Gabriel Leite Araújo, Full Stack Software Engineer'
                  }
                  fill
                  className={`object-cover rounded-full ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 192px, 192px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-blue-700 dark:text-dark-text/90 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          {t('heroTitle')}
        </motion.p>

        <motion.p
          className="text-lg text-blue-600 dark:text-dark-accent mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          {t('heroSubtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('viewMyProjects')}
            <ArrowRight size={20} />
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {language === 'pt' ? 'Entre em Contato' : 'Get In Touch'}
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-0 right-0"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7 + index * 0.2 }}
              >
                <motion.div
                  className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.year}
                </motion.div>
                <div className="text-sm text-blue-700 dark:text-blue-200">{item.text}</div>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 dark:from-blue-800 dark:to-blue-600 mx-auto my-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
