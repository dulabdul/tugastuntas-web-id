import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Font modern
import { SITE_CONFIG } from '@/data/content';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.name} - Jasa Skripsi & Tesis Terpercaya`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: `${SITE_CONFIG.name} - Solusi Lulus Cepat`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.domain}/images/logo.png`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.domain,
    telephone: SITE_CONFIG.whatsapp,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
    priceRange: '$$',
  };

  return (
    <html
      lang='id'
      className='scroll-smooth'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
