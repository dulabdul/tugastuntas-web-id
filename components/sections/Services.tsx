import { SERVICES } from '@/data/content';
import { BookOpen, Award, FileText, PenTool } from 'lucide-react';

const icons = [BookOpen, Award, FileText, PenTool];

export default function Services() {
  return (
    <section
      id='services'
      className='py-20 bg-slate-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            {SERVICES.title}
          </h2>
          <p className='text-slate-600'>{SERVICES.description}</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {SERVICES.items.map((item, idx) => {
            const Icon = icons[idx] || BookOpen;
            return (
              <div
                key={idx}
                className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100'>
                <div className='w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-[var(--color-primary)] mb-6'>
                  <Icon size={28} />
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-3'>
                  {item.title}
                </h3>
                <p className='text-slate-500 leading-relaxed'>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
