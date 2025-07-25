"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function SkipLinks() {
  const { language } = useLanguage();

  const skipLinks = [
    {
      href: "#main-content",
      label:
        language === "pt"
          ? "Ir para o conteúdo principal"
          : "Skip to main content",
    },
    {
      href: "#about",
      label: language === "pt" ? "Ir para Sobre" : "Skip to About",
    },
    {
      href: "#skills",
      label: language === "pt" ? "Ir para Habilidades" : "Skip to Skills",
    },
    {
      href: "#projects",
      label: language === "pt" ? "Ir para Projetos" : "Skip to Projects",
    },
    {
      href: "#contact",
      label: language === "pt" ? "Ir para Contato" : "Skip to Contact",
    },
  ];

  return (
    <div className="sr-only focus-within:not-sr-only">
      <nav
        aria-label={
          language === "pt"
            ? "Links de navegação rápida"
            : "Skip navigation links"
        }
        className="fixed top-0 left-0 z-[9999] bg-blue-600 text-white p-2 rounded-br-md"
      >
        <ul className="flex flex-col gap-1">
          {skipLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="block px-3 py-2 text-sm font-medium hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    // Mover foco para o elemento alvo se for focalizável
                    if (target instanceof HTMLElement && target.tabIndex >= 0) {
                      target.focus();
                    }
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
