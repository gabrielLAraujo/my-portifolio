export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  locale?: string;
  siteName?: string;
}

export interface StructuredDataPerson {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  sameAs: string[];
  knowsAbout: string[];
  worksFor: {
    '@type': string;
    name: string;
  };
  contactPoint: {
    '@type': string;
    email: string;
    contactType: string;
  };
}
