import React from 'react';
import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/constants';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-[#063B70] text-white p-8 rounded-2xl shadow-xl space-y-8 relative overflow-hidden bg-blueprint-dark-grid">
      <div className="space-y-2">
        <span className="text-xs font-extrabold text-[#F7941D] uppercase tracking-widest">
          Head Office Location
        </span>
        <h3 className="text-2xl font-black text-white">
          BUILD DREAM & DESIGN PVT. LTD.
        </h3>
        <p className="text-xs text-slate-300">
          TURNING VISION INTO REALITY
        </p>
      </div>

      <div className="space-y-6 text-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 text-[#F7941D] flex items-center justify-center flex-shrink-0 mt-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-white mb-1">Office Address</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {COMPANY_DETAILS.address}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 text-[#F7941D] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-white mb-1">Official Email</div>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="text-xs text-slate-300 hover:text-white transition-colors"
            >
              {COMPANY_DETAILS.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 text-[#F7941D] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-white mb-1">Phone Number</div>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="text-xs text-slate-300 hover:text-white font-semibold transition-colors"
            >
              {COMPANY_DETAILS.phoneFormatted}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 text-[#F7941D] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-white mb-1">Working Hours</div>
            <p className="text-xs text-slate-300">
              Sunday – Friday: 9:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10">
        <a
          href={COMPANY_DETAILS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#F7941D] uppercase tracking-wider hover:underline"
        >
          <MessageSquare className="w-4 h-4" /> Instant Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};
