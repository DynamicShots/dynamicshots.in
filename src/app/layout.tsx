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

const siteUrl = "https://dynamicshots.in";
const siteName = "Dynamic Shots";
const siteDescription =
  "Dynamic Shots — Cinematic wedding films and emotional storytelling based in Madurai, Tamil Nadu. Specialists in wedding photography, cinematic teasers, couple reels, pre & post-wedding shoots, and drone coverage. Available across India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dynamic Shots | Cinematic Wedding Films & Photography in Madurai",
    template: "%s | Dynamic Shots",
  },
  description: siteDescription,
  keywords: [
    "wedding photography Madurai",
    "cinematic wedding films",
    "wedding videography Tamil Nadu",
    "couple reels Madurai",
    "wedding highlights video",
    "Madurai wedding photographer",
    "dynamic shots",
    "pre-wedding shoots Madurai",
    "post-wedding shoots",
    "drone wedding coverage",
    "emotional storytelling",
    "wedding teaser video",
    "south Indian wedding photography",
    "Tamil wedding videographer",
    "best wedding photographer Madurai",
    "wedding cinematography India",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Dynamic Shots | Cinematic Wedding Films & Photography",
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/LOGO_Portrait_JPG_White.jpg",
        width: 1200,
        height: 630,
        alt: "Dynamic Shots — Cinematic Wedding Films & Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Shots | Cinematic Wedding Films & Photography",
    description:
      "Cinematic wedding films and emotional storytelling. Based in Madurai, available across India.",
    site: "@dynamicshotsin",
    creator: "@dynamicshotsin",
    images: ["/LOGO_Portrait_JPG_White.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Photography",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dynamic Shots",
  alternateName: "DynamicShots",
  url: siteUrl,
  logo: `${siteUrl}/LOGO_Portrait_JPG_White.jpg`,
  image: `${siteUrl}/LOGO_Portrait_JPG_White.jpg`,
  description: siteDescription,
  telephone: "+919363223700",
  email: "contact@dynamicshots.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madurai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.9252,
    longitude: 78.1198,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  priceRange: "$$",
  serviceType: [
    "Wedding Photography",
    "Wedding Videography",
    "Cinematic Wedding Films",
    "Couple Reels",
    "Pre-Wedding Shoots",
    "Post-Wedding Shoots",
    "Drone Coverage",
  ],
  sameAs: [
    "https://instagram.com/dynamicshotsIN",
    "https://facebook.com/dynamicshotsIN",
    "https://x.com/dynamicshotsin",
    "https://threads.net/@dynamicshotsin",
    "https://in.pinterest.com/dynamicshotsIN",
    "https://linkedin.com/company/dynamicshotsin",
    "https://behance.net/dynamicshotsin",
    "https://snapchat.com/add/dynamicshotsin",
  ],
  knowsLanguage: ["en", "ta"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Photography & Videography Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cinematic Wedding Teasers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Couple Reels",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Wedding Highlights",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pre & Post-Wedding Shoots",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Drone Coverage",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
