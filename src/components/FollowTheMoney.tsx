import React, { useState } from 'react';
import { Language, BudgetFlowStage } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUDGET_FLOW } from '../data/civicData';
import { FRENCH_BUDGET } from '../data/frenchCivicData';
import { Landmark, ArrowRight, ArrowLeft, PieChart, CheckCircle, TrendingDown, DollarSign } from 'lucide-react';

interface FollowTheMoneyProps {
  lang: Language;
}

export const FollowTheMoney: React.FC<FollowTheMoneyProps> = ({ lang }) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const t = TRANSLATIONS[lang];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const currentStage: BudgetFlowStage = BUDGET_FLOW[activeStageIndex];

  return (
    <section id="money" className="bg-[#14202B] text-white py-20 sm:py-28 border-y border-[#263544]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-[#B88932] uppercase block mb-2">
            {t.money.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.money.title}
          </h2>
          <p className="text-base sm:text-lg text-[#B9C3CB] max-w-2xl leading-relaxed">
            {t.money.desc}
          </p>
        </div>

        {/* 4-Step Chain Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {BUDGET_FLOW.map((stage, idx) => {
            const isActive = activeStageIndex === idx;

            return (
              <button
                key={stage.stageId}
                onClick={() => setActiveStageIndex(idx)}
                className={`text-left p-5 rounded-sm border transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-[#1E2E3D] border-[#B88932] shadow-md ring-1 ring-[#B88932]/30'
                    : 'bg-[#14202B] border-[#2E3F4E] hover:border-[#4E6273] hover:bg-[#1A2734]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#B88932] mb-2">
                  <span>STEP 0{idx + 1}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#B88932]" />}
                </div>

                <b className="block text-base sm:text-lg text-white font-bold mb-1 leading-snug">
                  {lang === 'fr' ? FRENCH_BUDGET[stage.stageId]?.title.split('·')[1]?.trim() : lang === 'ar' ? stage.titleAr.split('·')[1]?.trim() : stage.titleEn.split('·')[1]?.trim()}
                </b>

                <span className="block text-xs text-[#9DAAB5] leading-normal">
                  {lang === 'fr' ? FRENCH_BUDGET[stage.stageId]?.question : lang === 'ar' ? stage.questionAr : stage.questionEn}
                </span>

                {/* Subtle bottom accent line when active */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B88932]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="bg-[#182633] border border-[#2E3F4E] rounded-sm p-6 sm:p-8 shadow-xl">
          {/* Stage Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2E3F4E] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1 text-xs font-bold text-[#B88932] uppercase">
                <span>{lang === 'fr' ? 'Phase' : lang !== 'ar' ? 'Phase' : 'المرحلة'} 0{activeStageIndex + 1}</span>
                <span>·</span>
                <span>{t.money.stages[currentStage.stageId]}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {lang === 'fr' ? FRENCH_BUDGET[currentStage.stageId]?.title : lang === 'ar' ? currentStage.titleAr : currentStage.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-[#B9C3CB] mt-1">
                {lang === 'fr' ? FRENCH_BUDGET[currentStage.stageId]?.question : lang === 'ar' ? currentStage.questionAr : currentStage.questionEn}
              </p>
            </div>

            {currentStage.totalMmdh > 0 && (
              <div className="p-3.5 rounded bg-[#121D28] border border-[#2E3F4E] text-right">
                <span className="text-[11px] text-[#8C9BA7] uppercase block font-medium">
                  {t.money.totalBudget}
                </span>
                <span className="text-2xl font-extrabold text-[#B88932] font-mono">
                  ~{currentStage.totalMmdh} {lang === 'fr' ? 'milliards MAD' : lang !== 'ar' ? 'Billion MAD' : 'مليار درهم'}
                </span>
              </div>
            )}
          </div>

          {/* Breakdown Items */}
          <div className="space-y-4">
            {currentStage.breakdown.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-sm bg-[#121D28] border border-[#2E3F4E] hover:border-[#4B5E70] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-sm font-bold text-white">
                    {lang === 'ar' ? item.nameAr : item.nameEn}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-xs">
                    {item.amountMmdh > 0 && (
                      <span className="font-bold text-[#B88932]">
                        {item.amountMmdh} MMDH
                      </span>
                    )}
                    {item.sharePercent > 0 && (
                      <span className="text-[#8C9BA7] bg-[#1E2E3D] px-2 py-0.5 rounded text-[11px]">
                        {item.sharePercent}% {currentStage.stageId === 'execution' ? (lang === 'fr' ? 'décaissé' : lang !== 'ar' ? 'disbursed' : 'نسبة الصرف') : t.money.shareOfBudget}
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Visualizer */}
                {item.sharePercent > 0 && (
                  <div className="w-full h-1.5 bg-[#253645] rounded-full overflow-hidden mb-2.5">
                    <div
                      style={{ width: `${Math.min(100, item.sharePercent)}%` }}
                      className="h-full bg-[#B88932] rounded-full transition-all duration-500"
                    />
                  </div>
                )}

                <p className="text-xs text-[#B9C3CB] leading-relaxed">
                  {lang === 'ar' ? item.detailAr : item.detailEn}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Controls between stages */}
          <div className="mt-8 pt-6 border-t border-[#2E3F4E] flex items-center justify-between text-xs">
            <button
              disabled={activeStageIndex === 0}
              onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
              className="px-3 py-1.5 rounded border border-[#2E3F4E] text-[#B9C3CB] hover:text-white hover:bg-[#1E2E3D] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              ← {lang === 'fr' ? 'Étape précédente' : lang !== 'ar' ? 'Previous Stage' : 'المرحلة السابقة'}
            </button>

            <span className="text-[#8C9BA7] font-mono">
              {activeStageIndex + 1} / {BUDGET_FLOW.length}
            </span>

            <button
              disabled={activeStageIndex === BUDGET_FLOW.length - 1}
              onClick={() => setActiveStageIndex((prev) => Math.min(BUDGET_FLOW.length - 1, prev + 1))}
              className="px-3 py-1.5 rounded bg-[#B88932] text-white hover:bg-[#9B7226] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors font-semibold flex items-center gap-1"
            >
              <span>{lang === 'fr' ? 'Étape suivante' : lang !== 'ar' ? 'Next Stage' : 'المرحلة التالية'}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
