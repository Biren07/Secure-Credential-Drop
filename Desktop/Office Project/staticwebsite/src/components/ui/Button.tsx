import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'orange' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[#07549A] hover:bg-[#063B70] text-white focus:ring-[#07549A] shadow-md hover:shadow-lg',
    orange: 'bg-[#F7941D] hover:bg-[#e08213] text-white focus:ring-[#F7941D] shadow-md hover:shadow-lg',
    secondary: 'bg-[#063B70] hover:bg-[#04284d] text-white focus:ring-[#063B70]',
    outline: 'border-2 border-[#07549A] text-[#07549A] hover:bg-[#07549A] hover:text-white focus:ring-[#07549A]',
    ghost: 'text-[#07549A] hover:bg-[#07549A]/10 focus:ring-[#07549A]',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wide',
    md: 'px-5 py-2.5 text-sm tracking-wide',
    lg: 'px-7 py-3.5 text-base tracking-wide',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
