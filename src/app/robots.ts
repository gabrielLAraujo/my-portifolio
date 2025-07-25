import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://app.frauchesgabriel.work/sitemap.xml',
    host: 'https://app.frauchesgabriel.work',
  }
} 