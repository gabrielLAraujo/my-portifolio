import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Providers } from './providers';
import { siteMetadata } from './metadata';
import { getStructuredDataScript } from '@/lib/seo/structured-data';
import './globals.css';

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={GeistSans.variable} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getStructuredDataScript() }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
