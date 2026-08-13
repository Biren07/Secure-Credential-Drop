export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavItems = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Company', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Recent Projects', href: '/projects' },
    { label: 'Engineering Process', href: '/#process' },
    { label: 'Contact Us', href: '/contact' },
  ],
  services: [
    { label: '2D & 3D Design', href: '/services/2d-3d-design' },
    { label: 'Structural Design', href: '/services/structural-design' },
    { label: 'Structural Analysis', href: '/services/structural-analysis' },
    { label: 'Property Valuation', href: '/services/property-valuation' },
    { label: 'Quantity Surveying', href: '/services/quantity-surveying' },
    { label: 'Project Supervision', href: '/services/project-supervision' },
    { label: 'Structural Inspection', href: '/services/structural-inspection' },
  ],
};
