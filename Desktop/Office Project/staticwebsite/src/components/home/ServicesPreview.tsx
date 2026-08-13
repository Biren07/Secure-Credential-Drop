import React from 'react';
import { servicesData } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Button } from '@/components/ui/Button';

export const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F9FC] border-b border-slate-200/60">
      <Container>
        <SectionHeading
          badge="Engineering & Design Solutions"
          title="OUR CONSULTANCY SERVICES"
          subtitle="Comprehensive architectural design, seismic structural engineering, quantity surveying, valuation and construction supervision."
        />

        {/* 9 Professional Service Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-12">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center">
          <Button href="/services" variant="primary" size="lg">
            Explore All 9 Consultancy Services
          </Button>
        </div>
      </Container>
    </section>
  );
};
