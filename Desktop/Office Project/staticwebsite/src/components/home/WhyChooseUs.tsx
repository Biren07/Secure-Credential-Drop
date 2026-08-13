import React from 'react';
import { Award, Clock, Handshake, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const WhyChooseUs: React.FC = () => {
  const trustCards = [
    {
      title: 'Premium Quality',
      description: 'Professional attention to quality, seismic integrity, and high engineering precision in every structural calculation.',
      icon: Award,
    },
    {
      title: 'Timely Delivery',
      description: 'Efficient planning, fast municipal submission drawings, and disciplined on-site project execution.',
      icon: Clock,
    },
    {
      title: 'Transparent Process',
      description: 'Clear communication, accurate BOQ costing, and professional project handling without hidden surprises.',
      icon: Handshake,
    },
    {
      title: 'Reliable & Trusted',
      description: 'Dependable engineering and consultancy support backed by certified engineers in Nepal.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#F7F9FC] border-b border-slate-200/60">
      <Container>
        <SectionHeading
          badge="Why Work With Us"
          title="WHY CHOOSE BUILD DREAM & DESIGN"
          subtitle="We combine structural integrity with aesthetic design to deliver enduring construction consultancy solutions."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#07549A] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-[#07549A]/10 text-[#07549A] group-hover:bg-[#07549A] group-hover:text-white flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#F7941D] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-[#063B70] group-hover:text-[#07549A] mb-2 sm:mb-3 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold text-[#F7941D]">
                  <span>NBC Code Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
