import React from 'react';
import { Container } from '@/components/ui/Container';
import { ImageReveal } from '@/components/ui/ImageReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companyData } from '@/data/company';

export const CompanyStory: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Content */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="Our Story"
              title="ENGINEERING EXCELLENCE FOR NEPAL"
              align="left"
            />

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              <strong>Build Dream & Design Pvt. Ltd.</strong> was founded with a singular objective: to elevate structural safety and architectural aesthetics across Nepal. Operating from our central office in Sanepa, Lalitpur, we bring together multi-disciplinary engineers, structural analysts, quantity surveyors, and architectural design consultants.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Nepal’s complex seismic environment requires uncompromised engineering precision. We utilize advanced ETABS 3D computational modeling, rigorous material testing, and strict adherence to the Nepal National Building Code (NBC 105:2020) and Indian Standards (IS Code). From high-rise commercial centers in Kathmandu to custom residential villas across the valley, we take pride in safeguarding every project.
            </p>

            {/* Key stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              {companyData.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-[#07549A]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#063B70]">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story Visual */}
          <div className="lg:col-span-5 relative">
            <ImageReveal
              src="/images/about/about-engineer.jpg"
              alt="Build Dream & Design Engineering Consultancy Team"
              width={600}
              height={500}
              className="rounded-xl shadow-xl border border-slate-200"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
