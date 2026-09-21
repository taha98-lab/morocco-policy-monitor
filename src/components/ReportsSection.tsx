import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { FileText, ExternalLink, Clock3 } from 'lucide-react';

interface ReportsSectionProps {
  lang: Language;
}

type Report = {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  type: Record<Language, string>;
  topic: Record<Language, string>;
  date: string;
  readingTime: Record<Language, string>;
  available: Language[];
};

const REPORTS: Report[] = [
  {
    id: 'medays-brief-2026',
    title: {
      en: 'MEDays 2026 — Forum Research Brief',
      fr: 'MEDays 2026 — Brief de recherche',
      ar: 'ميدايز 2026 — موجز بحثي للمنتدى',
    },
    description: {
      en: 'A dedicated space for research briefs prepared for forums, conferences and public-policy discussions. This first entry is reserved for the upcoming Morocco Policy Monitor brief.',
      fr: 'Un espace dédié aux briefs de recherche préparés pour les forums, conférences et débats de politiques publiques. Cette première entrée est réservée au prochain brief du Morocco Policy Monitor.',
      ar: 'مساحة مخصصة للموجزات البحثية المعدة للمنتديات والمؤتمرات والنقاشات حول السياسات العمومية. هذه الخانة مخصصة للموجز المرتقب لمرصد السياسات العمومية.',
    },
    type: { en: 'Forum Brief', fr: 'Brief de forum', ar: 'موجز منتدى' },
    topic: { en: 'International Relations · Morocco', fr: 'Relations internationales · Maroc', ar: 'العلاقات الدولية · المغرب' },
    date: '2026',
    readingTime: { en: 'Coming soon', fr: 'À venir', ar: 'قريباً' },
    available: ['en', 'fr', 'ar'],
  },
];

export const ReportsSection: React.FC<ReportsSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="reports" className="bg-white border-y border-[#DFE4E8] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest text-[#B88932] uppercase block mb-2">{t.reports.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14202B] tracking-tight mb-4">{t.reports.title}</h2>
          <p className="text-base sm:text-lg text-[#62717F] max-w-3xl leading-relaxed">{t.reports.desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {REPORTS.map((report) => (
            <article key={report.id} className="bg-[#F8F9FA] border border-[#DFE4E8] rounded-sm p-6 sm:p-8 hover:border-[#12365A] hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-11 h-11 rounded-sm bg-[#F5EEDF] text-[#B88932] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#12365A] bg-white border border-[#D5DFE8] px-2.5 py-1 rounded-sm">
                  {report.type[lang]}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#14202B] leading-snug mb-3">{report.title[lang]}</h3>
              <p className="text-sm text-[#62717F] leading-relaxed mb-6">{report.description[lang]}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-[11px] font-medium text-[#34424D] bg-white border border-[#DFE4E8] px-2.5 py-1 rounded-sm">{report.topic[lang]}</span>
                <span className="text-[11px] font-medium text-[#34424D] bg-white border border-[#DFE4E8] px-2.5 py-1 rounded-sm flex items-center gap-1">
                  <Clock3 className="w-3 h-3" /> {report.readingTime[lang]}
                </span>
              </div>

              <div className="pt-4 border-t border-[#DFE4E8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-[#62717F]">
                  <div><b>{t.reports.author}:</b> Taha Khobizi</div>
                  <div><b>{t.reports.publishedBy}:</b> Morocco Policy Monitor</div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A6B2B]">
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t.reports.comingSoon}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-sm bg-[#F8F9FA] border border-[#DFE4E8] text-xs text-[#62717F] leading-relaxed">
          <b className="text-[#14202B]">{t.reports.editorialNoteLabel}:</b> {t.reports.editorialNote}
        </div>
      </div>
    </section>
  );
};
