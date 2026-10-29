'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
  label: string;
}

export function ThemeToggle({ label }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-control text-ink-muted transition-colors duration-150 hover:bg-surface-muted hover:text-ink"
    >
      <Sun className="hidden h-5 w-5 dark:block" strokeWidth={1.75} aria-hidden="true" />
      <Moon className="h-5 w-5 dark:hidden" strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
