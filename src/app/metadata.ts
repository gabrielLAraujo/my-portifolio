import type { Metadata } from 'next';

export const SITE_URL = 'https://frauchesgabriel.work';

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

const ptTitle = 'Gabriel Leite Araújo · Software sob medida para empresas';
const ptDescription =
  'Painéis de gestão, sistemas internos e integrações com maquininha, banco e nota fiscal para pequenas e médias empresas. Mais de 8 anos com .NET, React e PostgreSQL.';

const enTitle = 'Gabriel Leite Araújo · Senior .NET and React engineer for contract work';
const enDescription =
  'Senior full stack engineer with 8+ years in C#/.NET, React and PostgreSQL, available for remote contract work from Brazil (UTC−3).';

const shared: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: 'Gabriel Leite Araújo', url: SITE_URL }],
  creator: 'Gabriel Leite Araújo',
  robots: { index: true, follow: true },
  icons: { apple: '/profile.jpg' },
  category: 'technology',
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

const languages = { 'pt-BR': '/', en: '/en', 'x-default': '/' };

export const siteMetadata: Metadata = {
  ...shared,
  title: { default: ptTitle, template: '%s | Gabriel Leite Araújo' },
  description: ptDescription,
  alternates: { canonical: '/', languages },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: '/',
    siteName: 'Gabriel Leite Araújo',
    title: ptTitle,
    description: ptDescription,
    images: [{ url: '/profile.jpg', width: 720, height: 1280, alt: 'Gabriel Leite Araújo' }],
  },
  twitter: {
    card: 'summary',
    title: ptTitle,
    description: ptDescription,
    images: ['/profile.jpg'],
  },
};

export const enMetadata: Metadata = {
  title: { absolute: enTitle },
  description: enDescription,
  alternates: { canonical: '/en', languages },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    url: '/en',
    siteName: 'Gabriel Leite Araújo',
    title: enTitle,
    description: enDescription,
    images: [{ url: '/profile.jpg', width: 720, height: 1280, alt: 'Gabriel Leite Araújo' }],
  },
  twitter: {
    card: 'summary',
    title: enTitle,
    description: enDescription,
    images: ['/profile.jpg'],
  },
};
