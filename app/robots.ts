import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/private/',
        '/temp/',
        '/draft/',
      ],
    },
    sitemap: 'https://summerlinwesthomes.com/sitemap.xml',
    host: 'https://summerlinwesthomes.com',
  };
}
