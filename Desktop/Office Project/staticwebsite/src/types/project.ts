export type ProjectCategory = 'Residential' | 'Commercial' | 'Structural' | 'Interior' | 'Architectural';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  location: string;
  client: string;
  year: string;
  area?: string;
  status: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  specs: { label: string; value: string }[];
}
