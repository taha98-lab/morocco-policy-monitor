import React, { useState, useMemo } from 'react';
import { Language, PromiseRecord } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PROMISES_DATA } from '../data/civicData';
import { FRENCH_PROMISES } from '../data/frenchCivicData';
import { DossierModal } from './DossierModal';
import { Search, Filter, AlertCircle, FileSearch, ArrowRight, ArrowLeft } from 'lucide-react';

interface GovernmentMonitorProps {
  lang: Language;
}

export const GovernmentMonitor: React.FC<GovernmentMonitorProps> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [activeDossier, setActiveDossier] = useState<PromiseRecord | null>(null);

  const t = TRANSLATIONS[lang];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  // Extract unique policy areas
  const areas = useMemo(() => {
    const set = new Set<string>();
    PROMISES_DATA.forEach((p) => set.add(lang === 'fr' ? FRENCH_PROMISES[p.id]?.area : lang === 'ar' ? p.areaAr : p.area));
    return Array.from(set);
  }, [lang]);

  // Filtered list
  const filteredPromises = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return PROMISES_DATA.filter((p) => {
      const matchSearch =
        !q ||
        p.id.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.titleAr.toLowerCase().includes(q) ||
        p.target.toLowerCase().includes(q) ||
        p.targetAr.toLowerCase().includes(q) ||
        p.area.toLowerCase().includes(q) ||
        p.areaAr.toLowerCase().includes(q);

      const matchArea = !selectedArea || (lang === 'fr' ? FRENCH_PROMISES[p.id]?.area === selectedArea : lang === 'ar' ? p.areaAr === selectedArea : p.area === selectedArea);
      const matchStatus = !selectedStatus || p.status === selectedStatus;

      return matchSearch && matchArea && matchStatus;
    });
  }, [searchQuery, selectedArea, selectedStatus, lang]);

  return (
    <section id="monitor" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      {/* Section Head */}
      <div className="mb-10">
        <span className="text-xs font-bold tracking-widest text-[#B88932] uppercase block mb-2">
          {t.monitor.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14202B] tracking-tight mb-4">
          {t.monitor.title}
        </h2>
        <p className="text-base sm:text-lg text-[#62717F] max-w-2xl leading-relaxed">
          {t.monitor.desc}
        </p>
      </div>

      {/* Filter bar */}
      <div className="bg-white border border-[#DFE4E8] rounded-sm p-4 mb-8 shadow-xs">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#62717F] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.monitor.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-[#DFE4E8] focus:border-[#12365A] focus:outline-hidden text-xs sm:text-sm bg-[#F8F9FA] focus:bg-white transition-colors"
            />
          </div>

          {/* Area select */}
          <div className="sm:w-56">
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full px-3 py-2.5 rounded-sm border border-[#DFE4E8] text-xs sm:text-sm bg-white focus:border-[#12365A] focus:outline-hidden transition-colors cursor-pointer"
            >
              <option value="">{t.monitor.allAreas}</option>
              {areas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          {/* Status select */}
          <div className="sm:w-56">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2.5 rounded-sm border border-[#DFE4E8] text-xs sm:text-sm bg-white focus:border-[#12365A] focus:outline-hidden transition-colors cursor-pointer"
            >
              <option value="">{t.monitor.allStatuses}</option>
              <option value="not-achieved">{t.monitor.statusNotAchieved}</option>
              <option value="partial">{t.monitor.statusPartial}</option>
              <option value="achieved">{t.monitor.statusAchieved}</option>
              <option value="review">{t.monitor.statusReview}</option>
            </select>
          </div>
        </div>

        {/* Active search tag info */}
        {(searchQuery || selectedArea || selectedStatus) && (
          <div className="mt-3 pt-3 border-t border-[#F1F4F7] flex items-center justify-between text-xs text-[#62717F]">
            <span>
              {lang === 'fr' ? 'Affichage de' : lang !== 'ar' ? 'Showing' : 'عرض'} <b>{filteredPromises.length}</b> {lang === 'fr' ? 'sur' : lang !== 'ar' ? 'of' : 'من'} {PROMISES_DATA.length} {lang === 'fr' ? 'engagements' : lang !== 'ar' ? 'commitments' : 'تعهدات'}
            </span>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedArea('');
                setSelectedStatus('');
              }}
              className="text-[#12365A] hover:underline font-semibold cursor-pointer"
            >
              {t.monitor.resetFilters}
            </button>
          </div>
        )}
      </div>

      {/* Promises Cards Grid */}
      {filteredPromises.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {filteredPromises.map((p) => {
            return (
              <article
                key={p.id}
                className="bg-white border border-[#DFE4E8] hover:border-[#12365A] p-6 rounded-sm transition-all duration-200 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Top info */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono font-bold text-[#12365A] bg-[#EEF2F6] px-2 py-0.5 rounded-sm">
                      {p.id}
                    </span>
                    <span className="text-[#62717F] font-semibold">
                      {lang === 'fr' ? FRENCH_PROMISES[p.id]?.area : lang === 'ar' ? p.areaAr : p.area}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#14202B] mb-2 leading-snug">
                    {lang === 'fr' ? FRENCH_PROMISES[p.id]?.title : lang === 'ar' ? p.titleAr : p.title}
                  </h3>

                  {/* Target */}
                  <p className="text-xs text-[#62717F] mb-4 leading-relaxed line-clamp-2">
                    <strong className="text-[#14202B]">{t.monitor.targetLabel}:</strong>{' '}
                    {lang === 'fr' ? FRENCH_PROMISES[p.id]?.target : lang === 'ar' ? p.targetAr : p.target}
                  </p>

                  {/* Status Box */}
                  <div className="p-3 rounded-sm bg-[#F8F9FA] border border-[#E9ECEF] mb-4">
                    <span className="text-xs font-bold text-[#14202B] block mb-1">
                      {lang === 'fr' ? FRENCH_PROMISES[p.id]?.status : lang === 'ar' ? p.statusLabelAr : p.statusLabelEn}
                    </span>
                    <span className="text-[11px] text-[#62717F] block">
                      {t.monitor.confidenceLabel}: <b>{lang === 'fr' ? 'Élevé' : lang !== 'ar' ? p.confidence : p.confidenceAr}</b>
                    </span>
                  </div>

                  {/* Implementation brief */}
                  <div className="text-xs text-[#62717F] mb-4">
                    <span className="font-semibold text-[#14202B] block mb-1">
                      {lang === 'fr' ? 'Allocation budgétaire :' : lang !== 'ar' ? 'Budgetary allocation:' : 'الاعتماد المالي:'}
                    </span>
                    <span className="font-mono text-[11px] text-[#12365A] bg-[#F1F4F7] px-2 py-1 rounded-sm block truncate">
                      {lang === 'fr' ? FRENCH_PROMISES[p.id]?.budget : lang === 'ar' ? p.budgetAllocatedMadAr : p.budgetAllocatedMad}
                    </span>
                  </div>
                </div>

                {/* Inspect Dossier Action */}
                <button
                  onClick={() => setActiveDossier(p)}
                  className="w-full flex items-center justify-between text-xs font-bold text-[#12365A] hover:text-[#0B1E33] pt-3 border-t border-[#EEF1F4] cursor-pointer group"
                >
                  <span className="flex items-center gap-1.5">
                    <FileSearch className="w-3.5 h-3.5 text-[#B88932]" />
                    {t.monitor.viewDossier}
                  </span>
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-white border border-[#DFE4E8] rounded-sm mb-8">
          <AlertCircle className="w-8 h-8 text-[#62717F] mx-auto mb-3" />
          <p className="text-sm font-semibold text-[#14202B] mb-2">{t.monitor.emptyResults}</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedArea('');
              setSelectedStatus('');
            }}
            className="text-xs font-bold text-[#12365A] hover:underline cursor-pointer"
          >
            {t.monitor.resetFilters}
          </button>
        </div>
      )}

      {/* Strict Audit Disclaimer Note */}
      <div className="p-4 rounded-sm bg-[#F8F9FA] border border-[#DFE4E8] text-xs text-[#62717F] leading-relaxed">
        <strong>{lang === 'fr' ? 'Note méthodologique' : lang !== 'ar' ? 'Research Disclaimer' : 'إخلاء مسؤولية توثيقي'}:</strong> {t.monitor.disclaimer}
      </div>

      {/* Evidence Dossier Modal */}
      {activeDossier && (
        <DossierModal
          promise={activeDossier}
          lang={lang}
          onClose={() => setActiveDossier(null)}
        />
      )}
    </section>
  );
};
