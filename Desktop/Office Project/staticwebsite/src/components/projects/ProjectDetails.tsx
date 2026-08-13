import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, User, CheckCircle2 } from 'lucide-react';
import { Project } from '@/types/project';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ImageReveal } from '@/components/ui/ImageReveal';

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="py-16 bg-white">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-[#07549A] hover:text-[#063B70] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects Portfolio
          </Link>
        </div>

        {/* Title Header */}
        <div className="mb-8 max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="orange">{project.category}</Badge>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
              {project.status}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#063B70] tracking-tight mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#F7941D]" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#07549A]" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#07549A]" />
              <span>Year: {project.year}</span>
            </div>
          </div>
        </div>

        {/* Hero Gallery Image */}
        <div className="mb-12">
          <ImageReveal
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            priority
            className="w-full h-[400px] sm:h-[550px] rounded-xl shadow-xl border border-slate-200"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Case Study */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#063B70] mb-4">
                Project Overview
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Challenge */}
              <div className="bg-[#F7F9FC] border border-slate-200 p-6 rounded-xl space-y-2">
                <h3 className="text-lg font-extrabold text-[#063B70]">
                  Engineering Challenge
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-[#07549A]/5 border border-[#07549A]/20 p-6 rounded-xl space-y-2">
                <h3 className="text-lg font-extrabold text-[#07549A]">
                  Applied Solution
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Gallery thumbnails */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#063B70]">
                  Structural Gallery
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.gallery.map((img, idx) => (
                    <ImageReveal
                      key={idx}
                      src={img}
                      alt={`${project.title} image ${idx + 1}`}
                      width={400}
                      height={300}
                      className="rounded-lg h-40 border border-slate-200"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Project Specifications */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#F7F9FC] border border-slate-200/80 p-6 rounded-xl space-y-6">
              <h3 className="text-xl font-extrabold text-[#063B70] border-b border-slate-200 pb-3">
                Structural Specs
              </h3>

              <div className="space-y-4 text-xs">
                {project.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-200/60 last:border-0">
                    <span className="font-bold text-slate-500">{spec.label}:</span>
                    <span className="font-extrabold text-[#063B70] text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Button href="/contact" variant="orange" size="md" className="w-full">
                  Consult for Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
