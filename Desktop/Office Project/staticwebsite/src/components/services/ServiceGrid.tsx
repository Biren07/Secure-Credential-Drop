import React from 'react';
import { Service } from '@/types/service';
import { ServiceCard } from './ServiceCard';

interface ServiceGridProps {
  services: Service[];
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};
