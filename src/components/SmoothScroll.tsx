'use client';

import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

// Componente vazio - scroll nativo do navegador
export function SmoothScroll({ children }: SmoothScrollProps) {
  return <>{children}</>;
}
