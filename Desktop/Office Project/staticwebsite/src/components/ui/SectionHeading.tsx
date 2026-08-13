import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  dark = false,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12', alignmentClasses[align], className)}>
      {badge && (
        <Badge variant={dark ? 'orange' : 'primary'} className="mb-3">
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight',
          dark ? 'text-white' : 'text-[#172033]'
        )}
      >
        {title}
      </h2>
      <div className="w-16 h-1 bg-[#F7941D] rounded-full my-3" />
      {subtitle && (
        <p
          className={cn(
            'text-sm sm:text-base leading-relaxed',
            dark ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
