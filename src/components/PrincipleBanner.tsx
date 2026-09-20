import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Quote } from 'lucide-react';

interface PrincipleBannerProps {
  lang: Language;
}

export const PrincipleBanner: React.FC<PrincipleBannerProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="bg-[#12365A] text-white py-14 px-4 sm:px-6 lg:px-8 border-y border-[#0E2C4A]">
      <div className="max-w-4xl mx-auto text-center relative">
        <Quote className="w-10 h-10 text-[#B88932]/40 mx-auto mb-4" />
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif font-normal leading-relaxed text-white tracking-normal">
          {t.principle.quote}
        </blockquote>
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B88932]">
          <span>{lang === 'en' ? 'Core Editorial Principle' : 'المبدأ التحريري الأساسي'}</span>
          <span>·</span>
          <span>Morocco Policy Monitor</span>
        </div>
      </div>
    </section>
  );
};
