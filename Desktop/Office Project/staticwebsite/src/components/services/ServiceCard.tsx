import React from 'react';
import Link from 'next/link';
import {
  Layout,
  Building2,
  Cpu,
  Landmark,
  Calculator,
  HardHat,
  Coins,
  ShieldAlert,
  Palette,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { Service } from '@/types/service';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Building2,
  Cpu,
  Landmark,
  Calculator,
  HardHat,
  Coins,
  ShieldAlert,
  Palette,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className }) => {
  const IconComponent = iconMap[service.iconName] || Building2;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        'group relative bg-white border border-slate-200/80 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:border-[#F7941D] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden',
        className
      )}
    >
      {/* Top subtle indicator accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F7941D] transition-colors duration-300" />

      <div>
        {/* Header Icon */}
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-[#07549A]/10 text-[#07549A] group-hover:bg-[#07549A] group-hover:text-white flex items-center justify-center mb-3 sm:mb-5 transition-all duration-300">
          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Service Title */}
        <h3 className="text-base sm:text-xl font-bold text-[#063B70] group-hover:text-[#07549A] transition-colors mb-1.5 sm:mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4 sm:mb-6">
          {service.shortDescription}
        </p>
      </div>

      {/* Footer link arrow */}
      <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#07549A] group-hover:text-[#F7941D] transition-colors">
        <span>View Details</span>
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#F7941D]" />
      </div>
    </Link>
  );
};
