import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT } from '@/lib/data';
import { siteUrl } from '@/lib/site';
import './globals.css';

const poppins = localFont({
  src: [
    { path: './fonts/poppins-normal-400.woff2', weight: '400' },
    { path: './fonts/poppins-normal-500.woff2', weight: '500' },
    { path: './fonts/poppins-normal-600.woff2', weight: '600' },
    { path: './fonts/poppins-normal-700.woff2', weight: '700' },
  ],
  display: 'swap',
  variable: '--font-poppins',
});

const instrument = localFont({
  src: [
    { path: './fonts/instrument-serif-normal-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/instrument-serif-italic-400.woff2', weight: '400', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-instrument',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'JPS Travels | Private Sri Lanka Tours', template: '%s | JPS Travels' },
  description: 'Plan a private Sri Lanka tour with JPS Travels. Explore the Ramayana trail, Sigiriya, Ella, wildlife safaris and the coast.',
  applicationName: 'JPS Travels',
  openGraph: {
    type: 'website', locale: 'en_GB', siteName: 'JPS Travels',
    title: 'JPS Travels | Private Sri Lanka Tours',
    description: 'Private journeys across Sri Lanka, from the Ramayana trail to the island’s hill country and coast.',
    images: [{ url: '/images/sigiriya-aerial.webp', alt: 'Sigiriya Rock Fortress in Sri Lanka' }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/images/jps-icon.png' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0D469F' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'TravelAgency',
    name: 'JPS Travels', url: siteUrl, logo: `${siteUrl}/images/jps-logo.png`,
    telephone: CONTACT.phone, email: CONTACT.email,
    address: {
      '@type': 'PostalAddress', streetAddress: '188, 2nd Floor, Kandy Road',
      addressLocality: 'Kurunegala', postalCode: '60000', addressCountry: 'LK',
    },
  };

  return (
    <html lang="en-LK">
      <body className={`${poppins.variable} ${instrument.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-yellow focus:px-5 focus:py-3">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
