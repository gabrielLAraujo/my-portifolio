"use client";

import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { SectionTransition } from "@/components/SectionTransition";
import { FloatingControls } from "@/components/FloatingControls";

export default function Home() {
  return (
    <main>
      <FloatingControls />
      <HeroSection />
      <SectionTransition />
      <AboutSection />
      <SectionTransition />
      <SkillsSection />
      <SectionTransition />
      <ProjectsSection />
      <SectionTransition />
      <ContactSection 
        githubUrl="https://github.com/gabrielLAraujo"
        linkedinUrl="https://linkedin.com/in/seu-perfil"
        email="seu.email@exemplo.com"
        phone="+55 11 99999-9999"
      />
    </main>
  );
}
