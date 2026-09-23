import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import {
  ELECTION_BRIEF_001,
  REPORT_CATEGORIES_DATA,
  SpecialReport,
  ReportCategoryItem,
  ReportSummaryItem,
  SourceLink
} from '../data/specialReports';
import {
  FileText,
  Calendar,
  User,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ShieldCheck,
  Building2,
  TrendingUp,
  Vote,
  Compass,
  ArrowRight,
  ArrowLeft,
  Share2,
  Printer,
  BookOpen,
  Layers,
  Sparkles,
  Clock,
  Tag
} from 'lucide-react';

interface ReportsSectionProps {
  lang: Language;
}

export const ReportsSection: React.FC<ReportsSectionProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const categories = REPORT_CATEGORIES_DATA[lang];

  // Active view: null = viewing 4 categories; string = reading specific report (e.g. 'election-brief-001')
  const [activeReportId, setActiveReportId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('report') === 'election-brief-001' || window.location.hash === '#election-brief-001') {
        return 'election-brief-001';
      }
    }
    return null;
  });

  // Expandable category state (default: 'special' is expanded)
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    special: true,
    policy: true,
    research: false,
    forum: false,
  });

  const toggleCategory = (catId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  // Expandable sources panels inside the active report
  const [openSources, setOpenSources] = useState<Record<string, boolean>>({
    glance: true,
  });

  const toggleSources = (sectionId: string) => {
    setOpenSources((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const [copied, setCopied] = useState(false);
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const report: SpecialReport = ELECTION_BRIEF_001[lang];

  // Render Category Icon helper
  const renderCategoryIcon = (iconType: string) => {
    switch (iconType) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#B88932]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#12365A]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#2E7D32]" />;
      case 'Vote':
        return <Vote className="w-5 h-5 text-[#C2410C]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#12365A]" />;
    }
  };

  return (
    <section id="reports" className="min-h-[calc(100vh-4.5rem)] bg-[#F8F9FA] py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* VIEW 1: FULL REPORT READER                                */}
        {/* ========================================================= */}
        {activeReportId ? (
          <div className="animate-in fade-in duration-200">
            {/* Breadcrumb & Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#DFE4E8]">
              <div className="flex items-center gap-2 text-xs font-bold">
                <button
                  onClick={() => {
                    setActiveReportId(null);
                    window.history.pushState({}, '', '/reports');
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white border border-[#DFE4E8] text-[#12365A] hover:bg-[#12365A] hover:text-white transition-all cursor-pointer shadow-2xs font-semibold"
                >
                  {isRtl ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                  <span>
                    {lang === 'ar'
                      ? 'العودة إلى أقسام التقارير الأربعة'
                      : lang === 'fr'
                      ? 'Retour aux 4 sections de rapports'
                      : 'Back to All 4 Report Sections'}
                  </span>
                </button>
                <span className="text-[#8695A3] hidden sm:inline">/</span>
                <span className="text-[#8695A3] hidden sm:inline font-mono uppercase">{report.categoryLabel}</span>
                <span className="text-[#8695A3] hidden sm:inline">/</span>
                <span className="px-2 py-0.5 rounded bg-[#12365A] text-white font-mono text-[11px] hidden sm:inline">
                  {report.briefNumber}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#DFE4E8] bg-white text-[#4B5864] hover:text-[#12365A] hover:border-[#12365A] transition-colors cursor-pointer"
                  title="Share Report Link"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>
                    {copied
                      ? (lang === 'ar' ? 'تم نسخ الرابط' : lang === 'fr' ? 'Lien copié !' : 'Link copied!')
                      : (lang === 'ar' ? 'مشاركة' : lang === 'fr' ? 'Partager' : 'Share')}
                  </span>
                </button>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#DFE4E8] bg-white text-[#4B5864] hover:text-[#12365A] hover:border-[#12365A] transition-colors cursor-pointer hidden sm:inline-flex"
                  title="Print Brief"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'طباعة' : lang === 'fr' ? 'Imprimer' : 'Print'}</span>
                </button>
              </div>
            </div>

            {/* Report Header Card */}
            <header className="bg-white border border-[#DFE4E8] rounded-t p-6 sm:p-12 shadow-sm mb-0">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#12365A] text-white text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {report.categoryLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#F5EEDF] border border-[#E8D6B4] text-[#B88932] text-xs font-bold tracking-widest uppercase">
                  <Vote className="w-3.5 h-3.5" />
                  <span>{report.coveragePeriod}</span>
                </span>
                <span className="text-xs text-[#62717F] font-mono">
                  {report.edition} · {report.date}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#14202B] tracking-tight leading-tight mb-4">
                {report.title}
              </h1>

              <p className="text-base sm:text-xl font-medium text-[#12365A] leading-relaxed mb-8">
                {report.subtitle}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded bg-[#F8F9FA] border border-[#EEF1F4] text-xs">
                <div>
                  <span className="text-[#8695A3] block mb-0.5">{lang === 'ar' ? 'المؤلف' : lang === 'fr' ? 'Auteur' : 'Author'}</span>
                  <span className="font-bold text-[#14202B] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#B88932]" />
                    {report.author}
                  </span>
                </div>
                <div>
                  <span className="text-[#8695A3] block mb-0.5">{lang === 'ar' ? 'تاريخ النشر' : lang === 'fr' ? 'Date de publication' : 'Publication Date'}</span>
                  <span className="font-bold text-[#14202B] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B88932]" />
                    {report.date}
                  </span>
                </div>
                <div>
                  <span className="text-[#8695A3] block mb-0.5">{lang === 'ar' ? 'نطاق الرصد' : lang === 'fr' ? 'Période couverte' : 'Coverage Scope'}</span>
                  <span className="font-bold text-[#14202B]">{report.coveragePeriod}</span>
                </div>
                <div>
                  <span className="text-[#8695A3] block mb-0.5">{lang === 'ar' ? 'التحديث المرتقب' : lang === 'fr' ? 'Mise à jour prévue' : 'Next Update'}</span>
                  <span className="font-bold text-[#12365A]">{report.nextUpdate}</span>
                </div>
              </div>
            </header>

            {/* Editorial Principle Banner */}
            <div className="bg-[#12365A] text-white p-6 sm:p-8 border-x border-[#0E2945]">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded bg-white/10 shrink-0 mt-1">
                  <Compass className="w-5 h-5 text-[#E8D6B4]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#E8D6B4] uppercase block mb-1">
                    {report.editorialPrinciple.tagline}
                  </span>
                  <blockquote className="text-base sm:text-lg font-bold italic text-white mb-2">
                    « {report.editorialPrinciple.quote} »
                  </blockquote>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {report.editorialPrinciple.explanation}
                  </p>
                </div>
              </div>
            </div>

            {/* Executive Summary Section */}
            <div className="bg-white border-x border-b border-[#DFE4E8] p-6 sm:p-10 mb-8 shadow-xs">
              <h2 className="text-xl font-bold text-[#14202B] pb-3 mb-6 border-b border-[#EEF1F4] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#B88932]" />
                <span>{report.executiveSummary.title}</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#4B5864] leading-relaxed mb-8">
                {report.executiveSummary.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Core Analytical Questions Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded bg-[#FAF6EE] border-l-4 border-[#B88932] border-y border-r border-[#E8D6B4]">
                <div>
                  <span className="text-xs font-bold text-[#B88932] uppercase tracking-wider block mb-1">
                    {lang === 'ar' ? 'السؤال الانتخابي المعتاد' : lang === 'fr' ? 'La question électorale habituelle' : 'The standard election question:'}
                  </span>
                  <p className="text-sm font-semibold text-[#14202B] italic">
                    « {report.executiveSummary.keyQuestions.attractivePromise} »
                  </p>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-[#E8D6B4] pt-3 md:pt-0 md:pl-4">
                  <span className="text-xs font-bold text-[#12365A] uppercase tracking-wider block mb-1">
                    {lang === 'ar' ? 'سؤال مرصد السياسات العمومية' : lang === 'fr' ? 'La question de Morocco Policy Monitor' : 'The Morocco Policy Monitor question:'}
                  </span>
                  <p className="text-sm font-bold text-[#12365A]">
                    « {report.executiveSummary.keyQuestions.measureEvidence} »
                  </p>
                </div>
              </div>
            </div>

            {/* In-Depth Report Sections */}
            <div className="space-y-8">
              {report.sections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="bg-white border border-[#DFE4E8] rounded p-6 sm:p-10 shadow-xs"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-[#14202B] mb-4">
                    {sec.title}
                  </h3>

                  {sec.paragraphs && sec.paragraphs.length > 0 && (
                    <div className="space-y-3 text-sm sm:text-base text-[#4B5864] leading-relaxed mb-6">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  )}

                  {/* Optional Data Table */}
                  {sec.table && (
                    <div className="my-6 overflow-x-auto border border-[#DFE4E8] rounded-xs shadow-2xs">
                      <table className="w-full text-xs sm:text-sm text-left rtl:text-right">
                        <thead className="bg-[#12365A] text-white">
                          <tr>
                            {sec.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-4 py-3 font-semibold uppercase tracking-wider text-[11px]">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EEF1F4]">
                          {sec.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-[#F8F9FA] hover:bg-slate-50'}>
                              <td className="px-4 py-3 font-medium text-[#14202B]">{row[0]}</td>
                              <td className="px-4 py-3 font-bold text-[#12365A]">{row[1]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Optional Subheading */}
                  {sec.subheading && (
                    <h4 className="text-base font-bold text-[#14202B] mt-6 mb-3">
                      {sec.subheading}
                    </h4>
                  )}

                  {/* Optional Bulleted List */}
                  {sec.listItems && sec.listItems.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {sec.listItems.map((item, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2.5 text-sm text-[#4B5864]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B88932] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Optional Subsections (Party manifestos or theme spotlights) */}
                  {sec.subsections && sec.subsections.length > 0 && (
                    <div className="space-y-6 my-6">
                      {sec.subsections.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-5 sm:p-6 rounded border border-[#EEF1F4] bg-[#FAF6EE]/40 hover:bg-[#FAF6EE] transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                            <h4 className="text-base sm:text-lg font-bold text-[#14202B]">
                              {sub.title}
                            </h4>
                            {sub.tagline && (
                              <span className="text-xs font-semibold text-[#B88932] italic">
                                {sub.tagline}
                              </span>
                            )}
                          </div>

                          {sub.content && (
                            <div className="space-y-2 text-sm text-[#4B5864] leading-relaxed mb-4">
                              {sub.content.map((c, cIdx) => (
                                <p key={cIdx}>{c}</p>
                              ))}
                            </div>
                          )}

                          {sub.potentialIndicators && sub.potentialIndicators.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-[#E8D6B4]/60">
                              <span className="text-xs font-bold text-[#12365A] block mb-2">
                                {sub.potentialIndicatorsTitle || (lang === 'ar' ? 'مؤشرات التتبع المقترحة:' : lang === 'fr' ? 'Indicateurs de suivi MPM :' : 'Potential MPM Indicators:')}
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {sub.potentialIndicators.map((ind, iIdx) => (
                                  <div key={iIdx} className="flex items-center gap-1.5 text-xs text-[#2A3742] bg-white p-2 rounded border border-[#EEF1F4]">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                                    <span>{ind}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {sub.primarySource && (
                            <div className="mt-4 pt-3 flex items-center justify-between text-xs border-t border-[#E8D6B4]/50">
                              <span className="text-[#8695A3]">
                                {lang === 'ar' ? 'المصدر الأولي:' : lang === 'fr' ? 'Source primaire vérifiée :' : 'Verified Primary Source:'}
                              </span>
                              <a
                                href={sub.primarySource.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-bold text-[#12365A] hover:text-[#B88932] transition-colors"
                              >
                                <span>{sub.primarySource.label}</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Section Quote */}
                  {sec.quote && (
                    <div className="my-6 p-4 rounded bg-[#EEF1F4] border-l-4 border-[#12365A] italic text-sm font-semibold text-[#14202B]">
                      « {sec.quote} »
                    </div>
                  )}

                  {/* Expandable Section Primary Sources Panel */}
                  {sec.sources && sec.sources.items.length > 0 && (
                    <div className="mt-8 pt-4 border-t border-[#DFE4E8]">
                      <button
                        onClick={() => toggleSources(sec.id)}
                        className="w-full flex items-center justify-between p-3 rounded bg-[#F8F9FA] hover:bg-[#EEF1F4] border border-[#DFE4E8] text-xs font-bold text-[#12365A] transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#B88932]" />
                          <span>{sec.sources.title}</span>
                          <span className="px-2 py-0.5 rounded-full bg-[#12365A] text-white text-[10px]">
                            {sec.sources.items.length} {lang === 'ar' ? 'مصادر' : lang === 'fr' ? 'sources' : 'sources'}
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-[#62717F]">
                          <span>{openSources[sec.id] ? report.hideSourcesBtn : report.showSourcesBtn}</span>
                          {openSources[sec.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </span>
                      </button>

                      {openSources[sec.id] && (
                        <div className="mt-2 p-4 bg-[#FAF6EE] border border-[#E8D6B4] rounded-b animate-in fade-in duration-150 space-y-2">
                          <p className="text-[11px] text-[#62717F] mb-3">
                            {report.sourcesPanelDesc}
                          </p>
                          <ul className="space-y-2">
                            {sec.sources.items.map((src, sIdx) => (
                              <li key={sIdx} className="flex items-start justify-between gap-3 text-xs bg-white p-2.5 rounded border border-[#EEF1F4]">
                                <span className="font-semibold text-[#14202B]">{src.label}</span>
                                {src.url && (
                                  <a
                                    href={src.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#12365A]/5 hover:bg-[#12365A] text-[#12365A] hover:text-white font-mono text-[10px] font-bold transition-colors shrink-0"
                                  >
                                    <span>{lang === 'ar' ? 'فتح الوثيقة' : lang === 'fr' ? 'Consulter le document' : 'Direct Link'}</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Back to Categories Footer Navigation */}
            <div className="mt-12 pt-8 border-t border-[#DFE4E8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  setActiveReportId(null);
                  window.history.pushState({}, '', '/reports');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#12365A] text-white hover:bg-[#0B1E33] font-bold text-sm transition-all shadow-xs cursor-pointer"
              >
                {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>
                  {lang === 'ar'
                    ? 'العودة إلى كافة أقسام ومنشورات المرصد'
                    : lang === 'fr'
                    ? 'Retour à toutes les sections de rapports'
                    : 'Back to All Report Categories'}
                </span>
              </button>

              <div className="text-xs text-[#62717F]">
                {lang === 'ar'
                  ? 'مرصد السياسات العمومية · بحث وتدقيق مستقل'
                  : lang === 'fr'
                  ? 'Morocco Policy Monitor · Recherche civique indépendante'
                  : 'Morocco Policy Monitor · Independent Civic Research'}
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* VIEW 2: 4 EXPANDABLE REPORT CATEGORIES OVERVIEW           */
          /* ========================================================= */
          <div className="animate-in fade-in duration-200">
            {/* Header / Intro */}
            <div className="mb-10 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#B88932] uppercase">
                  06 · {lang === 'ar' ? 'البحث والمنشورات' : lang === 'fr' ? 'RECHERCHE & PUBLICATIONS' : 'RESEARCH & PUBLICATIONS'}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14202B] tracking-tight mb-4">
                {lang === 'ar'
                  ? 'التقارير والموجزات السياساتية'
                  : lang === 'fr'
                  ? 'Rapports d’Audit & Publications'
                  : 'Reports & Research Library'}
              </h1>
              <p className="text-base sm:text-lg text-[#62717F] max-w-3xl leading-relaxed">
                {lang === 'ar'
                  ? 'مكتبة المنشورات والدراسات التحليلية الصادرة عن مرصد السياسات العمومية، مصنفة في أربعة أقسام موضوعاتية موثقة حصراً بالمصادر الأولية والبيانات المرجعية.'
                  : lang === 'fr'
                  ? 'La bibliothèque des travaux de recherche et d’audit citoyen de Morocco Policy Monitor, organisée en quatre sections thématiques indépendantes adossées à des sources primaires vérifiables.'
                  : 'A curated library of evidence-backed reports, audits, and policy briefs produced by Morocco Policy Monitor. Organized across four distinct publication streams.'}
              </p>
            </div>

            {/* Quick Filter / Summary Counter Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {categories.map((cat) => {
                const publishedCount = cat.reports.filter((r) => r.status === 'published').length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setExpandedCategories((prev) => ({
                        ...prev,
                        [cat.id]: true,
                      }));
                      const el = document.getElementById(`cat-${cat.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded bg-white border border-[#DFE4E8] hover:border-[#12365A] transition-all text-left rtl:text-right shadow-2xs group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      {renderCategoryIcon(cat.iconType)}
                      <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-[#12365A]">
                        {cat.reports.length}
                      </span>
                    </div>
                    <div className="font-bold text-xs text-[#14202B] group-hover:text-[#12365A] truncate">
                      {lang === 'ar' ? cat.nameAr : lang === 'fr' ? cat.nameFr : cat.name}
                    </div>
                    <div className="text-[10px] text-[#8695A3] mt-0.5">
                      {publishedCount > 0
                        ? `${publishedCount} ${lang === 'ar' ? 'منشور' : lang === 'fr' ? 'publié' : 'published'}`
                        : (lang === 'ar' ? 'قيد الإعداد' : lang === 'fr' ? 'En préparation' : 'Forthcoming')}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Featured Notice for Election Brief 001 */}
            <div className="mb-10 p-5 sm:p-6 bg-gradient-to-r from-[#F5EEDF] via-[#FAF6EE] to-white border-l-4 border-[#B88932] border-y border-r border-[#E8D6B4] rounded-sm shadow-xs">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#12365A] text-white font-mono text-[10px] font-bold">
                      {lang === 'ar' ? 'تقرير خاص منشور' : lang === 'fr' ? 'Rapport Spécial Publié' : 'Featured Special Report'}
                    </span>
                    <span className="text-[11px] font-bold text-[#B88932] uppercase tracking-wider">
                      {report.briefNumber} · {report.date}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#14202B]">
                    {report.title}: {report.subtitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#62717F] leading-relaxed">
                    {lang === 'ar'
                      ? '15,801,162 ناخباً · 395 مقعداً · تدقيق التزامات الأحرار والبام والاستقلال والاتحاد والتقدم والعدالة والتنمية مع كافة الروابط المباشرة للمصادر الرسمية.'
                      : lang === 'fr'
                      ? '15 801 162 inscrits · 395 sièges · Analyse comparative des engagements RNI, PAM, PI, USFP, PPS et PJD avec sources primaires directes.'
                      : '15,801,162 registered voters · 395 seats · Comprehensive baseline of RNI, PAM, PI, USFP, PPS, and PJD quantified pledges with deep-linked primary sources.'}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveReportId('election-brief-001');
                    window.history.pushState({}, '', '/reports?report=election-brief-001');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#12365A] hover:bg-[#0B1E33] text-white text-xs font-bold transition-all shrink-0 shadow-xs cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>
                    {lang === 'ar'
                      ? 'قراءة التقرير الخاص كاملاً'
                      : lang === 'fr'
                      ? 'Consulter le rapport complet'
                      : 'Read Full Special Report'}
                  </span>
                  <span className={isRtl ? 'rotate-180 inline-block' : ''}>→</span>
                </button>
              </div>
            </div>

            {/* THE 4 EXPANDABLE CATEGORIES */}
            <div className="space-y-6">
              {categories.map((cat) => {
                const isExpanded = !!expandedCategories[cat.id];
                return (
                  <section
                    key={cat.id}
                    id={`cat-${cat.id}`}
                    className="bg-white border border-[#DFE4E8] rounded shadow-2xs overflow-hidden transition-all"
                  >
                    {/* Category Accordion Header */}
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 bg-white hover:bg-[#FAF6EE]/50 transition-colors text-left rtl:text-right cursor-pointer"
                    >
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                        <div className="p-2.5 rounded bg-[#F8F9FA] border border-[#EEF1F4] shrink-0 mt-0.5 sm:mt-0">
                          {renderCategoryIcon(cat.iconType)}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h2 className="text-lg sm:text-xl font-black text-[#14202B]">
                              {lang === 'ar' ? cat.nameAr : lang === 'fr' ? cat.nameFr : cat.name}
                            </h2>
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#FAF6EE] text-[#B88932] border border-[#E8D6B4]">
                              {cat.badge}
                            </span>
                            <span className="text-xs font-mono text-[#8695A3]">
                              ({cat.reports.length} {lang === 'ar' ? 'وثائق' : lang === 'fr' ? 'documents' : 'documents'})
                            </span>
                          </div>
                          <p className="text-xs text-[#62717F] max-w-3xl leading-relaxed">
                            {lang === 'ar' ? cat.descriptionAr : lang === 'fr' ? cat.descriptionFr : cat.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3 rtl:mr-3 rtl:ml-0">
                        <span className="text-xs font-semibold text-[#12365A] hidden sm:inline">
                          {isExpanded
                            ? (lang === 'ar' ? 'طي القسم' : lang === 'fr' ? 'Réduire' : 'Collapse')
                            : (lang === 'ar' ? 'عرض المحتويات' : lang === 'fr' ? 'Développer' : 'Expand')}
                        </span>
                        <div className="p-1 rounded bg-[#F8F9FA] text-[#12365A]">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>
                    </button>

                    {/* Category Content: List of Briefs */}
                    {isExpanded && (
                      <div className="p-5 sm:p-6 pt-0 border-t border-[#EEF1F4] bg-[#FAF8F5]/30">
                        {cat.reports.length === 0 ? (
                          <div className="py-8 text-center text-xs text-[#8695A3]">
                            <Clock className="w-5 h-5 mx-auto mb-2 text-[#8695A3] opacity-60" />
                            <p className="font-semibold text-[#4B5864]">
                              {lang === 'ar'
                                ? 'لا توجد تقارير منشورة في هذا القسم حالياً · قيد الإعداد والتوثيق'
                                : lang === 'fr'
                                ? 'Aucun rapport publié dans cette section pour le moment · En préparation'
                                : 'No reports published in this section yet · Forthcoming'}
                            </p>
                            <p className="mt-1 text-[11px] text-[#8695A3]">
                              {lang === 'ar'
                                ? 'سيتم إدراج الدراسات والتحليلات الخاصة بهذا المحور فور استكمال التوثيق والتدقيق.'
                                : lang === 'fr'
                                ? 'Les publications relatives à cette section seront ajoutées dès finalisation de la recherche et audit.'
                                : 'Research publications for this category will be published here upon completion of the audit dossiers.'}
                            </p>
                          </div>
                        ) : (
                          <div className="divide-y divide-[#EEF1F4]">
                            {cat.reports.map((rep) => (
                              <div
                                key={rep.id}
                                className="py-5 first:pt-4 last:pb-2 flex flex-col lg:flex-row lg:items-center justify-between gap-4 group"
                              >
                                <div className="space-y-2 max-w-3xl">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#12365A] text-white">
                                      {rep.briefNumber}
                                    </span>
                                    {rep.status === 'published' ? (
                                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        {rep.statusLabel}
                                      </span>
                                    ) : (
                                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#62717F] border border-slate-200">
                                        {rep.statusLabel}
                                      </span>
                                    )}
                                    <span className="text-xs text-[#8695A3]">
                                      {rep.date} · {rep.author}
                                    </span>
                                  </div>

                                  <h3 className="text-base sm:text-lg font-bold text-[#14202B] group-hover:text-[#12365A] transition-colors">
                                    {rep.title}
                                  </h3>

                                  <p className="text-xs sm:text-sm text-[#62717F] leading-relaxed">
                                    {rep.summary}
                                  </p>

                                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                    {rep.tags.map((tg, tgIdx) => (
                                      <span
                                        key={tgIdx}
                                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-white text-[#4B5864] border border-[#DFE4E8]"
                                      >
                                        <Tag className="w-2.5 h-2.5 text-[#B88932]" />
                                        {tg}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                <div className="shrink-0 self-start lg:self-center">
                                  {rep.status === 'published' ? (
                                    <button
                                      onClick={() => {
                                        setActiveReportId(rep.id);
                                        window.history.pushState({}, '', `/reports?report=${rep.id}`);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                      }}
                                      className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#12365A] hover:bg-[#0B1E33] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                                    >
                                      <BookOpen className="w-3.5 h-3.5" />
                                      <span>
                                        {lang === 'ar'
                                          ? 'قراءة الموجز كاملاً'
                                          : lang === 'fr'
                                          ? 'Lire le brief complet'
                                          : 'Read Full Brief'}
                                      </span>
                                      <span className={isRtl ? 'rotate-180 inline-block' : ''}>→</span>
                                    </button>
                                  ) : (
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 text-[#8695A3] text-xs font-semibold cursor-not-allowed">
                                      <Clock className="w-3.5 h-3.5" />
                                      <span>{lang === 'ar' ? 'قيد البحث والتحرير' : lang === 'fr' ? 'Dossier en cours' : 'In Preparation'}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            {/* Editorial Footer Disclaimer */}
            <div className="mt-12 p-6 rounded bg-white border border-[#DFE4E8] text-center sm:text-left text-xs text-[#62717F] shadow-2xs">
              <span className="font-bold text-[#14202B] uppercase tracking-wider block mb-1">
                {lang === 'ar' ? 'ملاحظة تحريرية ومنهجية للمرصد:' : lang === 'fr' ? 'Note éditoriale et méthodologique :' : 'Editorial & Methodological Note:'}
              </span>
              <p className="leading-relaxed">
                {lang === 'ar'
                  ? 'تعبر التقارير والموجزات المنشورة في هذه الأقسام عن بحث سياساتي وأكاديمي مستقل. لا تمثل موقف أي حزب سياسي أو حكومة أو هيئة رسمية. يستند المرصد حصراً إلى البيانات الرسمية المنشورة من قبل الهيئات الدستورية والمؤسسات الإحصائية الوطنية (المندوبية السامية للتخطيط، بنك المغرب، المجلس الأعلى للحسابات، والأمانة العامة للحكومة).'
                  : lang === 'fr'
                  ? 'Les rapports et briefs publiés dans ces sections constituent des travaux d’analyse indépendants. Ils n’engagent aucun parti, gouvernement ou institution. Morocco Policy Monitor s’appuie exclusivement sur les données publiques et publications officielles émanant des instances constitutionnelles et organismes statistiques nationaux (HCP, Bank Al-Maghrib, Cour des comptes, Secrétariat Général du Gouvernement).'
                  : 'Reports and research briefs published in these sections represent independent policy analysis. They do not represent the position of any political party, government, or institution. Morocco Policy Monitor relies strictly on verifiable public data released by national statistical authorities and constitutional bodies.'}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
