import React, { useState } from 'react';
import { Language, CivicInstitution } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CIVIC_INSTITUTIONS } from '../data/civicData';
import { Landmark, X, BookOpen, Check, ArrowRight, ArrowLeft } from 'lucide-react';

interface UnderstandMoroccoProps {
  lang: Language;
}

export const UnderstandMorocco: React.FC<UnderstandMoroccoProps> = ({ lang }) => {
  const [selectedInst, setSelectedInst] = useState<CivicInstitution | null>(null);
  const t = TRANSLATIONS[lang];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="understand" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs font-bold tracking-widest text-[#B88932] uppercase block mb-2">
          {t.understand.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14202B] tracking-tight mb-4">
          {t.understand.title}
        </h2>
        <p className="text-base sm:text-lg text-[#62717F] max-w-2xl leading-relaxed">
          {t.understand.desc}
        </p>
      </div>

      {/* Grid of 4 institutional cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {CIVIC_INSTITUTIONS.map((inst) => (
          <article
            key={inst.id}
            onClick={() => setSelectedInst(inst)}
            className="group relative bg-white border border-[#DFE4E8] hover:border-[#12365A] p-7 rounded-sm transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-[#B88932] tracking-wider font-mono">
                  {inst.number}
                </span>
                <span className="text-xs font-medium text-[#62717F] bg-[#F1F4F7] px-2 py-0.5 rounded-sm">
                  {inst.constitutionalReference.split('(')[0]}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#14202B] group-hover:text-[#12365A] transition-colors mb-3 leading-snug">
                {lang !== 'ar' ? inst.titleEn : inst.titleAr}
              </h3>

              <p className="text-xs sm:text-sm text-[#62717F] leading-relaxed mb-6">
                {lang !== 'ar' ? inst.summaryEn : inst.summaryAr}
              </p>
            </div>

            <div className="pt-4 border-t border-[#EEF1F4] flex items-center justify-between text-xs font-semibold text-[#12365A]">
              <span>{t.understand.learnMore}</span>
              <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </article>
        ))}
      </div>

      {/* Institutional Detail Modal */}
      {selectedInst && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1E33]/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border border-[#DFE4E8] rounded-md max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#DFE4E8] mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#F5EEDF] text-[#B88932] flex items-center justify-center font-bold">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#B88932] uppercase">
                    {lang !== 'ar' ? 'Civic Guide' : 'دليل المؤسسات'} · {selectedInst.number}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#14202B]">
                    {lang !== 'ar' ? selectedInst.titleEn : selectedInst.titleAr}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedInst(null)}
                className="p-1.5 rounded hover:bg-[#F1F4F7] text-[#62717F] hover:text-[#14202B] cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Constitutional Anchor */}
            <div className="mb-6 p-3.5 rounded bg-[#F8F9FA] border-l-3 border-[#12365A]">
              <span className="text-xs font-bold uppercase text-[#12365A] block mb-1">
                {t.understand.constitutionalAnchor}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#14202B]">
                {selectedInst.constitutionalReference}
              </span>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#62717F] mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#B88932]" />
                <span>{t.understand.keyResponsibilities}</span>
              </h4>
              <ul className="space-y-2.5">
                {(lang !== 'ar' ? selectedInst.keyResponsibilitiesEn : selectedInst.keyResponsibilitiesAr).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#34424D] leading-relaxed">
                    <Check className="w-4 h-4 text-[#12365A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Checks and Balances */}
            <div className="mb-6 p-4 rounded bg-[#EEF2F6] border border-[#D5DFE8]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12365A] block mb-1.5">
                {t.understand.checksBalances}
              </span>
              <p className="text-xs sm:text-sm text-[#14202B] leading-relaxed">
                {lang !== 'ar' ? selectedInst.checksAndBalancesEn : selectedInst.checksAndBalancesAr}
              </p>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[#DFE4E8]">
              <span className="text-xs text-[#62717F]">
                {lang !== 'ar' ? selectedInst.officialBodyEn : selectedInst.officialBodyAr}
              </span>
              <button
                onClick={() => setSelectedInst(null)}
                className="px-4 py-2 rounded bg-[#12365A] text-white text-xs font-semibold hover:bg-[#0B1E33] transition-colors cursor-pointer"
              >
                {t.understand.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
