import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { footerNavItems } from '@/data/navigation';
import { COMPANY_DETAILS } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#063B70] text-slate-200 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center text-white font-extrabold text-base border border-white/20">
                <Image
                  src="/images/branding/logo-white.png"
                  alt="Build Dream & Design Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white leading-tight">
                  Build Dream & Design
                </h3>
                <span className="text-xs font-bold text-[#F7941D] tracking-widest uppercase">
                  Pvt. Ltd.
                </span>
              </div>
            </div>

            <p className="text-xs font-bold text-[#F7941D] tracking-wider uppercase pt-1">
              {COMPANY_DETAILS.tagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Nepal-based engineering, structural design, construction consultancy, quantity surveying, valuation and architectural design firm. Turning engineering visions into structural reality.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp */}
              <a
                href={COMPANY_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.018-1.052z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#E4405F] text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#EE1D52] text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.04.82.1v-3.5a6.37 6.37 0 00-1-.08C5.83 9.29 3 12.12 3 15.6 3 19.08 5.83 21.9 9.3 21.9c3.48 0 6.3-2.82 6.3-6.3V9.33a8.28 8.28 0 004.83 1.54v-3.5c-.28 0-.55-.02-.84-.08z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F7941D] pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNavItems.quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-[#F7941D] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-xs text-[#F7941D] group-hover:translate-x-1 transition-transform">
                      ›
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F7941D] pl-3">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNavItems.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-[#F7941D] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-xs text-[#F7941D] group-hover:translate-x-1 transition-transform">
                      ›
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F7941D] pl-3">
              Office Details
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F7941D] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F7941D] flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F7941D] uppercase tracking-wider hover:underline"
              >
                Request On-Site Inspection <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Build Dream & Design Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Nepal National Building Code (NBC) Compliant</span>
            <span>Sanepa, Lalitpur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
