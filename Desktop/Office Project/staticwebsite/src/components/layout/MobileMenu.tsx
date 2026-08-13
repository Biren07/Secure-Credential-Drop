'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { mainNavItems } from '@/data/navigation';
import { COMPANY_DETAILS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-[#07549A]">
                Build Dream & Design
              </span>
              <span className="text-[10px] tracking-wider font-semibold text-[#F7941D]">
                TURNING VISION INTO REALITY
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-2">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#07549A]/10 text-[#07549A]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#07549A]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Info & CTA */}
        <div className="pt-6 border-t border-slate-100 space-y-4">
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F7941D] flex-shrink-0" />
              <span>{COMPANY_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F7941D] flex-shrink-0" />
              <span>{COMPANY_DETAILS.phoneFormatted}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F7941D] flex-shrink-0" />
              <span>{COMPANY_DETAILS.email}</span>
            </div>
          </div>

          <Button
            href="/contact"
            variant="orange"
            size="md"
            className="w-full"
            onClick={onClose}
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};
