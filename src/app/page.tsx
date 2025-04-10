"use client";

import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const projects = [
  {
    title: "Dev Logger",
    description: "Sistema de logging e monitoramento para desenvolvedores, permitindo rastrear e analisar o comportamento das aplicações em tempo real.",
    technologies: ["JavaScript", "Node.js", "React", "TypeScript", "Tailwind CSS"],
    projectUrl: "https://dev-logger.vercel.app",
    githubUrl: "https://github.com/gabrielLAraujo/dev-logger",
  }
];

export default function Home() {
  const githubUrl = "https://github.com/gabrielLAraujo";
  const linkedinUrl = "https://www.linkedin.com/in/gabrielleitearaujo/";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-6">
        <AboutSection githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </div>
  );
}
