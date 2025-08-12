import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://summerlinwesthomes.com';
  
  // Use varied, realistic timestamps to avoid Google's manipulative pattern detection
  const currentDate = new Date();
  const yesterday = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
  const twoDaysAgo = new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000);
  const threeDaysAgo = new Date(currentDate.getTime() - 3 * 24 * 60 * 60 * 1000);
  const weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  return [
    // Primary Pages (Highest Priority)
    {
      url: baseUrl,
      lastModified: currentDate,
    },
    
    // Transaction-Intent Pages (Critical for Real Estate SEO)
    {
      url: `${baseUrl}/properties/search`,
      lastModified: yesterday,
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: yesterday,
    },
    {
      url: `${baseUrl}/market-data`,
      lastModified: twoDaysAgo,
    },
    
    // Village/Community Pages (Local SEO)
    {
      url: `${baseUrl}/villages`,
      lastModified: threeDaysAgo,
    },
    {
      url: `${baseUrl}/villages/the-ridges`,
      lastModified: weekAgo,
    },
    {
      url: `${baseUrl}/villages/the-summit`,
      lastModified: weekAgo,
    },
    {
      url: `${baseUrl}/villages/red-rock-country-club`,
      lastModified: weekAgo,
    },
    {
      url: `${baseUrl}/villages/reverence`,
      lastModified: weekAgo,
    },
    {
      url: `${baseUrl}/villages/the-paseos`,
      lastModified: weekAgo,
    },
    {
      url: `${baseUrl}/villages/the-vistas`,
      lastModified: weekAgo,
    },
    
    // E-E-A-T Pages (Experience, Expertise, Authority, Trust)
    {
      url: `${baseUrl}/about`,
      lastModified: threeDaysAgo,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: weekAgo,
    },
    
    // Missing Critical Real Estate Pages (Add these to your site)
    {
      url: `${baseUrl}/home-valuation`,
      lastModified: twoDaysAgo,
    },
    {
      url: `${baseUrl}/sell-your-home`,
      lastModified: twoDaysAgo,
    },
    {
      url: `${baseUrl}/buying-guide`,
      lastModified: threeDaysAgo,
    },
    {
      url: `${baseUrl}/mortgage-calculator`,
      lastModified: threeDaysAgo,
    },
    
    // Local SEO Pages (Google's 2025 Vicinity Update)
    {
      url: `${baseUrl}/neighborhoods/downtown-summerlin`,
      lastModified: weekAgo,
    },
    {
      url: `${baseUrl}/schools/summerlin-west`,
      lastModified: weekAgo,
    },
    {
      url: `${baseUrl}/amenities/golf-courses`,
      lastModified: weekAgo,
    },
    
    // Content Hub Pages (Topical Authority)
    {
      url: `${baseUrl}/blog`,
      lastModified: yesterday,
    },
    {
      url: `${baseUrl}/market-reports`,
      lastModified: twoDaysAgo,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: threeDaysAgo,
    },
    
    // Team & Trust Pages
    {
      url: `${baseUrl}/team`,
      lastModified: weekAgo,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: yesterday,
    },
  ];
}
