"use client";

import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { SectionTransition } from "@/components/SectionTransition";
import { FloatingControls } from "@/components/FloatingControls";
import { ScrollToTop } from "@/components/ScrollToTop";
import { contactInfo } from "@/config/contact";
import Head from "next/head";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gabriel Leite Araújo",
    jobTitle: "Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer especializado em React, Next.js, Node.js e TypeScript. Criando soluções web modernas e eficientes com foco em experiência do usuário.",
    url: "https://app.frauchesgabriel.work",
    image: "https://app.frauchesgabriel.work/profile.jpg",
    sameAs: [contactInfo.github, contactInfo.linkedin],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "Docker",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: contactInfo.email,
      contactType: "professional",
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <main>
        <FloatingControls />
        <ScrollToTop />
        <HeroSection />
        <SectionTransition />
        <AboutSection />
        <SectionTransition />
        <SkillsSection />
        <SectionTransition />
        <ProjectsSection />
        <SectionTransition />
        <ContactSection
          githubUrl={contactInfo.github}
          linkedinUrl={contactInfo.linkedin}
          email={contactInfo.email}
          phone={contactInfo.phone}
        />
      </main>
    </>
  );
}
