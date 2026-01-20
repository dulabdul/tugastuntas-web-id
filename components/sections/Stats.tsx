import { STATS } from '@/data/content';

export default function Stats() {
  return (
    <section className='relative z-20 -mt-10 mb-20'>
      <div className='container mx-auto px-4'>
        <div className='bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100'>
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className='text-center py-4'>
              <div className='text-4xl font-extrabold text-[var(--color-primary)] mb-2'>
                {stat.value}
              </div>
              <div className='text-slate-600 font-medium'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
