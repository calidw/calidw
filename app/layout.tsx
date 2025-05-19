import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

// We'll use the static schema data to avoid hydration issues
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://calidw.com/#business",
      "name": "Cali Door & Window",
      "url": "https://calidw.com",
      "logo": "https://calidw.com/calidw.png",
      "image": "https://calidw.com/images/og-image.jpg",
      "description": "Premium quality doors and windows for residential and commercial properties. Serving the greater Los Angeles area with expert installation and energy-efficient solutions.",
      "priceRange": "$$",
      "telephone": "+1-818-282-3437",
      "email": "sales@calidw.com",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "34.1425",
          "longitude": "-118.2551"
        },
        "geoRadius": "50 mi"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3746 Foothill Boulevard #1254",
        "addressLocality": "Glendale",
        "addressRegion": "CA",
        "postalCode": "91214",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "34.1425",
        "longitude": "-118.2551"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "sameAs": [
        "https://www.yelp.com/biz/cali-doors-and-windows-glendale"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://calidw.com/#website",
      "url": "https://calidw.com",
      "name": "Cali Door & Window",
      "description": "Premium doors and windows for your California home",
      "publisher": {
        "@id": "https://calidw.com/#business"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://calidw.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://calidw.com/#webpage",
      "url": "https://calidw.com",
      "name": "Cali Door & Window - Premium Doors and Windows for Your Home",
      "isPartOf": {
        "@id": "https://calidw.com/#website"
      },
      "about": {
        "@id": "https://calidw.com/#business"
      },
      "description": "Discover premium quality doors and windows for your home with expert installation and exceptional customer service.",
      "inLanguage": "en-US"
    }
  ]
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Cali Door & Window',
    default: 'Cali Door & Window - Premium Doors and Windows for Your Home',
  },
  description: "Discover premium quality doors and windows for your home with expert installation and exceptional customer service.",
  keywords: "doors, windows, home improvement, energy efficient windows, sliding doors, entry doors, replacement windows, California windows, door installation, window installation",
  metadataBase: new URL('https://calidw.com'),
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calidw.com',
    siteName: 'Cali Door & Window',
    title: 'Premium Doors and Windows for Your California Home',
    description: 'Elevate your home with premium quality doors and windows. Energy-efficient solutions with expert installation throughout California.',
    images: [
      {
        url: 'https://calidw.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cali Door & Window - Premium Doors and Windows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cali Door & Window - Premium Quality Doors and Windows',
    description: 'Elevate your home with premium quality doors and windows. Energy-efficient solutions with expert installation throughout California.',
    images: ['https://calidw.com/images/twitter-card.jpg'],
    creator: '@calidw',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code when available
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ]
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-full`}
      >
        {/* Add JSON-LD using Next.js Script component */}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
        {children}
      </body>
    </html>
  );
}
