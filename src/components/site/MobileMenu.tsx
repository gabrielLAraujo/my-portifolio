'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useId, useState } from 'react';

interface MobileMenuProps {
  links: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
  cta: { href: string; label: string };
}

export function MobileMenu({ links, openLabel, closeLabel, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        className="inline-flex h-10 w-10 items-center justify-center rounded-control text-ink transition-colors duration-150 hover:bg-surface-muted"
      >
        {open ? (
          <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        )}
      </button>

      <nav
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-bg"
      >
        <ul className="container-content flex flex-col py-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-body text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="py-3">
            <a
              href={cta.href}
              className="btn-primary w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.label}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
