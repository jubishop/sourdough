import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
  metadataBase: new URL(
    process.env.SITE_URL ||
      (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : 'http://localhost:3000'),
  ),
  title: "Justin's Whole-Wheat Sourdough",
  icons: { icon: '/favicon.svg' },
  description:
    'A 100% whole-wheat, no-knead sourdough guide with starter maintenance, pump-style aliquot tracking, live timers, and a practical bake checklist.',
  openGraph: {
    title: "Justin's Whole-Wheat Sourdough",
    description: 'A practical recipe that gets better from loaf to loaf.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: "Justin's Whole-Wheat Sourdough — a practical recipe for learning from every loaf.",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Justin's Whole-Wheat Sourdough",
    description: 'A practical recipe that gets better from loaf to loaf.',
    images: [
      '/og.png',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
