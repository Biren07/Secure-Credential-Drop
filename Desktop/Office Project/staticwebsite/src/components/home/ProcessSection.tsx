import React from 'react';
import {
  MessageSquare,
  FileSpreadsheet,
  Calculator,
  HardHat,
  CheckCircle2,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { processSteps } from '@/data/process';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  FileSpreadsheet,
  Calculator,
  HardHat,
  CheckCircle2,
};

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white border-b border-slate-100 relative overflow-hidden bg-blueprint-grid">
      {/* Decorative technical line graphic */}
      <div className="absolute top-12 left-0 w-72 h-72 border border-[#07549A]/10 rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-80 h-80 border border-[#07549A]/10 rounded-full translate-x-1/2 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Structured Methodology"
          title="HOW WE WORK"
          subtitle="Our systematic 5-stage engineering workflow guarantees safety, budget control, NBC code compliance, and flawless execution."
        />

        {/* Process Cards Grid (2-cols on mobile, 3-cols on tablet, 5-cols on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          {processSteps.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || CheckCircle2;
            const isLast = idx === processSteps.length - 1;

            return (
              <div
                key={item.step}
                className="group relative bg-[#F7F9FC] border border-slate-200/80 rounded-2xl p-4 sm:p-6 hover:bg-white hover:border-[#F7941D] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top status bar accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-[#07549A] group-hover:bg-[#F7941D] transition-colors duration-300" />

                {/* Big Step Number Watermark */}
                <div className="absolute top-3 right-4 text-3xl sm:text-4xl font-black text-slate-200 group-hover:text-[#F7941D]/20 transition-colors pointer-events-none select-none">
                  {item.step}
                </div>

                <div>
                  {/* Step Badge */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#07549A]/10 text-[#07549A] group-hover:bg-[#F7941D] group-hover:text-white text-[10px] sm:text-xs font-black uppercase tracking-wider mb-4 transition-colors">
                    Stage {item.step}
                  </div>

                  {/* Icon Box */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#07549A] text-white group-hover:bg-[#063B70] flex items-center justify-center mb-3 sm:mb-4 shadow-md group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7941D]" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-[#063B70] group-hover:text-[#07549A] transition-colors mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow indicator for desktop flow */}
                {!isLast && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-[#07549A] group-hover:text-[#F7941D]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#063B70] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 bg-blueprint-dark-grid">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#F7941D]" /> Engineering Safety & NBC Code Standard
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Every phase from 01 Consultation to 05 Completion is overseen by licensed structural civil engineers.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#F7941D] hover:bg-[#e08213] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors flex-shrink-0"
          >
            Start Stage 01 Consultation
          </a>
        </div>
      </Container>
    </section>
  );
};
