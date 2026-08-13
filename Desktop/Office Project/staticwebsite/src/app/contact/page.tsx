import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { LocationMap } from '@/components/contact/LocationMap';

export const metadata: Metadata = {
  title: 'Contact Us | Build Dream & Design Pvt. Ltd.',
  description:
    'Contact Build Dream & Design Pvt. Ltd. at Sanepa, Lalitpur, Nepal. Email: builddream786@gmail.com, Phone: 9803399933 for free engineering consultation.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#063B70] text-white py-16 sm:py-20 bg-blueprint-dark-grid">
        <Container className="text-center max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#F7941D] text-white text-xs font-black uppercase tracking-widest rounded-full mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            CONTACT OUR ENGINEERS
          </h1>
          <p className="text-base text-slate-300">
            Have a building project, structural audit, or design inquiry in mind? Speak with our team in Sanepa, Lalitpur.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-[#F7F9FC]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          <LocationMap />
        </Container>
      </section>
    </>
  );
}
