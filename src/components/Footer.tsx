import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Shield, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#DFE4E8] py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#62717F]">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Brand & Mark */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 rounded bg-[#12365A] text-white flex items-center justify-center font-bold text-[10px]">
            MPM
          </div>
          <span className="font-bold text-sm text-[#14202B]">
            {t.footer.title} · {t.footer.sub}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-xs text-[#62717F] max-w-lg mx-auto leading-relaxed">
          {t.footer.nonPartisan}
        </p>

        {/* Metadata & Founder */}
        <div className="pt-2 text-[11px] text-[#8695A3] space-y-1">
          <div>{t.footer.tagline}</div>
          <div className="font-medium text-[#4B5864]">{t.footer.rights}</div>
        </div>

        {/* Back to top */}
        <div className="pt-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#12365A] hover:text-[#0B1E33] cursor-pointer"
          >
            <span>{lang === 'en' ? 'Back to top' : 'العودة إلى الأعلى'}</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
