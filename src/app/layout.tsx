'use client';

import { Providers } from './providers';
import { fontVariables } from './fonts';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/profile.jpg" />
        <meta name="google-site-verification" content="sua-verificacao-google" />
      </head>
      <body
        className={`${fontVariables} font-body min-h-screen theme-transition antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
