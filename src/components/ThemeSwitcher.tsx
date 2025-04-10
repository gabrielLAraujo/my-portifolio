"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-lg hover:scale-110 transition-all duration-300"
      aria-label="Alternar tema"
    >
      <div className="relative w-6 h-6 text-text-primary-light dark:text-text-primary-dark">
        <SunIcon
          className={`w-6 h-6 absolute transition-all duration-300 ${
            resolvedTheme === "dark"
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <MoonIcon
          className={`w-6 h-6 absolute transition-all duration-300 ${
            resolvedTheme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  );
} 