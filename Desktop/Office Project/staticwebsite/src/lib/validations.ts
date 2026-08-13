export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  projectDetails: string;
}

export function validateContactForm(data: ContactFormData) {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Full Name is required';
  }

  if (!data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  }

  if (!data.serviceRequired) {
    errors.serviceRequired = 'Please select a service';
  }

  if (!data.projectDetails.trim()) {
    errors.projectDetails = 'Please provide brief details of your project';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
