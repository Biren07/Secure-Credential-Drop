import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft, FileCheck, HelpCircle } from 'lucide-react';
import { Service } from '@/types/service';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ImageReveal } from '@/components/ui/ImageReveal';

interface ServiceDetailsProps {
  service: Service;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  return (
    <div className="py-16 bg-white">
      <Container>
        {/* Navigation Back link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-[#07549A] hover:text-[#063B70] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <Badge variant="orange" className="mb-3">
                Engineering Service
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-black text-[#063B70] tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Service Image */}
            <ImageReveal
              src={service.image}
              alt={service.title}
              width={900}
              height={500}
              className="rounded-xl shadow-lg border border-slate-200"
            />

            {/* Scope of Work */}
            <div className="bg-[#F7F9FC] border border-slate-200/80 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#063B70] mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#F7941D]" /> Scope of Engineering Work
              </h3>
              <div className="space-y-3">
                {service.scopeOfWork.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#07549A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#063B70]">
                Client Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#07549A]/10 text-[#07549A] font-bold text-xs flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs if available */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-bold text-[#063B70] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#F7941D]" /> Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h4 className="text-sm font-bold text-[#063B70] mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA Card Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#063B70] text-white p-6 sm:p-8 rounded-xl shadow-xl space-y-6">
              <h3 className="text-xl font-black text-white leading-tight">
                Request Engineering Inquiry for {service.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need customized structural design, NBC compliance drawings, or on-site project supervision? Speak directly with our lead engineers in Lalitpur.
              </p>

              <Button href="/contact" variant="orange" size="md" className="w-full">
                Get Service Quotation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
