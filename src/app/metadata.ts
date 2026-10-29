import type { Metadata } from 'next';

const SITE_URL = 'https://frauchesgabriel.work';
const TITLE = 'Gabriel Leite Araújo · Full Stack Software Engineer (.NET, React)';
const DESCRIPTION =
  'Full stack software engineer with 8+ years of experience in C#/.NET, React and PostgreSQL. Production systems with clean architecture, automated tests and Docker deploys.';

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Gabriel Leite Araújo',
  },
  description: DESCRIPTION,
  keywords: [
    'Gabriel Leite Araújo',
    'Full Stack Software Engineer',
    'Desenvolvedor Full Stack',
    '.NET',
    'C#',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'Software Architecture',
  ],
  authors: [{ name: 'Gabriel Leite Araújo', url: SITE_URL }],
  creator: 'Gabriel Leite Araújo',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    url: SITE_URL,
    siteName: 'Gabriel Leite Araújo',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Gabriel Leite Araújo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/profile.jpg'],
  },
  icons: {
    apple: '/profile.jpg',
  },
  alternates: {
    canonical: '/',
  },
  category: 'technology',
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};
