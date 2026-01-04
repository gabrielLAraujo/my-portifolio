'use client';

import Head from 'next/head';

export function PreloadResources() {
  return (
    <Head>
      {/* Preload da imagem de perfil */}
      <link rel="preload" href="/profile.jpg" as="image" type="image/jpeg" />

      {/* Preconnect para domínios externos */}
      <link rel="preconnect" href="https://api.microlink.io" />
      <link rel="dns-prefetch" href="https://api.microlink.io" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Resource hints para performance */}
      <meta name="theme-color" content="#0a0a0f" media="(prefers-color-scheme: dark)" />
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      <meta name="color-scheme" content="dark light" />

      {/* Preload de CSS crítico */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS inlined */
            :root {
              --bg-primary: #0a0a0f;
              --accent-green: #00ff88;
              --accent-purple: #7c3aed;
            }
            body { 
              margin: 0; 
              background-color: var(--bg-primary);
              font-family: system-ui, -apple-system, sans-serif; 
            }
            .theme-transition { 
              transition: background-color 0.4s ease, color 0.4s ease; 
            }
            /* Prevent layout shift */
            html { scroll-behavior: smooth; }
            /* Reduced motion */
            @media (prefers-reduced-motion: reduce) {
              *, *::before, *::after {
                animation-duration: 0.01ms !important;
                transition-duration: 0.01ms !important;
              }
            }
          `,
        }}
      />
    </Head>
  );
}
