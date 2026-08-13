import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { ImageReveal } from '@/components/ui/ImageReveal';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  return (
    <div
      className={`group relative bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image container */}
      <div className={`relative w-full ${featured ? 'h-72 sm:h-96' : 'h-64'}`}>
        <ImageReveal
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="w-full h-full rounded-none"
        />
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <Badge variant="dark" className="shadow-md">
            {project.category}
          </Badge>
          <Badge variant="orange" className="shadow-md">
            {project.year}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#07549A] mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#F7941D]" />
            <span>{project.location}</span>
          </div>

          <h3 className="text-xl font-bold text-[#063B70] group-hover:text-[#07549A] transition-colors mb-2">
            <Link href={`/projects/${project.slug}`}>
              <span className="absolute inset-0 z-10" />
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {project.shortDescription}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#07549A] group-hover:text-[#F7941D] transition-colors">
          <span>View Structural Case Study</span>
          <ArrowUpRight className="w-4 h-4 text-[#F7941D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );
};
