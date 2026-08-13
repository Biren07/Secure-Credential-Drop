import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'orange' | 'outline' | 'dark';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className }) => {
  const variants = {
    primary: 'bg-[#07549A]/10 text-[#07549A] border-[#07549A]/20',
    orange: 'bg-[#F7941D]/10 text-[#F7941D] border-[#F7941D]/30',
    outline: 'bg-transparent text-[#172033] border-slate-300',
    dark: 'bg-[#063B70] text-white border-white/10',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
