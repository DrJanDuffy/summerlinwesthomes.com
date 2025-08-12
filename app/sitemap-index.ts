import { MetadataRoute } from 'next';

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = 'https://summerlinwesthomes.com';
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: currentDate,
    },
    // Future sitemaps can be added here:
    // {
    //   url: `${baseUrl}/sitemap-properties.xml`,
    //   lastModified: currentDate,
    // },
    // {
    //   url: `${baseUrl}/sitemap-blog.xml`,
    //   lastModified: currentDate,
    // },
  ];
}
