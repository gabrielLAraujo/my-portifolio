"use client";

import Head from "next/head";

export function PreloadResources() {
  return (
    <Head>
      {/* Preload de fontes críticas */}
      <link
        rel="preload"
        href="/_next/static/css/fonts.css"
        as="style"
        onLoad={(e) => {
          const target = e.target as HTMLLinkElement;
          target.onload = null;
          target.rel = "stylesheet";
        }}
      />

      {/* Preload da imagem de perfil */}
      <link rel="preload" href="/profile.jpg" as="image" type="image/jpeg" />

      {/* Preconnect para domínios externos */}
      <link rel="preconnect" href="https://api.microlink.io" />
      <link rel="dns-prefetch" href="https://api.microlink.io" />

      {/* Prefetch de recursos importantes */}
      <link rel="prefetch" href="/_next/static/chunks/pages/index.js" />

      {/* Resource hints para performance */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="color-scheme" content="light dark" />

      {/* Preload de CSS crítico */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS inlined */
            body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
            .theme-transition { transition: background-color 0.3s ease, color 0.3s ease; }
            .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: .5; }
            }
          `,
        }}
      />
    </Head>
  );
}
