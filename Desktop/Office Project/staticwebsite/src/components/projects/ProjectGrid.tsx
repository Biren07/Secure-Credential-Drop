'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory } from '@/types/project';
import { ProjectFilter } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  showFilter?: boolean;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  showFilter = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories: (ProjectCategory | 'All')[] = [
    'All',
    'Residential',
    'Commercial',
    'Structural',
    'Interior',
    'Architectural',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {showFilter && (
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      )}

      {/* Editorial Masonry-Style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={index === 0 && activeCategory === 'All'}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
          <p className="text-slate-500 font-medium">
            No projects found matching category "{activeCategory}".
          </p>
        </div>
      )}
    </div>
  );
};
