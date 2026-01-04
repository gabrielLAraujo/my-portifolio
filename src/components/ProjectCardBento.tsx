'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { useState } from 'react';

interface ProjectCardBentoProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  index?: number;
}

export function ProjectCardBento({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  featured = false,
  index = 0,
}: ProjectCardBentoProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tilt
        tiltMaxAngleX={featured ? 5 : 8}
        tiltMaxAngleY={featured ? 5 : 8}
        perspective={1000}
        scale={1.02}
        transitionSpeed={2000}
        className="h-full"
      >
        <div
          className={`
          relative h-full rounded-2xl overflow-hidden
          bg-bg-tertiary/40 backdrop-blur-sm
          border border-dark-border/50
          transition-all duration-500
          hover:border-accent-green/30
          hover:shadow-[0_0_40px_rgba(0,255,136,0.1)]
          ${featured ? 'min-h-[400px] md:min-h-[500px]' : 'min-h-[320px]'}
        `}
        >
          {/* Image Section */}
          <div className={`relative overflow-hidden ${featured ? 'h-[60%]' : 'h-[45%]'}`}>
            {imageUrl ? (
              <>
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-green/10 to-accent-purple/10 animate-pulse" />
                )}
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className={`
                    object-cover object-top transition-all duration-700
                    ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                    group-hover:scale-105
                  `}
                  onLoad={() => setImageLoaded(true)}
                  sizes={
                    featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'
                  }
                />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-bg-tertiary to-bg-secondary flex items-center justify-center">
                <div className="text-6xl opacity-20">💻</div>
              </div>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary via-bg-tertiary/50 to-transparent" />

            {/* Featured Badge */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent-green/20 backdrop-blur-sm border border-accent-green/30"
              >
                <span className="text-xs font-mono text-accent-green">Featured</span>
              </motion.div>
            )}

            {/* Quick Actions Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute top-4 right-4 flex gap-2"
            >
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-dark-border/50 text-text-secondary hover:text-accent-green hover:border-accent-green/50 transition-all"
                  aria-label="Ver código no GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-dark-border/50 text-text-secondary hover:text-accent-green hover:border-accent-green/50 transition-all"
                  aria-label="Ver projeto ao vivo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Content Section */}
          <div className={`p-6 ${featured ? 'space-y-4' : 'space-y-3'}`}>
            {/* Title */}
            <div className="flex items-start justify-between gap-4">
              <h3
                className={`font-display font-bold text-text-primary group-hover:text-accent-green transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}
              >
                {title}
              </h3>
              <motion.div
                animate={{
                  x: isHovered ? 0 : -5,
                  y: isHovered ? 0 : 5,
                  opacity: isHovered ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-5 h-5 text-accent-green" />
              </motion.div>
            </div>

            {/* Description */}
            <p
              className={`text-text-secondary leading-relaxed ${featured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2'}`}
            >
              {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.slice(0, featured ? 6 : 4).map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
              {technologies.length > (featured ? 6 : 4) && (
                <span className="px-3 py-1.5 rounded-full text-xs font-mono text-text-muted">
                  +{technologies.length - (featured ? 6 : 4)}
                </span>
              )}
            </div>

            {/* Action Links - Only on Featured */}
            {featured && (
              <div className="flex gap-3 pt-4">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4"
                  >
                    <span>Ver Projeto</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm py-2 px-4 border border-dark-border/50 rounded-xl hover:border-accent-green/50"
                  >
                    <Github className="w-4 h-4" />
                    <span>Código</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              boxShadow: isHovered
                ? 'inset 0 0 60px rgba(0, 255, 136, 0.05)'
                : 'inset 0 0 0px rgba(0, 255, 136, 0)',
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </Tilt>
    </motion.div>
  );
}

// Compact version for smaller grid items
export function ProjectCardCompact({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  index = 0,
}: Omit<ProjectCardBentoProps, 'imageUrl' | 'featured'>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={1500}
      >
        <div
          className="
          relative p-6 rounded-2xl h-full
          bg-bg-tertiary/30 backdrop-blur-sm
          border border-dark-border/50
          transition-all duration-300
          hover:border-accent-green/30
          hover:bg-bg-tertiary/50
        "
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="p-2 rounded-lg bg-accent-green/10">
              <Github className="w-5 h-5 text-accent-green" />
            </div>
            <div className="flex gap-2">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-green transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent-green transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-display font-bold text-text-primary mb-2 group-hover:text-accent-green transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-text-secondary line-clamp-3 mb-4">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs font-mono text-text-muted">
                {tech}
              </span>
            ))}
          </div>

          {/* Corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at top right, rgba(0, 255, 136, 0.1), transparent 70%)',
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </Tilt>
    </motion.div>
  );
}
