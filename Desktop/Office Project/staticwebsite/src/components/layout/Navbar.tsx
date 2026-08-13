"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { COMPANY_DETAILS } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { isScrolled } = useScrollPosition();
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#063B70] text-slate-200 text-xs py-2 px-4 hidden md:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
              Official Engineering Consultancy • Lalitpur, Nepal
            </span>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F7941D]" />
              {COMPANY_DETAILS.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center gap-1.5 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F7941D]" />
              Call Us: {COMPANY_DETAILS.phoneFormatted}
            </a>
            <span className="text-[#F7941D] font-semibold tracking-wider text-[11px] uppercase">
              {COMPANY_DETAILS.tagline}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-[#07549A] flex items-center justify-center text-white font-extrabold text-lg shadow-sm border border-[#07549A]/20">
              <Image
                src="/image/logo.jpeg"
                alt="Build Dream & Design Logo"
                fill
                className="object-cover"
              />
              <span className="group-hover:scale-105 transition-transform">
                BDD
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black text-[#07549A] tracking-tight leading-tight group-hover:text-[#063B70] transition-colors">
                Build Dream & Design
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#F7941D] tracking-widest uppercase">
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Center */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors relative py-1 ${
                    isActive
                      ? "text-[#07549A]"
                      : "text-slate-700 hover:text-[#07549A]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F7941D] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Right */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" variant="orange" size="md">
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-slate-700 hover:text-[#07549A] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  );
};
