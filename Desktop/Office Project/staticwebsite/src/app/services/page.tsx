import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceGrid } from '@/components/services/ServiceGrid';
import { servicesData } from '@/data/services';
import { ConsultationCTA } from '@/components/home/ConsultationCTA';

export const metadata: Metadata = {
  title: 'Our Engineering Services | Build Dream & Design Pvt. Ltd.',
  description:
    'Explore our 9 core consultancy services including 2D/3D design, seismic structural analysis, property valuation, quantity surveying, costing, structural inspection, and project supervision in Nepal.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#063B70] text-white py-16 sm:py-20 bg-blueprint-dark-grid">
        <Container className="text-center max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#F7941D] text-white text-xs font-black uppercase tracking-widest rounded-full mb-3">
            Consultancy Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            OUR CONSULTANCY SERVICES
          </h1>
          <p className="text-base text-slate-300">
            Professional engineering and architectural solutions engineered to highest seismic and code standards in Nepal.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <ServiceGrid services={servicesData} />
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
