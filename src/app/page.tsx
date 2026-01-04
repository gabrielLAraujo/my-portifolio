'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { PreloadResources } from '@/components/PreloadResources';
import { SkipLinks } from '@/components/SkipLinks';
import { ToastContainer } from '@/components/Toast';
import { SectionTransition } from '@/components/SectionTransition';
import { ErrorBoundary } from '@/components/layout/ErrorBoundary';
import { Navbar } from '@/components/layout/Navbar';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CustomCursor } from '@/components/CustomCursor';
import { contactInfo } from '@/config/contact';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { useToast } from '@/hooks/useToast';
import { getStructuredDataScript } from '@/lib/seo/structured-data';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import {
  LoadingSkeleton,
  ProjectCardSkeleton,
  SkillCardSkeleton,
} from '@/components/LoadingSkeleton';

// Lazy loading para componentes menos críticos
const AboutSection = dynamic(
  () =>
    import('@/components/sections/AboutSection').then((mod) => ({
      default: mod.AboutSection,
    })),
  {
    loading: () => (
      <div className="py-24 bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <LoadingSkeleton variant="text" width="300px" height="40px" className="mx-auto mb-4" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <LoadingSkeleton variant="text" width="250px" height="32px" />
              <div className="space-y-4">
                <LoadingSkeleton variant="text" width="100%" height="20px" />
                <LoadingSkeleton variant="text" width="95%" height="20px" />
                <LoadingSkeleton variant="text" width="90%" height="20px" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-bg-tertiary/30 p-6 rounded-xl">
                  <LoadingSkeleton
                    variant="circle"
                    width="48px"
                    height="48px"
                    className="mx-auto mb-3"
                  />
                  <LoadingSkeleton
                    variant="text"
                    width="60px"
                    height="24px"
                    className="mx-auto mb-1"
                  />
                  <LoadingSkeleton variant="text" width="80px" height="16px" className="mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }
);

const SkillsSection = dynamic(
  () =>
    import('@/components/sections/SkillsSection').then((mod) => ({
      default: mod.SkillsSection,
    })),
  {
    loading: () => (
      <div className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <LoadingSkeleton variant="text" width="200px" height="40px" className="mx-auto mb-4" />
            <LoadingSkeleton variant="text" width="400px" height="20px" className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <SkillCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const ProjectsSection = dynamic(
  () =>
    import('@/components/sections/ProjectsSection').then((mod) => ({
      default: mod.ProjectsSection,
    })),
  {
    loading: () => (
      <div className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <LoadingSkeleton variant="text" width="200px" height="40px" className="mx-auto mb-4" />
            <LoadingSkeleton variant="text" width="500px" height="20px" className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {[...Array(2)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCardSkeleton />
          </div>
        </div>
      </div>
    ),
  }
);

const ContactSection = dynamic(
  () =>
    import('@/components/sections/ContactSection').then((mod) => ({
      default: mod.ContactSection,
    })),
  {
    loading: () => (
      <div className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <LoadingSkeleton variant="text" width="200px" height="32px" className="mx-auto mb-4" />
            <LoadingSkeleton variant="text" width="400px" height="20px" className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-bg-tertiary/30">
                  <LoadingSkeleton variant="circle" width="32px" height="32px" />
                  <LoadingSkeleton variant="text" width="150px" height="16px" />
                </div>
              ))}
            </div>
            <div className="bg-bg-tertiary/30 p-6 rounded-xl">
              <LoadingSkeleton variant="text" width="200px" height="24px" className="mb-6" />
              <div className="space-y-4">
                <LoadingSkeleton variant="text" width="100%" height="40px" />
                <LoadingSkeleton variant="text" width="100%" height="40px" />
                <LoadingSkeleton variant="card" height="120px" />
                <LoadingSkeleton variant="button" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  useKeyboardNavigation();
  const { toasts, removeToast } = useToast();
  const structuredDataScript = getStructuredDataScript();

  return (
    <ErrorBoundary>
      <SmoothScroll>
        <PreloadResources />
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: structuredDataScript,
            }}
          />
        </Head>

        <SkipLinks />
        <ToastContainer toasts={toasts} onClose={removeToast} position="top-right" />

        {/* Custom Cursor - Desktop only */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        <main id="main-content" role="main" aria-label="Conteúdo principal do portfólio">
          <ScrollProgress />
          <ScrollToTop />

          {/* Hero Section */}
          <section id="hero" aria-label="Apresentação pessoal" tabIndex={-1}>
            <HeroSection />
          </section>

          <SectionTransition />

          {/* About Section */}
          <section id="about" aria-label="Sobre mim" tabIndex={-1}>
            <Suspense
              fallback={
                <div
                  aria-live="polite"
                  aria-label="Carregando seção sobre"
                  className="text-center py-12"
                >
                  Carregando...
                </div>
              }
            >
              <AboutSection />
            </Suspense>
          </section>

          <SectionTransition />

          {/* Skills Section */}
          <section id="skills" aria-label="Minhas habilidades" tabIndex={-1}>
            <Suspense
              fallback={
                <div
                  aria-live="polite"
                  aria-label="Carregando habilidades"
                  className="text-center py-12"
                >
                  Carregando habilidades...
                </div>
              }
            >
              <SkillsSection />
            </Suspense>
          </section>

          <SectionTransition />

          {/* Projects Section */}
          <section id="projects" aria-label="Meus projetos" tabIndex={-1}>
            <Suspense
              fallback={
                <div
                  aria-live="polite"
                  aria-label="Carregando projetos"
                  className="text-center py-12"
                >
                  Carregando projetos...
                </div>
              }
            >
              <ProjectsSection />
            </Suspense>
          </section>

          <SectionTransition />

          {/* Contact Section */}
          <section id="contact" aria-label="Entre em contato" tabIndex={-1}>
            <Suspense
              fallback={
                <div
                  aria-live="polite"
                  aria-label="Carregando contato"
                  className="text-center py-12"
                >
                  Carregando contato...
                </div>
              }
            >
              <ContactSection
                githubUrl={contactInfo.github}
                linkedinUrl={contactInfo.linkedin}
                email={contactInfo.email}
                phone={contactInfo.phone}
              />
            </Suspense>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 bg-bg-primary border-t border-dark-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-text-muted text-sm">
                © {new Date().getFullYear()} Gabriel Leite Araujo. Todos os direitos reservados.
              </p>
              <p className="text-text-muted text-sm font-mono">
                Feito com <span className="text-accent-green">♥</span> usando Next.js
              </p>
            </div>
          </div>
        </footer>
      </SmoothScroll>
    </ErrorBoundary>
  );
}
