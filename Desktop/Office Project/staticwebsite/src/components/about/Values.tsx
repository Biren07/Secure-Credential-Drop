import React from 'react';
import { ShieldCheck, HeartHandshake, Zap, Compass } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Values: React.FC = () => {
  const values = [
    {
      title: 'Structural Safety First',
      desc: 'Zero compromise on structural load factors, rebar specifications, and seismic safety guidelines.',
      icon: ShieldCheck,
    },
    {
      title: 'Client Integrity & Transparency',
      desc: 'Accurate BOQs, honest valuation reports, and transparent contractor oversight.',
      icon: HeartHandshake,
    },
    {
      title: 'Engineering Innovation',
      desc: 'Leveraging 3D CAD, ETABS simulations, and modern construction techniques.',
      icon: Zap,
    },
    {
      title: 'Quality Supervision',
      desc: 'Continuous on-site field verification from foundation excavation to final slab pour.',
      icon: Compass,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          badge="Guiding Principles"
          title="OUR CORE VALUES"
          subtitle="The fundamental pillars that define our work culture and engineering commitment."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F9FC] border border-slate-200/80 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#07549A] text-white flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#F7941D]" />
                </div>
                <h4 className="text-lg font-bold text-[#063B70] mb-2">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
