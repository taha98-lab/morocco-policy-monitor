import React, { useState } from 'react';
import { Language, MethodologyStep } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { METHODOLOGY_STEPS } from '../data/civicData';
import { FRENCH_METHODOLOGY } from '../data/frenchCivicData';
import { CheckCircle2, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface MethodologySectionProps {
  lang: Language;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ lang }) => {
  const [expandedStep, setExpandedStep] = useState<string | null>('01');
  const t = TRANSLATIONS[lang];

  return (
    <section id="methodology" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      {/* Section Head */}
      <div className="mb-12">
        <span className="text-xs font-bold tracking-widest text-[#B88932] uppercase block mb-2">
          {t.methodology.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14202B] tracking-tight mb-4">
          {t.methodology.title}
        </h2>
        <p className="text-base sm:text-lg text-[#62717F] max-w-2xl leading-relaxed">
          {t.methodology.desc}
        </p>
      </div>

      {/* 6 Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {METHODOLOGY_STEPS.map((step) => {
          const isExpanded = expandedStep === step.stepNumber;

          return (
            <article
              key={step.stepNumber}
              className="bg-white border border-[#DFE4E8] hover:border-[#12365A] p-7 rounded-sm transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-black text-[#B88932] font-mono">
                    {step.stepNumber}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#12365A]" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#14202B] mb-2 leading-snug">
                  {lang === 'fr' ? FRENCH_METHODOLOGY[step.stepNumber]?.title : lang === 'ar' ? step.titleAr : step.titleEn}
                </h3>

                <p className="text-xs sm:text-sm font-serif italic text-[#12365A] mb-3 font-medium">
                  {lang === 'fr' ? FRENCH_METHODOLOGY[step.stepNumber]?.question : lang === 'ar' ? step.questionAr : step.questionEn}
                </p>

                <p className="text-xs text-[#62717F] leading-relaxed mb-4">
                  {lang === 'fr' ? FRENCH_METHODOLOGY[step.stepNumber]?.description : lang === 'ar' ? step.descriptionAr : step.descriptionEn}
                </p>
              </div>

              {/* Audit Standards Toggle */}
              <div>
                <button
                  onClick={() => setExpandedStep(isExpanded ? null : step.stepNumber)}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#12365A] hover:text-[#0B1E33] pt-3 border-t border-[#EEF1F4] cursor-pointer"
                >
                  <span>{t.methodology.auditStandards}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {isExpanded && (
                  <div className="mt-3 p-3 rounded-sm bg-[#F8F9FA] border border-[#DFE4E8] text-xs space-y-2 animate-in fade-in">
                    {(lang === 'fr' ? FRENCH_METHODOLOGY[step.stepNumber]?.standards : lang === 'ar' ? step.auditStandardAr : step.auditStandardEn).map((std, i) => (
                      <div key={i} className="flex items-start gap-2 text-[#34424D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B88932] shrink-0 mt-0.5" />
                        <span>{std}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
