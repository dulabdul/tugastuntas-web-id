import { FEATURES } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Features() {
  return (
    <section
      id='features'
      className='py-20 bg-white'>
      <div className='container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>
            Kenapa Harus TugasTuntas?
          </h2>
          <p className='text-slate-600 mb-8 text-lg'>
            Kami berkomitmen memberikan pendampingan akademik terbaik dengan
            garansi dan tim ahli.
          </p>
          <div className='grid sm:grid-cols-2 gap-4'>
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className='flex items-center gap-3'>
                <CheckCircle2 className='text-[var(--color-primary)] flex-shrink-0' />
                <span className='font-medium text-slate-800'>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-slate-100 rounded-3xl h-[400px] flex items-center justify-center text-slate-400'>
          <Image
            src='/images/about.jpg' // Placeholder: User harus ganti
            alt='Team Images'
            width={400}
            height={400}
            className='object-cover w-full rounded-3xl'
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,...' // Tambahkan blur string pendek
          />
        </div>
      </div>
    </section>
  );
}
