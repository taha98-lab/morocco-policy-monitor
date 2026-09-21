import React, { useState } from 'react';
import { Language, EconomicIndicator } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ECONOMIC_INDICATORS } from '../data/civicData';
import { FRENCH_ECONOMIC } from '../data/frenchCivicData';
import { TrendingUp, TrendingDown, Calendar, Database, Info, LineChart, ChevronDown, ChevronUp } from 'lucide-react';

interface EconomySectionProps {
  lang: Language;
}

export const EconomySection: React.FC<EconomySectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('eco-gdp-growth');
  const [activeChartId, setActiveChartId] = useState<string | null>('eco-gdp-growth');

  const t = TRANSLATIONS[lang];

  const categories = [
    { key: 'all', label: t.economy.allCategories },
    { key: 'gdp', label: t.economy.gdp },
    { key: 'jobs', label: t.economy.jobs },
    { key: 'prices', label: t.economy.prices },
    { key: 'finance', label: t.economy.finance },
  ];

  const filteredIndicators = activeCategory === 'all'
    ? ECONOMIC_INDICATORS
    : ECONOMIC_INDICATORS.filter((ind) => ind.category === activeCategory);

  const selectedChartIndicator = ECONOMIC_INDICATORS.find((ind) => ind.id === activeChartId) || ECONOMIC_INDICATORS[0];

  return (
    <section id="economy" className="bg-[#EEF1F3] border-y border-[#DFE4E8] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest text-[#B88932] uppercase block mb-2">
            {t.economy.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14202B] tracking-tight mb-4">
            {t.economy.title}
          </h2>
          <p className="text-base sm:text-lg text-[#62717F] max-w-2xl leading-relaxed">
            {t.economy.desc}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#12365A] text-white shadow-xs'
                  : 'bg-white text-[#34424D] border border-[#DFE4E8] hover:border-[#12365A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Indicator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {filteredIndicators.map((ind) => {
            const isExpanded = expandedId === ind.id;
            const isChartActive = activeChartId === ind.id;

            return (
              <div
                key={ind.id}
                className={`bg-white border rounded-sm p-6 transition-all duration-200 ${
                  isChartActive ? 'border-[#12365A] shadow-md ring-1 ring-[#12365A]/10' : 'border-[#DFE4E8] hover:border-[#B5C2CC]'
                }`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold text-[#62717F] uppercase tracking-wider bg-[#F1F4F7] px-2 py-0.5 rounded-sm">
                    {lang === 'fr' ? FRENCH_ECONOMIC[ind.id]?.category : lang === 'ar' ? ind.categoryLabelAr : ind.categoryLabelEn}
                  </span>
                  <button
                    onClick={() => setActiveChartId(ind.id)}
                    className={`text-xs flex items-center gap-1 font-semibold px-2 py-0.5 rounded transition-colors cursor-pointer ${
                      isChartActive ? 'bg-[#12365A] text-white' : 'text-[#12365A] hover:bg-[#F1F4F7]'
                    }`}
                    title="View historical trend chart"
                  >
                    <LineChart className="w-3.5 h-3.5" />
                    <span>{lang !== 'ar' ? 'Trend' : 'الرسم'}</span>
                  </button>
                </div>

                {/* Name */}
                <h3 className="text-base font-bold text-[#14202B] mb-2 leading-snug">
                  {lang === 'fr' ? FRENCH_ECONOMIC[ind.id]?.name : lang === 'ar' ? ind.nameAr : ind.nameEn}
                </h3>

                {/* Big Metric Display */}
                <div className="flex items-baseline gap-3 my-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#14202B] tracking-tight font-mono">
                    {ind.currentValue}
                  </span>
                  <span className="text-xs text-[#62717F] font-medium">
                    {ind.unit}
                  </span>
                </div>

                {/* Change pill */}
                <div className="flex items-center gap-1.5 mb-4 text-xs font-semibold">
                  {ind.isPositive === true ? (
                    <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm border border-emerald-200">
                      <TrendingUp className="w-3 h-3" />
                      {lang === 'fr' ? FRENCH_ECONOMIC[ind.id]?.change : ind.change}
                    </span>
                  ) : ind.isPositive === false ? (
                    <span className="inline-flex items-center gap-1 text-rose-700 bg-rose-50 px-2 py-0.5 rounded-sm border border-rose-200">
                      <TrendingDown className="w-3 h-3" />
                      {lang === 'fr' ? FRENCH_ECONOMIC[ind.id]?.change : ind.change}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-slate-700 bg-slate-100 px-2 py-0.5 rounded-sm">
                      {lang === 'fr' ? FRENCH_ECONOMIC[ind.id]?.change : ind.change}
                    </span>
                  )}
                </div>

                {/* Source & Date summary */}
                <div className="text-xs text-[#62717F] space-y-1 pt-3 border-t border-[#EEF1F4]">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#B88932] shrink-0" />
                    <span className="truncate">
                      <b>{t.economy.source}:</b> {lang === 'ar' ? ind.sourceInstitutionAr : ind.sourceInstitution}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#62717F] shrink-0" />
                    <span><b>{t.economy.published}:</b> {ind.releaseDate}</span>
                  </div>
                </div>

                {/* Toggle details button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : ind.id)}
                  className="mt-4 w-full flex items-center justify-between text-xs font-semibold text-[#12365A] hover:text-[#0B1E33] pt-2 border-t border-[#F1F4F7] cursor-pointer"
                >
                  <span>{isExpanded ? (lang === 'fr' ? 'Masquer la méthodologie' : lang !== 'ar' ? 'Hide methodology' : 'إخفاء المنهجية') : (lang === 'fr' ? 'Afficher la méthodologie et la définition' : lang !== 'ar' ? 'Show methodology & definition' : 'عرض المنهجية والتعريف')}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {/* Expanded methodology card */}
                {isExpanded && (
                  <div className="mt-3 p-3 rounded-sm bg-[#F8F9FA] border border-[#DFE4E8] text-xs space-y-2.5 animate-in fade-in">
                    <div>
                      <span className="font-bold text-[#14202B] block mb-0.5">
                        {t.economy.definition}:
                      </span>
                      <p className="text-[#62717F] leading-relaxed">
                        {lang === 'fr' ? FRENCH_ECONOMIC[ind.id]?.definition : lang === 'ar' ? ind.definitionAr : ind.definitionEn}
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-[#14202B] block mb-0.5">
                        {t.economy.methodology}:
                      </span>
                      <p className="text-[#62717F] leading-relaxed">
                        {lang === 'fr' ? FRENCH_ECONOMIC[ind.id]?.methodology : lang === 'ar' ? ind.methodologyAr : ind.methodologyEn}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Chart Container for the selected indicator */}
        <div className="bg-white border border-[#DFE4E8] rounded-sm p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DFE4E8] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <LineChart className="w-4 h-4 text-[#B88932]" />
                <span className="text-xs font-bold text-[#B88932] uppercase tracking-wider">
                  {t.economy.historicalTrend}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#14202B]">
                {lang === 'fr' ? FRENCH_ECONOMIC[selectedChartIndicator.id]?.name : lang === 'ar' ? selectedChartIndicator.nameAr : selectedChartIndicator.nameEn}
              </h3>
            </div>

            <div className="text-xs text-[#62717F]">
              <span>{t.economy.source}: </span>
              <strong className="text-[#14202B]">
                {lang === 'ar' ? selectedChartIndicator.sourceInstitutionAr : selectedChartIndicator.sourceInstitution}
              </strong>
            </div>
          </div>

          {/* SVG Data Visualization */}
          <div className="pt-4">
            <div className="h-60 sm:h-72 w-full flex items-end gap-2 sm:gap-6 pt-10 pb-6 border-b border-[#DFE4E8] relative">
              {/* Background grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                <div className="border-b border-dashed border-[#DFE4E8] w-full" />
                <div className="border-b border-dashed border-[#DFE4E8] w-full" />
                <div className="border-b border-dashed border-[#DFE4E8] w-full" />
                <div className="border-b border-[#DFE4E8] w-full" />
              </div>

              {/* Bars and Values */}
              {selectedChartIndicator.historicalSeries.map((point, idx) => {
                const values = selectedChartIndicator.historicalSeries.map((p) => p.value);
                const minVal = Math.min(...values);
                const maxVal = Math.max(...values);
                const range = maxVal - minVal || 1;
                // Calculate height percentage normalized between 20% and 90%
                const normalizedHeight = Math.max(18, Math.min(92, ((point.value - (minVal < 0 ? minVal : 0)) / ((maxVal - (minVal < 0 ? minVal : 0)) || 1)) * 85));

                return (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative z-10">
                    {/* Tooltip on hover */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#14202B] text-white text-[11px] font-mono px-2 py-1 rounded shadow-md pointer-events-none whitespace-nowrap z-20">
                      {point.value} {selectedChartIndicator.unit}
                      {point.label ? ` · ${point.label}` : ''}
                    </div>

                    {/* Value label */}
                    <span className="text-[11px] sm:text-xs font-bold text-[#14202B] font-mono mb-1.5 transition-transform group-hover:scale-110">
                      {point.value}{point.value > 0 && selectedChartIndicator.unit.includes('%') ? '%' : ''}
                    </span>

                    {/* Bar */}
                    <div
                      style={{ height: `${normalizedHeight}%` }}
                      className={`w-full max-w-[48px] rounded-t-sm transition-all duration-300 ${
                        idx === selectedChartIndicator.historicalSeries.length - 1
                          ? 'bg-[#12365A] group-hover:bg-[#0B1E33]'
                          : 'bg-[#DFE4E8] group-hover:bg-[#B88932]'
                      }`}
                    />

                    {/* Period Label */}
                    <span className="text-[11px] sm:text-xs font-semibold text-[#62717F] mt-2 font-mono">
                      {point.period}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#62717F]">
              <span>{lang === 'fr' ? 'Dernière référence vérifiée' : lang !== 'ar' ? 'Latest verified benchmark' : 'آخر معطى مؤكد موثق'}</span>
              <span className="font-medium text-[#14202B]">
                {selectedChartIndicator.historicalSeries[selectedChartIndicator.historicalSeries.length - 1]?.label || selectedChartIndicator.currentValue}
              </span>
            </div>
          </div>
        </div>

        {/* Strict Data Note */}
        <div className="p-4 sm:p-5 rounded-sm bg-white border-l-3 border-[#B88932] shadow-2xs">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#B88932] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#34424D] leading-relaxed">
              <strong>{lang === 'fr' ? 'Note sur le protocole de preuve' : lang !== 'ar' ? 'Evidence Protocol Note' : 'ملاحظة بروتوكول الأدلة'}:</strong> {t.economy.dataNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
