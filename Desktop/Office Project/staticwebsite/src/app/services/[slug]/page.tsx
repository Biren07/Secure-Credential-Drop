import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { servicesData } from '@/data/services';
import { ServiceDetails } from '@/components/services/ServiceDetails';
import { ConsultationCTA } from '@/components/home/ConsultationCTA';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Build Dream & Design Pvt. Ltd.',
    };
  }

  return {
    title: `${service.title} | Build Dream & Design Pvt. Ltd.`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetails service={service} />
      <ConsultationCTA />
    </>
  );
}
