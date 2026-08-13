export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  scopeOfWork: string[];
  deliverables: string[];
  faqs?: { question: string; answer: string }[];
}
