import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
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
        {/* RealScout Widget Styles */}
        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
        `}</style>
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Summerlin West Homes',
              url: 'https://summerlinwesthomes.com',
              telephone: '+1-702-555-0100',
              email: 'info@summerlinwesthomes.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Luxury Lane',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89135',
                addressCountry: 'US'
              }
            })
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
      </body>
    </html>
  );
}
