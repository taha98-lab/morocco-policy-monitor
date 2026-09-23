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

          {/* Featured Election Brief 001 Banner */}
          <div className="mb-8 p-4 sm:p-5 bg-gradient-to-r from-[#F5EEDF] via-[#FAF6EE] to-white border-l-4 border-[#B88932] border-y border-r border-[#E8D6B4] rounded-sm shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#12365A] text-white font-mono text-[10px] font-bold">
                    {lang === 'ar' ? 'الموجز الانتخابي 001' : lang === 'fr' ? 'Brief Électoral 001' : 'Election Brief 001'}
                  </span>
                  <span className="text-[11px] font-bold text-[#B88932] uppercase tracking-wider">
                    {lang === 'ar' ? '22 شتنبر 2026 · نسخة ما قبل الاقتراع' : lang === 'fr' ? '22 septembre 2026 · Édition pré-électorale' : '22 September 2026 · Pre-election edition'}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-[#14202B]">
                  {lang === 'ar'
                    ? 'الانتخابات التشريعية المغربية 2026: الرهانات، مقترحات الأحزاب، ومعايير التتبع'
                    : lang === 'fr'
                    ? 'Élections Législatives Marocaines 2026 : Enjeux, propositions des partis et grille de suivi'
                    : "Morocco's 2026 Legislative Elections: What Is at Stake, What Parties Are Proposing, and What to Monitor"}
                </h2>
                <p className="text-xs text-[#62717F] line-clamp-1">
                  {lang === 'ar'
                    ? '15,801,162 ناخباً · 395 مقعداً · تدقيق التزامات الأحرار والبام والاستقلال والاتحاد والتقدم والعدالة والتنمية'
                    : lang === 'fr'
                    ? '15 801 162 inscrits · 395 sièges · Analyse comparative des engagements RNI, PAM, PI, USFP, PPS, PJD'
                    : '15,801,162 registered voters · 395 seats · Comparative baseline of RNI, PAM, PI, USFP, PPS, and PJD commitments'}
                </p>
              </div>
              <a
                href="/reports?report=election-brief-001"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#12365A] hover:bg-[#0B1E33] text-white text-xs font-bold transition-all shrink-0 self-start sm:self-center shadow-xs cursor-pointer"
              >
                <span>{lang === 'ar' ? 'قراءة التقرير والوثائق' : lang === 'fr' ? 'Lire le brief complet' : 'Read Full Special Brief'}</span>
                <span className={lang === 'ar' ? 'rotate-180 inline-block' : ''}>→</span>
              </a>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#62717F] font-normal leading-relaxed max-w-2xl mb-10">
            {t.hero.desc}
          </p>

          {/* Call to actions */}
          <div className="flex flex-wrap items-center gap-3.5 mb-14">
            <a
              href="/monitor"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#12365A] hover:bg-[#0B1E33] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{t.hero.exploreBtn}</span>
            </a>

            <a
              href="/assistant"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#F8F9FA] hover:bg-[#EEF1F3] border border-[#DFE4E8] text-[#14202B] text-sm font-semibold transition-all shadow-2xs hover:border-[#B88932] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#B88932]" />
              <span>{t.hero.aiBtn}</span>
            </a>

            <a
              href="/methodology"
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
              <span>{lang === 'fr' ? 'Audit non partisan' : lang !== 'ar' ? 'Non-Partisan Audit' : 'تدقيق مستقل ومحايد'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#4B5864]">
              <Database className="w-4 h-4 text-[#B88932] shrink-0" />
              <span>{lang === 'fr' ? 'Sources officielles primaires' : lang !== 'ar' ? 'Primary Official Sources' : 'مصادر رسمية أولية'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#4B5864]">
              <CheckCircle2 className="w-4 h-4 text-[#B88932] shrink-0" />
              <span>{lang === 'fr' ? 'Suivi de la Loi de finances' : lang !== 'ar' ? 'Loi de Finances Traced' : 'تتبع ميزانية الدولة'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#4B5864]">
              <CheckCircle2 className="w-4 h-4 text-[#B88932] shrink-0" />
              <span>{lang === 'fr' ? 'Politique de correction ouverte' : lang !== 'ar' ? 'Open Corrections Policy' : 'سياسة تصحيح مفتوحة'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
