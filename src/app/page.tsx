"use client";

import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { AboutSection } from "@/components/AboutSection";
import { SectionTransition } from "@/components/SectionTransition";
import { FloatingControls } from "@/components/FloatingControls";
import { contactInfo } from "@/config/contact";

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
        githubUrl={contactInfo.github}
        linkedinUrl={contactInfo.linkedin}
        email={contactInfo.email}
        phone={contactInfo.phone}
      />
    </main>
  );
}
