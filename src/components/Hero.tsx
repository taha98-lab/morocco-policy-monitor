import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ArrowDown, FileText, Sparkles, Database, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="home" className="relative bg-white border-b border-[#DFE4E8] overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4f8_1px,transparent_1px),linear-gradient(to_bottom,#f0f4f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#F5EEDF] border border-[#E8D6B4] text-[#B88932] text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88932] animate-pulse" />
            {t.hero.eyebrow}
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#14202B] tracking-tight leading-[1.06] mb-8">
            <span>{t.hero.titleLine1}</span>
            <br />
            <em className="font-serif italic font-normal text-[#12365A] block sm:inline">
              {t.hero.titleLine2}
            </em>
            <br />
            <span className="text-[#14202B]">{t.hero.titleLine3}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#62717F] font-normal leading-relaxed max-w-2xl mb-10">
            {t.hero.desc}
          </p>

          {/* Call to actions */}
          <div className="flex flex-wrap items-center gap-3.5 mb-14">
            <a
              href="#monitor"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#12365A] hover:bg-[#0B1E33] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{t.hero.exploreBtn}</span>
            </a>

            <a
              href="#assistant"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#F8F9FA] hover:bg-[#EEF1F3] border border-[#DFE4E8] text-[#14202B] text-sm font-semibold transition-all shadow-2xs hover:border-[#B88932] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#B88932]" />
              <span>{t.hero.aiBtn}</span>
            </a>

            <a
              href="#methodology"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded text-[#62717F] hover:text-[#12365A] text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>{t.hero.howWeWorkBtn}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Trust & Transparency Pillars */}
          <div className="pt-8 border-t border-[#E8ECEF] grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-xs font-medium text-[#4B5864]">
              <CheckCircle2 className="w-4 h-4 text-[#B88932] shrink-0" />
              <span>{lang !== 'ar' ? 'Non-Partisan Audit' : 'تدقيق مستقل ومحايد'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#4B5864]">
              <Database className="w-4 h-4 text-[#B88932] shrink-0" />
              <span>{lang !== 'ar' ? 'Primary Official Sources' : 'مصادر رسمية أولية'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#4B5864]">
              <CheckCircle2 className="w-4 h-4 text-[#B88932] shrink-0" />
              <span>{lang !== 'ar' ? 'Loi de Finances Traced' : 'تتبع ميزانية الدولة'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#4B5864]">
              <CheckCircle2 className="w-4 h-4 text-[#B88932] shrink-0" />
              <span>{lang !== 'ar' ? 'Open Corrections Policy' : 'سياسة تصحيح مفتوحة'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
