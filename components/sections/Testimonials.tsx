'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Pastikan utils.ts sudah ada sesuai setup sebelumnya

// 1. DATA TESTIMONI (GANTI SRC DI SINI)
// Pastikan rasio gambar screenshot HP (biasanya 9:16) agar tampil rapi.
const TESTIMONIAL_DATA = [
  {
    id: 1,
    alt: 'Testimoni Mahasiswa S1 Manajemen - Nilai A',
    src: '/images/testi1.JPG', // Ganti dengan "/images/testi-1.jpg"
  },
  {
    id: 2,
    alt: 'Testimoni Lulus Tepat Waktu Jurusan Hukum',
    src: '/images/testi2.JPG', // Ganti dengan "/images/testi-2.jpg"
  },
  {
    id: 3,
    alt: 'Testimoni Bimbingan Skripsi Teknik Informatika',
    src: '/images/testi3.JPG', // Ganti dengan "/images/testi-3.jpg"
  },
  {
    id: 4,
    alt: 'Testimoni Revisi Tesis Lancar',
    src: '/images/testi4.JPG', // Ganti dengan "/images/testi-4.jpg"
  },
  {
    id: 5,
    alt: 'Testimoni Sidang Skripsi Sukses',
    src: '/images/testi5.JPG', // Ganti dengan "/images/testi-5.jpg"
  },
  {
    id: 5,
    alt: 'Testimoni Sidang Skripsi Sukses',
    src: '/images/testi6.JPG', // Ganti dengan "/images/testi-5.jpg"
  },
  {
    id: 5,
    alt: 'Testimoni Sidang Skripsi Sukses',
    src: '/images/testi7.JPG', // Ganti dengan "/images/testi-5.jpg"
  },
];

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'; // Disable scroll page saat lightbox aktif
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, handleKeyDown]);

  return (
    <section
      id='testimonials'
      className='py-24 bg-slate-50 overflow-hidden'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            Kepercayaan Mahasiswa Kepada Kami
          </h2>
          <p className='text-lg text-slate-600'>
            Bukti nyata kepuasan mahasiswa yang telah kami bantu hingga lulus.
            <br className='hidden md:block' />
            Geser untuk melihat bukti chat asli mereka.
          </p>
        </div>

        {/* Slider Container */}
        <div className='relative group/slider'>
          {/* Scrollable Area */}
          <div className='flex overflow-x-auto gap-6 pb-12 px-4 snap-x snap-mandatory no-scrollbar md:justify-center'>
            {TESTIMONIAL_DATA.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.src)}
                className='
                  snap-center shrink-0 
                  w-[260px] h-[460px] md:w-[280px] md:h-[500px] 
                  bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                  border border-slate-200 overflow-hidden 
                  cursor-zoom-in relative transition-all duration-300 
                  hover:-translate-y-2 group/card
                '>
                {/* Image Container */}
                <div className='relative w-full h-full'>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 260px, 280px'
                    loading='lazy'
                  />

                  {/* Overlay on Hover */}
                  <div className='absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
                    <div className='opacity-0 group-hover/card:opacity-100 bg-white/90 p-3 rounded-full text-slate-900 shadow-sm transition-opacity duration-300'>
                      <ZoomIn size={24} />
                    </div>
                  </div>

                  {/* Badge Label */}
                  <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12'>
                    <p className='text-white text-xs font-medium truncate'>
                      {item.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hint for mobile scrolling */}
          <div className='md:hidden text-center text-slate-400 text-sm mt-[-20px] animate-pulse'>
            &larr; Geser untuk melihat lainnya &rarr;
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)} // Click outside to close
          role='dialog'
          aria-modal='true'>
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className='absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50'
            aria-label='Tutup gambar'>
            <X size={32} />
          </button>

          {/* Image Wrapper */}
          <div
            className='relative w-full max-w-md h-[85vh] rounded-lg overflow-hidden shadow-2xl'
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
          >
            <Image
              src={selectedImage}
              alt='Testimoni Fullscreen'
              fill
              className='object-contain'
              quality={90}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
