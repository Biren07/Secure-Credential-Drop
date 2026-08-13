'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { validateContactForm, ContactFormData } from '@/lib/validations';
import { servicesData } from '@/data/services';
import { Button } from '@/components/ui/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#F7F9FC] border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#063B70]">
          Inquiry Sent Successfully!
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Thank you, <strong>{formData.fullName}</strong>. Our senior engineer will review your project details and contact you at {formData.phone} or {formData.email} shortly.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              serviceRequired: '',
              projectDetails: '',
            });
          }}
          variant="outline"
          size="sm"
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm space-y-6">
      <div className="space-y-1">
        <h3 className="text-2xl font-extrabold text-[#063B70]">
          SEND AN INQUIRY
        </h3>
        <p className="text-xs text-slate-500">
          Fill out the form below and our engineering team will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#063B70] uppercase">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Er. Ram Shrestha"
            className={`w-full px-4 py-3 text-sm rounded-lg border focus:outline-none transition-colors ${
              errors.fullName
                ? 'border-red-500 bg-red-50/20'
                : 'border-slate-300 focus:border-[#07549A]'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#063B70] uppercase">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={`w-full px-4 py-3 text-sm rounded-lg border focus:outline-none transition-colors ${
              errors.email
                ? 'border-red-500 bg-red-50/20'
                : 'border-slate-300 focus:border-[#07549A]'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone Number */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#063B70] uppercase">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="98XXXXXXXX"
            className={`w-full px-4 py-3 text-sm rounded-lg border focus:outline-none transition-colors ${
              errors.phone
                ? 'border-red-500 bg-red-50/20'
                : 'border-slate-300 focus:border-[#07549A]'
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Service Required */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#063B70] uppercase">
            Service Required *
          </label>
          <select
            name="serviceRequired"
            value={formData.serviceRequired}
            onChange={handleChange}
            className={`w-full px-4 py-3 text-sm rounded-lg border focus:outline-none bg-white transition-colors ${
              errors.serviceRequired
                ? 'border-red-500 bg-red-50/20'
                : 'border-slate-300 focus:border-[#07549A]'
            }`}
          >
            <option value="">Select a service...</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.serviceRequired && (
            <p className="text-xs text-red-500">{errors.serviceRequired}</p>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-[#063B70] uppercase">
          Project Details *
        </label>
        <textarea
          name="projectDetails"
          rows={4}
          value={formData.projectDetails}
          onChange={handleChange}
          placeholder="Briefly describe your land location, estimated floors, or consultation goals..."
          className={`w-full px-4 py-3 text-sm rounded-lg border focus:outline-none transition-colors ${
            errors.projectDetails
              ? 'border-red-500 bg-red-50/20'
              : 'border-slate-300 focus:border-[#07549A]'
          }`}
        />
        {errors.projectDetails && (
          <p className="text-xs text-red-500">{errors.projectDetails}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="orange" size="lg" className="w-full shadow-md">
        <Send className="w-4 h-4 mr-2" /> Send Inquiry
      </Button>
    </form>
  );
};
