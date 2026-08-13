'use client';

import React from 'react';
import { ProjectCategory } from '@/types/project';
import { cn } from '@/lib/utils';

interface ProjectFilterProps {
  categories: (ProjectCategory | 'All')[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              'px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 border focus:outline-none',
              isActive
                ? 'bg-[#07549A] text-white border-[#07549A] shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:border-[#07549A]/40 hover:text-[#07549A]'
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
