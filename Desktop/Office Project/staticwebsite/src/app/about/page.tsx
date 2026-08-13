import React from 'react';
import { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { CompanyStory } from '@/components/about/CompanyStory';
import { MissionVision } from '@/components/about/MissionVision';
import { Values } from '@/components/about/Values';
import { ConsultationCTA } from '@/components/home/ConsultationCTA';

export const metadata: Metadata = {
  title: 'About Us | Build Dream & Design Pvt. Ltd.',
  description:
    'Learn about Build Dream & Design Pvt. Ltd., an engineering, structural design, quantity surveying, and construction consultancy firm based in Sanepa, Lalitpur, Nepal.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <Values />
      <ConsultationCTA />
    </>
  );
}
