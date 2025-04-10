"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { skillColors } from "@/data/skillColors";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProfileDataProps {
  githubUrl: string;
  linkedinUrl: string;
}

interface ProfileInfo {
  name: string;
  bio: string;
  location: string;
  email: string;
  skills: string[];
  projects: {
    title: string;
    description: string;
    features?: string[];
    technologies: string[];
    url: string;
    previewUrl?: string;
  }[];
}

export function ProfileData({ githubUrl, linkedinUrl }: ProfileDataProps) {
  const { t, language } = useLanguage();

  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    name: "Gabriel Leite Araújo",
    bio: language === "pt" 
      ? "Desenvolvedor Full Stack apaixonado por criar soluções web modernas e eficientes. Especializado em desenvolvimento de aplicações web com foco em experiência do usuário e boas práticas de programação."
      : "Full Stack Developer passionate about creating modern and efficient web solutions. Specialized in web application development with a focus on user experience and programming best practices.",
    location: "Brasil",
    email: "bfrauches@gmail.com",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "APIs REST",
      "Formulários",
      "Datasets"
    ],
    projects: [
      {
        title: "Dev Logger",
        description: language === "pt"
          ? "Sistema para registro e acompanhamento de commits e projetos de desenvolvimento. Permite gerenciar projetos, visualizar commits em tempo real e gerar relatórios de produtividade. Integração com GitHub para sincronização automática de dados."
          : "Development tracking system for commits and projects. Manage projects, view commits in real-time, and generate productivity reports. GitHub integration for automatic data synchronization.",
        features: language === "pt" ? [
          "Gerenciamento de projetos e repositórios",
          "Sincronização automática com GitHub",
          "Registro e visualização de commits",
          "Relatórios detalhados de produtividade",
          "Definição de horários de trabalho",
          "Autenticação via GitHub"
        ] : [
          "Project and repository management",
          "Automatic GitHub synchronization",
          "Commit logging and visualization",
          "Detailed productivity reports",
          "Work schedule definition",
          "GitHub authentication"
        ],
        technologies: ["JavaScript", "Node.js", "React", "TypeScript", "Tailwind CSS", "Next.js", "GitHub API"],
        url: "https://github.com/gabrielLAraujo/dev-logger",
        previewUrl: "https://dev-logger.vercel.app"
      }
    ]
  });

  useEffect(() => {
    setProfileInfo(prev => ({
      ...prev,
      bio: language === "pt" 
        ? "Desenvolvedor Full Stack apaixonado por criar soluções web modernas e eficientes. Especializado em desenvolvimento de aplicações web com foco em experiência do usuário e boas práticas de programação."
        : "Full Stack Developer passionate about creating modern and efficient web solutions. Specialized in web application development with a focus on user experience and programming best practices.",
      projects: prev.projects.map(project => ({
        ...project,
        description: language === "pt"
          ? "Sistema para registro e acompanhamento de commits e projetos de desenvolvimento. Permite gerenciar projetos, visualizar commits em tempo real e gerar relatórios de produtividade. Integração com GitHub para sincronização automática de dados."
          : "Development tracking system for commits and projects. Manage projects, view commits in real-time, and generate productivity reports. GitHub integration for automatic data synchronization.",
        features: language === "pt" ? [
          "Gerenciamento de projetos e repositórios",
          "Sincronização automática com GitHub",
          "Registro e visualização de commits",
          "Relatórios detalhados de produtividade",
          "Definição de horários de trabalho",
          "Autenticação via GitHub"
        ] : [
          "Project and repository management",
          "Automatic GitHub synchronization",
          "Commit logging and visualization",
          "Detailed productivity reports",
          "Work schedule definition",
          "GitHub authentication"
        ]
      }))
    }));
  }, [language]);

  const LinkButton = ({ href, icon: Icon, children, className = "" }: { 
    href: string; 
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 
        ${className || 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
    >
      <Icon className="text-lg" />
      <span>{children}</span>
    </a>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <LinkButton href={githubUrl} icon={FaGithub}>
            GitHub
          </LinkButton>
          <LinkButton href={linkedinUrl} icon={FaLinkedin}>
            LinkedIn
          </LinkButton>
        </div>
       
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-4">{profileInfo.name}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{profileInfo.bio}</p>
        <p className="text-gray-600 dark:text-gray-300">{profileInfo.location}</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-xl font-bold mb-4">{t.skills}</h3>
        <div className="flex flex-wrap gap-2">
          {profileInfo.skills.map((skill) => {
            const colors = skillColors[skill] || { bg: "#6b7280", text: "#ffffff" };
            return (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
                style={{
                  backgroundColor: colors.bg,
                  color: colors.text
                }}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-xl font-bold mb-4">{t.projects}</h3>
        <div className="grid grid-cols-1 gap-6">
          {profileInfo.projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 
                dark:hover:border-gray-600 transition-all duration-200 hover:shadow-lg"
            >
              <h4 className="text-xl font-bold mb-3">{project.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-6">
                <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {language === "pt" ? "Recursos Principais" : "Key Features"}
                </h5>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {project.features?.map((feature, index) => (
                    <li key={index} className="ml-4">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => {
                  const colors = skillColors[tech] || { bg: "#6b7280", text: "#ffffff" };
                  return (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-4">
                <LinkButton 
                  href={project.url}
                  icon={FaCode}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {t.viewCode}
                </LinkButton>
                {project.previewUrl && (
                  <LinkButton
                    href={project.previewUrl}
                    icon={FaExternalLinkAlt}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    {t.viewPreview}
                  </LinkButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 