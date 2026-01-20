import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SITE_CONFIG } from '@/data/content';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// KONFIGURASI METADATA & OPENGRAPH
export const metadata: Metadata = {
  // 1. Metadata Base: Sangat PENTING untuk resolve relative path OG Image
  metadataBase: new URL(SITE_CONFIG.domain), // Pastikan domain di content.ts = 'https://tugastuntas.web.id'

  // 2. Title & Desc Dasar
  title: {
    default: 'TugasTuntas - Jasa Skripsi & Tesis Profesional',
    template: '%s | TugasTuntas', // Nanti halaman lain jadi: "Tentang Kami | TugasTuntas"
  },
  description:
    'Solusi cepat lulus kuliah. Jasa bimbingan dan pembuatan Skripsi, Tesis, dan Olah Data terpercaya. Garansi bimbingan sampai wisuda.',

  // 3. OpenGraph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: 'TugasTuntas - Jasa Skripsi & Tesis Profesional',
    description:
      'Solusi cepat lulus kuliah. Garansi bimbingan sampai wisuda. Konsultasi sekarang!',
    url: SITE_CONFIG.domain,
    siteName: 'TugasTuntas',
    locale: 'id_ID',
    type: 'website',
    // Next.js otomatis mendeteksi file opengraph-image.tsx, tapi kita bisa define manual juga
    images: [
      {
        url: '/opengraph-image', // Route otomatis ke file .tsx tadi
        width: 1200,
        height: 630,
        alt: 'TugasTuntas Preview',
      },
    ],
  },

  // 4. Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'TugasTuntas - Jasa Skripsi & Tesis Profesional',
    description:
      'Bimbingan skripsi dan tesis sampai lulus. Anti plagiasi dan privasi aman.',
    // images: ['/opengraph-image'], // Otomatis inherit dari OG biasanya
  },

  // 5. Icons
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='id'
      className='scroll-smooth'>
      {/* Tambahkan Structured Data (JSON-LD) Disini jika perlu, atau di page.tsx */}
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
