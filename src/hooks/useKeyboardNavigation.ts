"use client";

import { useEffect, useCallback } from "react";

export function useKeyboardNavigation() {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
  
  const navigateToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Adicionar foco para leitores de tela
      element.focus({ preventScroll: true });
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Alt + número para navegar entre seções
    if (event.altKey && event.key >= '1' && event.key <= '5') {
      event.preventDefault();
      const sectionIndex = parseInt(event.key) - 1;
      const sectionId = sections[sectionIndex];
      
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigateToSection(sectionId);
      }
    }
    
    // Esc para voltar ao topo
    if (event.key === 'Escape') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [navigateToSection, sections]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    // Adicionar hints visuais para atalhos de teclado
    const addKeyboardHints = () => {
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-hint {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1000;
          pointer-events: none;
        }
        
        body:focus-within .keyboard-hint {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .keyboard-hint {
            display: none;
          }
        }
      `;
      document.head.appendChild(style);
      
      const hint = document.createElement('div');
      hint.className = 'keyboard-hint';
      hint.innerHTML = 'Alt+1-5: Navegar | Esc: Topo';
      document.body.appendChild(hint);
    };

    addKeyboardHints();
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    navigateToSection,
    sections
  };
} 