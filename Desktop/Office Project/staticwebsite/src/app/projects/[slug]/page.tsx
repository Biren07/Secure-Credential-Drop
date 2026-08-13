import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import { ProjectDetails } from '@/components/projects/ProjectDetails';
import { ConsultationCTA } from '@/components/home/ConsultationCTA';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Build Dream & Design Pvt. Ltd.',
    };
  }

  return {
    title: `${project.title} | Build Dream & Design Pvt. Ltd.`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetails project={project} />
      <ConsultationCTA />
    </>
  );
}
