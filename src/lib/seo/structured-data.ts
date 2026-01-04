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
      'Full Stack Software Engineer especializado em React, Next.js, Node.js e TypeScript. Criando soluções web modernas e eficientes com foco em experiência do usuário.',
    url: 'https://app.frauchesgabriel.work',
    image: 'https://app.frauchesgabriel.work/profile.jpg',
    sameAs: [contactInfo.github, contactInfo.linkedin],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'MongoDB',
      'PostgreSQL',
      'Git',
      'Docker',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelancer',
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
