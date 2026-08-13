import React from 'react';
import {
  Building,
  DraftingCompass,
  Briefcase,
  Calculator,
  Kanban,
  CheckCircle,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ImageReveal } from '@/components/ui/ImageReveal';

export const ExpertiseSection: React.FC = () => {
  const expertiseItems = [
    {
      title: 'Structural Engineering',
      desc: 'Finite element dynamic analysis (ETABS) and NBC 105:2020 seismic framing.',
      icon: Building,
    },
    {
      title: 'Architectural Design',
      desc: 'Modern 2D CAD floor plans, elevation drafting, and 3D architectural renders.',
      icon: DraftingCompass,
    },
    {
      title: 'Construction Consultancy',
      desc: 'Comprehensive project management, site safety, and contractor oversight.',
      icon: Briefcase,
    },
    {
      title: 'Quantity Surveying',
      desc: 'Detailed Bill of Quantities (BOQ), material estimations, and cost auditing.',
      icon: Calculator,
    },
    {
      title: 'Project Management',
      desc: 'Quality control, project scheduling, milestone auditing, and risk management.',
      icon: Kanban,
    },
    {
      title: 'Structural Inspection',
      desc: 'Non-destructive testing, post-earthquake structural audits, and retrofitting design.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-[#063B70] text-white relative overflow-hidden bg-blueprint-dark-grid">
      {/* Decorative technical line geometry background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 border border-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 border border-white/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Technical Competence"
          title="ENGINEERING EXPERTISE & CAPABILITIES"
          subtitle="Combining advanced computational analysis with hands-on field experience across Nepalese engineering landscape."
          dark={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: 6 Expertise Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-6">
            {expertiseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-5 hover:bg-white/10 hover:border-[#F7941D]/50 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#F7941D]/20 text-[#F7941D] group-hover:bg-[#F7941D] group-hover:text-white flex items-center justify-center mb-2 sm:mb-3 transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-[#F7941D] transition-colors mb-1 sm:mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Technical Image Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-2 rounded-2xl border border-white/20 bg-white/5">
              <ImageReveal
                src="/images/services/structural-analysis.jpg"
                alt="Engineering Analysis and Structural Calculation"
                width={600}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#063B70]/90 backdrop-blur-md p-4 rounded-lg border border-white/10 text-xs">
                <div className="font-extrabold text-[#F7941D] uppercase tracking-wider mb-1">
                  Nepal National Building Code (NBC)
                </div>
                <p className="text-slate-300">
                  Fully verified using ETABS dynamic earthquake simulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
