import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import Image from 'next/image';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Summerlin West Homes | Luxury Real Estate in Las Vegas',
  description:
    'Discover luxury homes and properties in Summerlin West, Las Vegas. Expert real estate services with local market knowledge and personalized attention.',
  keywords: [
    'Summerlin West Homes',
    'Las Vegas Real Estate',
    'Luxury Homes',
    'Summerlin Properties',
    'Nevada Real Estate',
    'Las Vegas Homes for Sale',
  ],
  authors: [{ name: 'Summerlin West Homes' }],
  creator: 'Summerlin West Homes',
  publisher: 'Summerlin West Homes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://summerlinwesthomes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Summerlin West Homes | Luxury Real Estate in Las Vegas',
    description:
      'Discover luxury homes and properties in Summerlin West, Las Vegas. Expert real estate services with local market knowledge and personalized attention.',
    url: 'https://summerlinwesthomes.com',
    siteName: 'Summerlin West Homes',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image-summerlin-west-homes.jpg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Homes - Luxury Real Estate in Las Vegas',
        type: 'image/jpeg',
      },
      {
        url: '/images/og-image-summerlin-west-homes.webp',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Homes - Luxury Real Estate in Las Vegas',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summerlin West Homes | Luxury Real Estate in Las Vegas',
    description:
      'Discover luxury homes and properties in Summerlin West, Las Vegas.',
    images: [
      {
        url: '/images/twitter-image-summerlin-west-homes.jpg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Homes - Luxury Real Estate in Las Vegas',
      },
    ],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Fonts are preloaded for performance */}
        <link
          rel="preload"
          href="/_next/static/media/569ce4b8f30dc480-s.p.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />

        {/* RealScout script loads with afterInteractive strategy */}
        <link
          rel="preload"
          href="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          as="script"
        />

        {/* RealScout Widget Styles */}
        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
          
          realscout-home-value {
            --rs-hvw-background-color: #ffffff;
            --rs-hvw-title-color: #000000;
            --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
            --rs-hvw-primary-button-text-color: #ffffff;
            --rs-hvw-primary-button-color: rgb(35, 93, 137);
            --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
            --rs-hvw-secondary-button-color: #ffffff;
            --rs-hvw-widget-width: auto;
          }
          
          realscout-advanced-search {
            --rs-as-button-text-color: #ffffff;
            --rs-as-background-color: #ffffff;
            --rs-as-button-color: #1c71c3;
            --rs-as-widget-width: 500px !important;
          }
          
          realscout-simple-search {
            --rs-ss-font-primary-color: #726a6d;
            --rs-ss-searchbar-border-color: #1d6fbd;
            --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
            --rs-ss-widget-width: 500px !important;
          }
        `}</style>

        {/* Enhanced Local Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              '@id': 'https://summerlinwesthomes.com/#organization',
              name: 'Summerlin West Homes',
              alternateName: 'Summerlin West Luxury Real Estate',
              description:
                'Premier luxury real estate agency specializing in Summerlin West, Las Vegas. Expert agents with deep local market knowledge and personalized service for discerning buyers and sellers.',
              url: 'https://summerlinwesthomes.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://summerlinwesthomes.com/images/logo-summerlin-west-homes.png',
                width: 300,
                height: 100,
              },
              image: {
                '@type': 'ImageObject',
                url: 'https://summerlinwesthomes.com/images/hero-summerlin-west-luxury-homes.jpg',
                width: 1200,
                height: 630,
              },
              telephone: '+1-702-555-0100',
              email: 'info@summerlinwesthomes.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Luxury Lane',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89135',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.1699,
                longitude: -115.1398,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Las Vegas',
                  sameAs: 'https://en.wikipedia.org/wiki/Las_Vegas',
                },
                {
                  '@type': 'Place',
                  name: 'Summerlin West',
                  description: 'Premier master-planned community in Las Vegas',
                },
              ],
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 36.1699,
                  longitude: -115.1398,
                },
                geoRadius: '15000',
              },
              openingHours: [
                'Mo-Fr 09:00-18:00',
                'Sa 10:00-16:00',
                'Su 12:00-16:00',
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-702-555-0100',
                  contactType: 'customer service',
                  availableLanguage: 'English',
                  hoursAvailable: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                    ],
                    opens: '09:00',
                    closes: '18:00',
                  },
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-702-555-0101',
                  contactType: 'sales',
                  availableLanguage: 'English',
                },
              ],
              sameAs: [
                'https://www.facebook.com/summerlinwesthomes',
                'https://www.instagram.com/summerlinwesthomes',
                'https://www.linkedin.com/company/summerlin-west-homes',
                'https://www.youtube.com/@summerlinwesthomes',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Luxury Properties in Summerlin West',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Product',
                      name: 'Luxury Homes',
                      description:
                        'Premium properties in Summerlin West communities',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Real Estate Consultation',
                      description:
                        'Expert guidance for luxury property transactions',
                    },
                  },
                ],
              },
              foundingDate: '2010',
              numberOfEmployees: '15',
              award: [
                'Top Producer - Las Vegas Real Estate',
                'Best of Summerlin - Luxury Real Estate',
                '5-Star Client Satisfaction Rating',
              ],
              review: [
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                  },
                  author: {
                    '@type': 'Person',
                    name: 'John & Jane Doe',
                  },
                  reviewBody:
                    'The Summerlin West Homes team made our home buying experience seamless and enjoyable. Their expertise in the local market is unmatched!',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
                bestRating: '5',
              },
              priceRange: '$$$',
              currenciesAccepted: 'USD',
              paymentAccepted: [
                'Cash',
                'Credit Card',
                'Check',
                'Wire Transfer',
              ],
              knowsAbout: [
                'Summerlin West Real Estate Market',
                'Luxury Home Sales',
                'Golf Course Properties',
                'New Construction',
                'Investment Properties',
                'Las Vegas Luxury Market',
              ],
              communities: [
                {
                  '@type': 'Place',
                  name: 'The Ridges',
                  description: 'Luxury golf community in Summerlin West',
                },
                {
                  '@type': 'Place',
                  name: 'The Summit',
                  description: 'Mountain living community',
                },
                {
                  '@type': 'Place',
                  name: 'Red Rock Country Club',
                  description: 'Private golf club community',
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-gray-900 antialiased`}
      >
        {/* RealScout Widget Script */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        {children}

        {/* Vercel Analytics and Performance Monitoring */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
// Force redeploy
