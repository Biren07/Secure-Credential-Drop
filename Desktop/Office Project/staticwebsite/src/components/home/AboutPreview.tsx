import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ImageReveal } from '@/components/ui/ImageReveal';

export const AboutPreview: React.FC = () => {
  const highlights = [
    'Comprehensive Engineering Expertise across Nepal',
    'Earthquake-Resistant Structural Design & Analysis',
    'End-to-End Construction Consultancy & BOQ Preparation',
    'Rigorous On-Site Engineering Supervision & Quality Control',
    'Practical, Cost-Effective & Code-Compliant Building Solutions',
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <ImageReveal
                src="/images/about/about-engineer.jpg"
                alt="Build Dream & Design Engineers at work"
                width={650}
                height={500}
                className="shadow-lg rounded-xl"
              />
              {/* Technical architectural overlay badge */}
              <div className="absolute top-4 right-4 bg-[#063B70] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md">
                Sanepa, Lalitpur
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <Badge variant="primary">About Build Dream & Design</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B70] tracking-tight">
                WE BUILD WHAT YOU WANT
              </h2>
              <div className="w-16 h-1 bg-[#F7941D] rounded-full" />
            </div>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              <strong>Build Dream & Design Pvt. Ltd.</strong> is a leading engineering, structural design, and construction consultancy based in Sanepa, Lalitpur, Nepal. Guided by our motto <em>“Turning Vision into Reality”</em>, we specialize in delivering safe, aesthetic, and earthquake-resilient structures.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are planning a modern multi-story residential home, commercial complex, or require property valuation and project supervision, our certified civil and structural engineers provide practical solutions backed by rigorous technical standards.
            </p>

            {/* Key points checklist */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#172033]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center gap-4">
              <Button href="/about" variant="primary" size="md">
                Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/contact" variant="ghost" size="md">
                Contact Our Engineers
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
