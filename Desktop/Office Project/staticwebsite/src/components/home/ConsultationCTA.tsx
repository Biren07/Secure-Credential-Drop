import React from 'react';
import { PhoneCall, Send } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const ConsultationCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#07549A] to-[#063B70] text-white relative overflow-hidden">
      {/* Decorative orange glowing accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F7941D]/20 blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl">
        <span className="inline-block px-3 py-1 bg-[#F7941D] text-white text-xs font-black uppercase tracking-widest rounded-full mb-4">
          Free Engineering Consultation
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
          LET&apos;S BUILD YOUR VISION TOGETHER
        </h2>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto">
          Have a construction, structural or design project in mind? Talk to our certified engineering team and get professional guidance for your project in Nepal.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="orange" size="lg" className="shadow-xl">
            <PhoneCall className="w-5 h-5 mr-2" /> Book Free Consultation
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#07549A]"
          >
            <Send className="w-5 h-5 mr-2" /> Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
};
