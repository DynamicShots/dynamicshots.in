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
  title: "DynamicShots | Coming Soon",
  description:
    "DynamicShots — Professional photography that captures life in motion. Our new website is under development. Stay tuned for stunning visuals and creative storytelling.",
  keywords: [
    "photography",
    "dynamic shots",
    "professional photography",
    "creative photography",
    "photo studio",
  ],
  openGraph: {
    title: "DynamicShots | Coming Soon",
    description:
      "Professional photography that captures life in motion. Website launching soon.",
    url: "https://dynamicshots.in",
    siteName: "DynamicShots",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DynamicShots | Coming Soon",
    description:
      "Professional photography that captures life in motion. Website launching soon.",
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
