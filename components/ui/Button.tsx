import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  className,
  variant = 'primary',
  fullWidth,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] focus:ring-[var(--color-primary)] shadow-lg shadow-teal-900/20',
    outline:
      'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-teal-50',
    white: 'bg-white text-[var(--color-primary)] hover:bg-gray-100 shadow-md',
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    fullWidth && 'w-full',
    className,
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
        aria-label={typeof children === 'string' ? children : 'Button'}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...props}>
      {children}
    </button>
  );
}
