import Image from 'next/image';
import Button from '@/components/ui/Button';
import { HERO_CONTENT, SITE_CONFIG } from '@/data/content';

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/hero.jpg' // Placeholder: User harus ganti
          alt='Mahasiswa Wisuda Sukses'
          fill
          priority
          className='object-cover'
          placeholder='blur'
          blurDataURL='data:image/jpeg;base64,...' // Tambahkan blur string pendek
        />
        <div className='absolute inset-0 bg-slate-900/60 md:bg-gradient-to-r md:from-slate-900/90 md:to-transparent'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10 text-center md:text-left'>
        <div className='max-w-2xl'>
          <span className='inline-block py-1 px-3 rounded-full bg-[var(--color-primary)]/20 text-teal-200 border border-teal-500/30 text-sm font-semibold mb-6 backdrop-blur-sm'>
            #1 Solusi Akademik Terpercaya
          </span>
          <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight'>
            {HERO_CONTENT.headline}
          </h1>
          <p className='text-lg md:text-xl text-slate-200 mb-8 leading-relaxed'>
            {HERO_CONTENT.subheadline}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            <Button
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              variant='primary'
              className='text-lg px-8 py-4'>
              {HERO_CONTENT.cta}
            </Button>
            <Button
              href='#services'
              variant='white'
              className='text-lg px-8 py-4'>
              Lihat Layanan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
