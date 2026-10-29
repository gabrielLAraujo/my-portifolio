import { StructuredDataPerson } from '@/types';
import { contactInfo } from '@/config/contact';

/**
 * Generate structured data for person/profile
 */
export function generatePersonStructuredData(): StructuredDataPerson {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gabriel Leite Araújo',
    jobTitle: 'Full Stack Software Engineer',
    description:
      'Full stack software engineer with 8+ years of experience in C#/.NET, React and PostgreSQL.',
    url: 'https://frauchesgabriel.work',
    image: 'https://frauchesgabriel.work/profile.jpg',
    sameAs: [contactInfo.github, contactInfo.linkedin],
    knowsAbout: [
      'C#',
      '.NET',
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Software Architecture',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São José',
      addressRegion: 'SC',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: contactInfo.email,
      contactType: 'professional',
    },
  };
}

/**
 * Generate structured data script tag
 */
export function getStructuredDataScript(): string {
  const structuredData = generatePersonStructuredData();
  return JSON.stringify(structuredData);
}
