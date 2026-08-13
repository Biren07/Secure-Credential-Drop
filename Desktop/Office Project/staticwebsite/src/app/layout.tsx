import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://builddreamdesign.com'),
  title: 'Build Dream & Design Pvt. Ltd. | Engineering & Design Solutions',
  description:
    'Professional structural design, engineering consultancy, project supervision, quantity surveying, costing, valuation and architectural design services in Nepal.',
  keywords: [
    'Engineering Consultancy Nepal',
    'Structural Design Lalitpur',
    'Quantity Surveying Nepal',
    'Property Valuation Bank Approval',
    '2D 3D Architectural Design Kathmandu',
    'Project Supervision Civil Engineering',
    'NBC Code Seismic Structural Analysis',
  ],
  authors: [{ name: 'Build Dream & Design Pvt. Ltd.' }],
  openGraph: {
    title: 'Build Dream & Design Pvt. Ltd. | Engineering & Design Solutions',
    description:
      'Professional structural design, engineering consultancy, project supervision, quantity surveying, costing, valuation and architectural design services in Nepal.',
    url: 'https://builddreamdesign.com',
    siteName: 'Build Dream & Design Pvt. Ltd.',
    images: [
      {
        url: '/images/hero/hero-engineering.jpg',
        width: 1200,
        height: 630,
        alt: 'Build Dream & Design Engineering Consultancy Nepal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/branding/favicon.png',
    shortcut: '/images/branding/favicon.png',
    apple: '/images/branding/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-white text-[#172033] antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
