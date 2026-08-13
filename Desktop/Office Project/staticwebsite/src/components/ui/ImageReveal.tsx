import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
  aspectRatio,
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-slate-100 group transition-all duration-500',
        aspectRatio,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
