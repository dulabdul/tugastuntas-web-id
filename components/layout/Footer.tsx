import { NAVIGATION, SITE_CONFIG } from '@/data/content';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-slate-300 py-12'>
      <div className='container mx-auto px-4 grid md:grid-cols-4 gap-8'>
        <div className='col-span-1 md:col-span-2'>
          <h3 className='text-white text-xl font-bold mb-4'>
            {SITE_CONFIG.name}
          </h3>
          <p className='mb-4 max-w-sm text-sm leading-relaxed'>
            {SITE_CONFIG.description}
          </p>
          <p className='text-xs text-slate-500'>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>

        <div>
          <h4 className='text-white font-semibold mb-4'>Navigasi</h4>
          <ul className='space-y-2 text-sm'>
            {NAVIGATION.slice(0, 4).map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className='hover:text-[var(--color-primary)]'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-white font-semibold mb-4'>Kontak</h4>
          <p className='text-sm mb-2'>WhatsApp: +{SITE_CONFIG.whatsapp}</p>
          <p className='text-sm'>Senin - Minggu: 24 Jam</p>
        </div>
      </div>
    </footer>
  );
}
