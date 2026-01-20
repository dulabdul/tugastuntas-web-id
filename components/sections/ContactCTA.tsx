import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/data/content';

export default function ContactCTA() {
  return (
    <section
      id='contact'
      className='py-24 bg-[var(--color-primary)] text-white text-center'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-5xl font-bold mb-6'>
          Masih Punya Pertanyaan?
        </h2>
        <p className='text-lg text-teal-100 mb-10 max-w-2xl mx-auto'>
          Jangan ragu untuk konsultasi gratis. Tim kami siap membantu
          menyelesaikan skripsi Anda sekarang juga.
        </p>
        <Button
          href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
          variant='white'
          className='px-10 py-4 text-lg'>
          Order Sekarang
        </Button>
      </div>
    </section>
  );
}
