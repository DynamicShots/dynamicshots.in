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
  title: "Dynamic Shots | Cinematic Wedding Films & Photography",
  description:
    "Dynamic Shots — Cinematic wedding films and emotional storytelling based in Madurai. We specialize in wedding photography, couple reels, and post-wedding highlights. Available across India.",
  keywords: [
    "wedding photography",
    "cinematic wedding films",
    "couple reels",
    "wedding highlights",
    "Madurai wedding photographer",
    "dynamic shots",
    "pre-wedding shoots",
    "drone coverage",
    "emotional storytelling",
  ],
  openGraph: {
    title: "Dynamic Shots | Cinematic Wedding Films & Photography",
    description:
      "Cinematic wedding films and emotional storytelling. Based in Madurai, available across India.",
    url: "https://dynamicshots.in",
    siteName: "Dynamic Shots",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Shots | Cinematic Wedding Films & Photography",
    description:
      "Cinematic wedding films and emotional storytelling. Based in Madurai, available across India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
