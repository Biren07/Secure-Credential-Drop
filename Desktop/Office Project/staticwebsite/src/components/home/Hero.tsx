import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award, Ruler, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ImageReveal } from '@/components/ui/ImageReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] bg-[#F7F9FC] bg-blueprint-grid flex items-center pt-12 pb-20 overflow-hidden border-b border-slate-200/60">
      {/* Architectural blueprint decorative corner accents */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-[#07549A]/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-[#07549A]/20 pointer-events-none hidden md:block" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="orange">Nepal Registered Engineering Consultancy</Badge>
              <span className="text-xs font-semibold text-[#07549A] hidden sm:inline-block">
                • Sanepa, Lalitpur
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#063B70] tracking-tight leading-[1.1]">
              BUILD YOUR DREAM <span className="text-[#07549A]">PROJECTS</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl">
              Professional engineering, structural design and project consultancy services that turn your vision into reality. Built with structural precision and NBC code compliance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="orange" size="lg" className="shadow-md">
                Get Free Consultation
              </Button>
              <Button href="/services" variant="outline" size="lg" className="group">
                Explore Our Services{' '}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Engineering Highlights / Trust Badges */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#07549A] flex-shrink-0" />
                <span>Structural Seismic Safety (NBC 105:2020)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Ruler className="w-5 h-5 text-[#F7941D] flex-shrink-0" />
                <span>2D Architectural & ETABS 3D Analysis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#07549A] flex-shrink-0" />
                <span>Certified Valuators & Site Supervisors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Technical framing border */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-dashed border-[#07549A]/30 pointer-events-none" />
              
              <ImageReveal
                src="/images/hero/hero-engineering.jpg"
                alt="Build Dream & Design Engineering Consultancy"
                width={700}
                height={550}
                priority
                className="shadow-2xl rounded-xl"
              />

              {/* Floating Engineering Badge Card */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 shadow-xl p-4 rounded-lg hidden sm:flex items-center gap-3 max-w-xs z-20">
                <div className="w-10 h-10 rounded-md bg-[#07549A] text-white flex items-center justify-center font-bold">
                  <CheckCircle className="w-6 h-6 text-[#F7941D]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#063B70]">
                    TURNING VISION INTO REALITY
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    100% Quality & Safety Standards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
