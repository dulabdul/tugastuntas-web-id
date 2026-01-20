'use client';
import { useState } from 'react';
import { FAQ_ITEMS } from '@/data/content';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id='faq'
      className='py-20 bg-white'>
      <div className='container mx-auto px-4 max-w-3xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12'>
          Pertanyaan Umum (FAQ)
        </h2>

        <div className='space-y-4'>
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className='border border-slate-200 rounded-xl overflow-hidden'>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className='w-full flex justify-between items-center p-5 text-left bg-white hover:bg-slate-50 transition-colors'>
                <span className='font-semibold text-slate-800 pr-4'>
                  {item.q}
                </span>
                {openIndex === idx ? (
                  <ChevronUp className='text-[var(--color-primary)]' />
                ) : (
                  <ChevronDown className='text-slate-400' />
                )}
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className='bg-slate-50 px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed'>
                    <div className='pt-2 border-t border-slate-100 mt-2'>
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
