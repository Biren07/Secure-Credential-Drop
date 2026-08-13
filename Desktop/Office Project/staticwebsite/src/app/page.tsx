import React from 'react';
import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { ExpertiseSection } from '@/components/home/ExpertiseSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ConsultationCTA } from '@/components/home/ConsultationCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <ExpertiseSection />
      <ProcessSection />
      <ConsultationCTA />
    </>
  );
}
