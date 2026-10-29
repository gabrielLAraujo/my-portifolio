import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import { fontVariables } from './fonts';
import { siteMetadata } from './metadata';
import { getStructuredDataScript } from '@/lib/seo/structured-data';
import './globals.css';

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${fontVariables} font-body min-h-screen theme-transition antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getStructuredDataScript() }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
