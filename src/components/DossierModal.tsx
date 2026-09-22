import React, { useState } from 'react';
import { Language, PromiseRecord } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { FRENCH_PROMISES, FRENCH_PROMISE_DETAILS } from '../data/frenchCivicData';
import { X, FileText, CheckCircle2, AlertTriangle, Scale, Coins, ExternalLink, Copy, Check, Printer } from 'lucide-react';

const SOURCE_URLS: Record<string, string> = {
  "Haut-Commissariat au Plan (HCP)": "https://www.hcp.ma/",
  "Chambre des représentants": "https://www.chambredesrepresentants.ma/",
  "Bank Al-Maghrib": "https://www.bkam.ma/",
  "Ministère de l’Économie et des Finances": "https://www.finances.gov.ma/",
  "Ministère de l’Équipement et de l’Eau": "https://www.equipement.gov.ma/",
  "Cabinet Royal": "https://www.maroc.ma/",
  "Direction Générale de l’Hydraulique": "https://www.equipement.gov.ma/",
  "Ministère de l’Éducation nationale": "https://www.men.gov.ma/",
  "J-PAL / ONDH": "https://www.j-pal.org/",
  "CSEFRS": "https://www.csefrs.ma/",
  "Agence Nationale du Soutien Social (ANSS)": "https://www.anss.gov.ma/",
  "Secrétariat Général du Gouvernement / Bulletin officiel": "https://www.sgg.gov.ma/",
  "CESE": "https://www.cese.ma/",
  "Ministère de l’Aménagement du Territoire et de l’Habitat": "https://www.mhpv.gov.ma/",
  "Ordre National des Notaires": "https://www.notaires.ma/"
};

const SOURCE_TITLE_URLS: Record<string, string> = {
  "Enquête nationale sur l’emploi — notes de conjoncture": "https://www.hcp.ma/Marche-du-travail_r423.html",
  "Déclaration du Chef du Gouvernement devant le Parlement": "https://www.chambredesrepresentants.ma/",
  "Rapport annuel sur la situation économique": "https://www.bkam.ma/",
  "La femme marocaine en chiffres": "https://www.hcp.ma/",
  "Rapport sur le Budget Genre accompagnant le PLF": "https://www.finances.gov.ma/fr/vous-orientez/Pages/plf2024.aspx",
  "Avis sur la participation des femmes au développement": "https://www.cese.ma/",
  "Loi-cadre n° 09-21 relative à la protection sociale": "https://www.sgg.gov.ma/",
  "Aides sociales directes — typologie et critères": "https://www.anss.gov.ma/fr/typologies-d-aides",
  "Orientations générales du PLF 2024": "https://www.finances.gov.ma/fr/vous-orientez/Pages/plf2024.aspx",
  "Rapport sur la situation hydrique nationale": "https://www.maroc.ma/fr/actualites/le-dessalement-au-service-de-la-souverainete-hydrique",
  "Discours du Trône sur la sécurité hydrique": "https://www.maroc.ma/fr/discours-messages-royaux/discours-royaux/sm-le-roi-adresse-un-discours-la-nation-loccasion-de-la-fete-du-trone-texte-integral",
  "Bulletin de situation des barrages": "https://www.equipement.gov.ma/",
  "Feuille de route 2022–2026 : Pour une école publique de qualité": "https://www.men.gov.ma/fr/etablissements-pionniers",
  "Établissements pionniers": "https://www.men.gov.ma/fr/%C3%A9tablissements-pionniers",
  "Évaluation d’impact du programme Écoles Pionnières": "https://www.men.gov.ma/fr/%C3%A9tablissements-pionniers",
  "Budget Citoyen / Loi de finances 2024 — aide au logement": "https://www.finances.gov.ma/Publication/db/2023/Budget%20Citoyen_PLF%202024_VFR.pdf",
  "Bilan de la plateforme Daam Sakane": "https://www.maroc.ma/",
  "Statistiques de l’Ordre National des Notaires du Maroc": "https://www.notaires.ma/"
};

const sourceUrlFor = (institution: string, title?: string) =>
  (title && SOURCE_TITLE_URLS[title]) ||
  SOURCE_URLS[institution] ||
  Object.entries(SOURCE_URLS).find(([key]) => institution.includes(key) || key.includes(institution))?.[1] ||
  "https://www.maroc.ma/";

interface DossierModalProps {
  promise: PromiseRecord;
  lang: Language;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({ promise, lang, onClose }) => {
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleCopyCitation = () => {
    const citation = `[Morocco Policy Monitor Dossier ${promise.id}] "${lang === 'fr' ? FRENCH_PROMISES[promise.id]?.title : lang !== 'ar' ? promise.title : promise.titleAr}" - Status: ${lang === 'fr' ? FRENCH_PROMISES[promise.id]?.status : lang !== 'ar' ? promise.statusLabelEn : promise.statusLabelAr}. Source: Déclaration Gouvernementale / Bulletin Officiel (Retrieved 2026).`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0B1E33]/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-[#DFE4E8] rounded-md max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-[#DFE4E8] px-6 py-4 flex items-center justify-between gap-4 z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-white bg-[#12365A] px-2.5 py-1 rounded-sm">
              {promise.id}
            </span>
            <span className="text-xs font-semibold text-[#62717F] uppercase tracking-wider">
              {lang === 'fr' ? FRENCH_PROMISES[promise.id]?.area : lang !== 'ar' ? promise.area : promise.areaAr}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCitation}
              className="px-2.5 py-1.5 rounded text-xs font-medium border border-[#DFE4E8] text-[#34424D] hover:bg-[#F1F4F7] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy official citation"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#62717F]" />}
              <span>{copied ? t.dossier.copied : t.dossier.copyCitation}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded text-[#62717F] hover:text-[#14202B] hover:bg-[#F1F4F7] cursor-pointer"
              title="Print Dossier"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-[#62717F] hover:text-[#14202B] hover:bg-[#F1F4F7] cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7">
          {/* Title & Status */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#B88932] uppercase tracking-widest">
                {t.dossier.modalTitle}
              </span>
              <span>·</span>
              <span className="text-xs text-[#62717F]">
                {t.dossier.mandate}: {promise.mandatePeriod}
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#14202B] leading-tight mb-4">
              {lang === 'fr' ? FRENCH_PROMISES[promise.id]?.title : lang !== 'ar' ? promise.title : promise.titleAr}
            </h2>

            {/* Status & Confidence badges */}
            <div className="flex flex-wrap items-center gap-3 p-3.5 rounded bg-[#F8F9FA] border border-[#DFE4E8]">
              <div className="text-xs font-bold">
                <span className="text-[#62717F] block text-[10px] uppercase font-semibold">
                  {lang === 'fr' ? 'Statut de l’audit' : lang !== 'ar' ? 'Audit Status' : 'حالة التدقيق'}
                </span>
                <span className="text-sm font-extrabold text-[#14202B]">
                  {lang === 'fr' ? FRENCH_PROMISES[promise.id]?.status : lang !== 'ar' ? promise.statusLabelEn : promise.statusLabelAr}
                </span>
              </div>
              <div className="border-l border-[#DFE4E8] pl-3 text-xs">
                <span className="text-[#62717F] block text-[10px] uppercase font-semibold">
                  {t.monitor.confidenceLabel}
                </span>
                <span className="font-bold text-[#12365A]">
                  {lang === 'fr' ? (promise.confidence === 'High' ? 'Élevé' : promise.confidence === 'Medium' ? 'Moyen' : 'Faible') : lang !== 'ar' ? promise.confidence : promise.confidenceAr}
                </span>
              </div>
            </div>
          </div>

          {/* Target */}
          <div className="p-4 rounded-sm bg-[#FFFDF8] border-l-3 border-[#B88932] text-xs sm:text-sm">
            <span className="font-bold text-[#14202B] block mb-1">
              {t.monitor.targetLabel}:
            </span>
            <p className="text-[#34424D] leading-relaxed">
              {lang === 'fr' ? FRENCH_PROMISES[promise.id]?.target : lang !== 'ar' ? promise.target : promise.targetAr}
            </p>
          </div>

          {/* Official Verbatim Declaration */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#62717F] mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#B88932]" />
              <span>{t.dossier.officialText}</span>
            </h4>
            <blockquote className="p-3.5 rounded bg-[#F1F4F7] text-xs sm:text-sm font-serif italic text-[#14202B] leading-relaxed border-l-2 border-[#12365A]">
              {lang === 'fr' ? FRENCH_PROMISES[promise.id]?.officialDeclaration : lang !== 'ar' ? promise.officialDeclaration : promise.officialDeclarationAr}
            </blockquote>
          </div>

          {/* Budget Allocation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#62717F] mb-2 flex items-center gap-1.5">
              <Coins className="w-3.5 h-3.5 text-[#B88932]" />
              <span>{t.dossier.budgetEarmarked}</span>
            </h4>
            <p className="text-xs sm:text-sm font-mono font-bold text-[#14202B] bg-[#F8F9FA] p-3 rounded border border-[#DFE4E8]">
              {lang === 'fr' ? FRENCH_PROMISES[promise.id]?.budget : lang !== 'ar' ? promise.budgetAllocatedMad : promise.budgetAllocatedMadAr}
            </p>
          </div>

          {/* Two-column Comparison: Outputs vs Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Outputs */}
            <div className="p-4 rounded bg-white border border-[#DFE4E8]">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#12365A] mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#12365A]" />
                <span>{t.dossier.outputs}</span>
              </h5>
              <ul className="space-y-2 text-xs text-[#34424D]">
                {((lang === 'fr' ? FRENCH_PROMISE_DETAILS[promise.id]?.outputs : lang !== 'ar' ? promise.implementationOutputs : promise.implementationOutputsAr) || []).map((out: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#12365A] font-bold">•</span>
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="p-4 rounded bg-[#FFFBFB] border border-[#F0D5D5]">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#B22222] mb-3 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-[#B22222]" />
                <span>{t.dossier.outcomes}</span>
              </h5>
              <ul className="space-y-2 text-xs text-[#34424D]">
                {((lang === 'fr' ? FRENCH_PROMISE_DETAILS[promise.id]?.outcomes : lang !== 'ar' ? promise.citizenOutcomes : promise.citizenOutcomesAr) || []).map((out: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#B22222] font-bold">•</span>
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Uncertainty and Confounding factors */}
          <div className="p-4 rounded bg-[#F8F9FA] border border-[#DFE4E8]">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#62717F] mb-1.5 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-[#B88932]" />
              <span>{t.dossier.uncertainties}</span>
            </h5>
            <p className="text-xs text-[#4B5864] leading-relaxed">
              {lang === 'fr' ? FRENCH_PROMISE_DETAILS[promise.id]?.uncertainty : lang !== 'ar' ? promise.uncertaintyNotes : promise.uncertaintyNotesAr}
            </p>
          </div>

          {/* Evidence Log Timeline */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#62717F] mb-3">
              {t.dossier.timeline}
            </h4>
            <div className="border-l-2 border-[#DFE4E8] pl-4 space-y-4 text-xs">
              {(lang === 'fr' ? (FRENCH_PROMISES[promise.id]?.evidenceLog || []) : promise.evidenceLog).map((log: any, i: number) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-[#12365A] ring-4 ring-white" />
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-mono font-bold text-[#14202B]">{log.date}</span>
                    <span className="text-[#62717F]">·</span>
                    <a
                      href={sourceUrlFor(log.source, log.source)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#B88932] hover:underline"
                    >{log.source}</a>
                    <span className="text-[#62717F]">({log.type})</span>
                  </div>
                  <p className="text-[#34424D]">{log.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Official Sources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#62717F] mb-2">
              {t.dossier.primarySources}
            </h4>
            <div className="space-y-1.5 text-xs">
              {(lang === 'fr' ? (FRENCH_PROMISES[promise.id]?.primarySources || []) : promise.primarySources).map((src: any, i: number) => (
                <a
                  key={i}
                  href={sourceUrlFor(src.institution, src.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-2 rounded bg-[#F8F9FA] border border-[#EEF1F4] hover:border-[#12365A] hover:bg-white transition-colors"
                >
                  <div>
                    <span className="font-semibold text-[#14202B]">{src.title}</span>
                    <span className="text-[#62717F] block text-[11px]">{src.institution} ({src.date})</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#12365A] shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-white border-t border-[#DFE4E8] px-6 py-3.5 flex items-center justify-between">
          <span className="text-[11px] text-[#62717F]">
            Morocco Policy Monitor Evidence Registry
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-[#12365A] text-white text-xs font-semibold hover:bg-[#0B1E33] transition-colors cursor-pointer"
          >
            {t.dossier.close}
          </button>
        </div>
      </div>
    </div>
  );
};
