'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export const ScrollToTop: React.FC = () => {
  const { isScrolled } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isScrolled) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#07549A] hover:bg-[#F7941D] text-white shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#07549A]"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
