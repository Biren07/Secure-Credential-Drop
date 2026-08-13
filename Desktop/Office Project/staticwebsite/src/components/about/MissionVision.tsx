import React from 'react';
import { Target, Eye } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F9FC] border-b border-slate-200/60">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#07549A]/10 text-[#07549A] flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#F7941D]" />
            </div>
            <h3 className="text-2xl font-black text-[#063B70] mb-4">
              OUR MISSION
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              To provide top-tier structural engineering, architectural design, quantity surveying, valuation, and site supervision consultancy across Nepal. We strive to deliver structurally resilient, aesthetically modern, and cost-optimized buildings through uncompromised technical rigor.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-slate-200/80 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#07549A]/10 text-[#07549A] flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-[#07549A]" />
            </div>
            <h3 className="text-2xl font-black text-[#063B70] mb-4">
              OUR VISION
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              To be Nepal&apos;s most trusted engineering consultancy, recognized for setting benchmark standards in seismic resilience, transparent project costing, innovative architectural design, and dedicated field supervision — turning every client&apos;s vision into reality.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
