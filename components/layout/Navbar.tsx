'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap } from 'lucide-react';

import Button from '@/components/ui/Button';
import { NAVIGATION, SITE_CONFIG } from '@/data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-2 group'>
          <div className='bg-[var(--color-primary)] p-2 rounded-lg text-white group-hover:scale-105 transition-transform'>
            <GraduationCap size={24} />
          </div>
          <span
            className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-6'>
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium hover:text-[var(--color-primary)] transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'}`}>
              {item.name}
            </Link>
          ))}
          <Button
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.defaultMessage)}`}
            variant={scrolled ? 'primary' : 'white'}
            className='px-5 py-2 text-sm'>
            Konsultasi
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden p-2 text-slate-600'
          aria-label='Toggle menu'>
          {isOpen ? (
            <X />
          ) : (
            <Menu
              className={
                scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'
              }
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4'>
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className='text-slate-600 font-medium py-2 border-b border-slate-50'>
              {item.name}
            </Link>
          ))}
          <Button
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            fullWidth>
            Chat WhatsApp
          </Button>
        </div>
      )}
    </header>
  );
}
