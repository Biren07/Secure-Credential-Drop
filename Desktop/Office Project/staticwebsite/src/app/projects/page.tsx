import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { projectsData } from '@/data/projects';
import { ConsultationCTA } from '@/components/home/ConsultationCTA';

export const metadata: Metadata = {
  title: 'Our Projects Portfolio | Build Dream & Design Pvt. Ltd.',
  description:
    'Browse our residential, commercial, structural retrofitting, interior, and architectural projects completed across Nepal.',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-[#063B70] text-white py-16 sm:py-20 bg-blueprint-dark-grid">
        <Container className="text-center max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#F7941D] text-white text-xs font-black uppercase tracking-widest rounded-full mb-3">
            Engineering Showcase
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            OUR RECENT PROJECTS
          </h1>
          <p className="text-base text-slate-300">
            Real structural design, residential homes, commercial office hubs, and architectural case studies executed in Nepal.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <ProjectGrid projects={projectsData} showFilter={true} />
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
