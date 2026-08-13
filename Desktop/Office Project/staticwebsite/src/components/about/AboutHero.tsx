import React from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { COMPANY_DETAILS } from '@/lib/constants';

export const AboutHero: React.FC = () => {
  return (
    <section className="bg-[#063B70] text-white py-16 sm:py-24 relative overflow-hidden bg-blueprint-dark-grid">
      <Container className="relative z-10 text-center max-w-3xl">
        <Badge variant="orange" className="mb-4">
          Established Engineering Firm • Lalitpur, Nepal
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          ABOUT BUILD DREAM & DESIGN
        </h1>
        <p className="text-lg font-extrabold text-[#F7941D] uppercase tracking-widest mb-6">
          {COMPANY_DETAILS.tagline}
        </p>
        <p className="text-base text-slate-300 leading-relaxed">
          Learn about our journey, engineering principles, structural design team, and commitment to building safe, beautiful, and sustainable infrastructure in Nepal.
        </p>
      </Container>
    </section>
  );
};
