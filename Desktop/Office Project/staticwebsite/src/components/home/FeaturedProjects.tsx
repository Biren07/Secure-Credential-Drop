import React from 'react';
import { projectsData } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { Button } from '@/components/ui/Button';

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <Container>
        <SectionHeading
          badge="Featured Engineering Work"
          title="OUR RECENT PROJECTS"
          subtitle="Explore structural engineering, residential builds, commercial hubs, and architectural designs completed across Nepal."
        />

        <ProjectGrid projects={projectsData} showFilter={true} />

        <div className="text-center mt-12">
          <Button href="/projects" variant="primary" size="lg">
            View All Projects Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
};
