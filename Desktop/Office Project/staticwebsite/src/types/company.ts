export interface CompanyInfo {
  name: string;
  tagline: string;
  location: string;
  address: string;
  email: string;
  phone: string;
  whatsapp: string;
  established: string;
  socials: {
    facebook: string;
    instagram: string;
    tiktok: string;
    whatsapp: string;
  };
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}
