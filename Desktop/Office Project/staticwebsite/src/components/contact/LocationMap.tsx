import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/constants';

export const LocationMap: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="p-6 bg-[#063B70] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h4 className="text-lg font-extrabold text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#F7941D]" /> Office Location
          </h4>
          <p className="text-xs text-slate-300">
            {COMPANY_DETAILS.address}
          </p>
        </div>
        <a
          href="https://maps.google.com/?q=Sanepa+Lalitpur+Nepal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F7941D] hover:bg-[#e08213] text-white text-xs font-bold rounded-lg transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" /> Open in Google Maps
        </a>
      </div>

      {/* Embedded Map Representation */}
      <div className="relative w-full h-80 bg-slate-100 flex items-center justify-center border-t border-slate-200 bg-blueprint-grid">
        <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-slate-300 shadow-lg max-w-sm">
          <div className="w-12 h-12 rounded-full bg-[#07549A] text-white flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-6 h-6 text-[#F7941D]" />
          </div>
          <h5 className="font-extrabold text-[#063B70] text-base mb-1">
            Build Dream & Design Pvt. Ltd.
          </h5>
          <p className="text-xs text-slate-600 mb-3">
            Sanepa-02, Lalitpur, Nepal (Near Central Valley Access)
          </p>
          <span className="text-[11px] font-bold text-[#07549A] bg-[#07549A]/10 px-3 py-1 rounded-full">
            Engineering Consultancy Hub
          </span>
        </div>
      </div>
    </div>
  );
};
