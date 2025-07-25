"use client";

import { useCallback, useEffect, useMemo } from "react";

export function useKeyboardNavigation() {
  // Mover o array sections para useMemo para evitar recriação em cada render
  const sections = useMemo(() => [
    { id: 'hero', key: '1' },
    { id: 'about', key: '2' },
    { id: 'skills', key: '3' },
    { id: 'projects', key: '4' },
    { id: 'contact', key: '5' },
  ], []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Dar foco ao elemento para melhor acessibilidade
      element.focus();
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Dar foco ao elemento principal
    const main = document.querySelector('main');
    if (main) {
      main.focus();
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Ignorar se o foco estiver em um input, textarea ou elemento editável
    const activeElement = document.activeElement;
    if (
      activeElement &&
      (activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.getAttribute('contenteditable') === 'true')
    ) {
      return;
    }

    // Alt + número para navegar para seções
    if (event.altKey && !event.ctrlKey && !event.shiftKey) {
      const section = sections.find(s => s.key === event.key);
      if (section) {
        event.preventDefault();
        scrollToSection(section.id);
        return;
      }
    }

    // Esc para voltar ao topo
    if (event.key === 'Escape') {
      event.preventDefault();
      scrollToTop();
      return;
    }
  }, [sections, scrollToSection, scrollToTop]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Mostrar dicas visuais para navegação por teclado
  useEffect(() => {
    const showHints = () => {
      const hints = [
        'Alt+1: Hero',
        'Alt+2: Sobre',
        'Alt+3: Skills',
        'Alt+4: Projetos',
        'Alt+5: Contato',
        'Esc: Topo'
      ];

      console.info('🎯 Atalhos de Navegação:\n' + hints.join('\n'));
    };

    // Mostrar dicas após 2 segundos
    const timer = setTimeout(showHints, 2000);
    return () => clearTimeout(timer);
  }, []);

  return {
    scrollToSection,
    scrollToTop,
  };
} 