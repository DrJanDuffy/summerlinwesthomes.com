import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summerlin West Homes | Luxury Real Estate in Las Vegas",
  description: "Discover luxury homes and properties in Summerlin West, Las Vegas. Expert real estate services with local market knowledge and personalized attention.",
  keywords: [
    "Summerlin West Homes",
    "Las Vegas Real Estate",
    "Luxury Homes",
    "Summerlin Properties",
    "Nevada Real Estate",
    "Las Vegas Homes for Sale"
  ],
  authors: [{ name: "Summerlin West Homes" }],
  creator: "Summerlin West Homes",
  publisher: "Summerlin West Homes",
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
    title: "Summerlin West Homes | Luxury Real Estate in Las Vegas",
    description: "Discover luxury homes and properties in Summerlin West, Las Vegas. Expert real estate services with local market knowledge and personalized attention.",
    url: 'https://summerlinwesthomes.com',
    siteName: 'Summerlin West Homes',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Summerlin West Homes | Luxury Real Estate in Las Vegas",
    description: "Discover luxury homes and properties in Summerlin West, Las Vegas.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
