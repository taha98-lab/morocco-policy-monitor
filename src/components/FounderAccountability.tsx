import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Shield, UserCheck, MessageSquare, Check, Send } from 'lucide-react';

interface FounderAccountabilityProps {
  lang: Language;
}

export const FounderAccountability: React.FC<FounderAccountabilityProps> = ({ lang }) => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [correctionNote, setCorrectionNote] = useState('');
  const t = TRANSLATIONS[lang];

  const handleCorrectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!correctionNote.trim()) return;
    setFeedbackSent(true);
    setCorrectionNote('');
    setTimeout(() => setFeedbackSent(false), 4000);
  };

  return (
    <section id="founder" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Narrative */}
        <div className="lg:col-span-7">
          <span className="text-xs font-bold tracking-widest text-[#B88932] uppercase block mb-2">
            {t.founder.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14202B] tracking-tight mb-6">
            {t.founder.title}
          </h2>
          <p className="text-base sm:text-lg text-[#34424D] leading-relaxed mb-4">
            {t.founder.p1}
          </p>
          <p className="text-sm sm:text-base text-[#62717F] leading-relaxed mb-8">
            {t.founder.p2}
          </p>

          {/* Open Correction Feedback Box */}
          <div className="p-4 sm:p-5 rounded-sm bg-white border border-[#DFE4E8] shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-[#B88932]" />
              <span className="text-xs font-bold text-[#14202B] uppercase tracking-wider">
                {lang === 'fr' ? 'Corrections ouvertes et revue civique' : lang !== 'ar' ? 'Open Corrections & Civic Review' : 'المراجعة المدنية والتصحيح المفتوح'}
              </span>
            </div>
            <p className="text-xs text-[#62717F] mb-3 leading-relaxed">
              {t.founder.openCorrection}
            </p>

            {feedbackSent ? (
              <div className="p-3 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-medium">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'fr' ? 'Merci ! Votre référence a été enregistrée pour examen éditorial.' : lang !== 'ar' ? 'Thank you! Your citation note has been logged for editorial review.' : 'شكراً لك! تم تسجيل ملاحظتك لفحصها من قبل الفريق التحريري.'}</span>
              </div>
            ) : (
              <form onSubmit={handleCorrectionSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={correctionNote}
                  onChange={(e) => setCorrectionNote(e.target.value)}
                  placeholder={lang === 'fr' ? 'Indiquez le décret, le numéro de loi ou l’enquête du HCP…' : lang !== 'ar' ? 'Reference official decree, law number, or HCP survey…' : 'اذكر رقم القانون أو المرسوم أو إحصائية المندوبية…'}
                  className="flex-1 px-3 py-2 rounded-sm border border-[#DFE4E8] text-xs bg-[#F8F9FA] focus:bg-white focus:outline-hidden focus:border-[#12365A]"
                />
                <button
                  type="submit"
                  disabled={!correctionNote.trim()}
                  className="px-4 py-2 rounded-sm bg-[#12365A] hover:bg-[#0B1E33] disabled:opacity-40 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>{lang === 'fr' ? 'Envoyer' : lang !== 'ar' ? 'Submit' : 'إرسال'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Founder Card */}
        <div className="lg:col-span-5">
          <div className="bg-white border-2 border-[#12365A] rounded-sm p-8 shadow-md relative">
            <div className="w-12 h-12 rounded-sm bg-[#F5EEDF] text-[#B88932] flex items-center justify-center font-bold mb-6">
              <Shield className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold text-[#B88932] uppercase tracking-wider block mb-1">
              {t.founder.cardRole}
            </span>
            <h3 className="text-2xl font-extrabold text-[#14202B] mb-1">
              Taha Khobizi
            </h3>
            <span className="text-xs font-semibold text-[#12365A] block mb-6">
              {t.founder.cardAffiliation}
            </span>

            <div className="pt-4 border-t border-[#DFE4E8] text-xs sm:text-sm text-[#62717F] leading-relaxed">
              <p>{t.founder.cardStatement}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EEF1F4] flex items-center gap-2 text-xs font-medium text-[#4B5864]">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'fr' ? 'Transparence éditoriale et données vérifiées' : lang !== 'ar' ? 'Editorial Transparency & Verified Data' : 'شفافية تحريرية وتوثيق رسمي مستقل'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
