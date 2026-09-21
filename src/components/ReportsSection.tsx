import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { FileText, BookOpen, Calendar, User, Languages } from 'lucide-react';

interface ReportsSectionProps {
  lang: Language;
}

export const ReportsSection: React.FC<ReportsSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].reports;
  const labels = lang === 'fr'
    ? ['Briefs de forum', 'Rapports de politique publique', 'Notes de recherche', 'Rapports spéciaux']
    : lang === 'ar'
      ? ['موجزات المنتديات', 'تقارير السياسات العمومية', 'موجزات بحثية', 'تقارير خاصة']
      : ['Forum Briefs', 'Policy Reports', 'Research Briefs', 'Special Reports'];

  return (
    <section id="reports" className="min-h-[calc(100vh-4.5rem)] bg-[#F8F9FA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest text-[#B88932] uppercase block mb-2">{t.eyebrow}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14202B] tracking-tight mb-5">{t.title}</h1>
          <p className="text-base sm:text-lg text-[#62717F] leading-relaxed">{t.desc}</p>
        </div>

        <div className="bg-white border border-[#DFE4E8] rounded-sm p-8 sm:p-12 shadow-sm">
          <div className="w-14 h-14 rounded-sm bg-[#F5EEDF] text-[#B88932] flex items-center justify-center mb-6">
            <FileText className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14202B] mb-3">
            {t.comingSoon}
          </h2>
          <p className="text-sm sm:text-base text-[#62717F] leading-relaxed max-w-2xl mb-8">
            {t.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              [BookOpen, labels[0]],
              [FileText, labels[1]],
              [Calendar, labels[2]],
              [User, labels[3]],
            ].map(([Icon, label]) => {
              const IconComponent = Icon as React.ComponentType<{ className?: string }>;
              return (
                <div key={label as string} className="p-4 border border-[#DFE4E8] bg-[#F8F9FA] rounded-sm">
                  <IconComponent className="w-4 h-4 text-[#12365A] mb-3" />
                  <span className="text-xs font-bold text-[#14202B]">{label as string}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#DFE4E8] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#62717F]">
            <div className="flex items-center gap-2"><User className="w-4 h-4 text-[#B88932]" /><span>{t.author}: <strong className="text-[#14202B]">Taha Khobizi</strong></span></div>
            <div className="flex items-center gap-2"><Languages className="w-4 h-4 text-[#B88932]" /><span>English · Français · العربية</span></div>
          </div>
        </div>

        <p className="mt-6 text-[11px] text-[#8695A3] max-w-3xl leading-relaxed">
          {t.editorialNote}
        </p>
      </div>
    </section>
  );
};
