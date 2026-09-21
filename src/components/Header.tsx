import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Menu, X, Shield, Globe } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navLinks = [
    { href: '#understand', label: t.nav.understand },
    { href: '#economy', label: t.nav.economy },
    { href: '#monitor', label: t.nav.monitor },
    { href: '#money', label: t.nav.money },
    { href: '#reports', label: t.nav.reports },
    { href: '#methodology', label: t.nav.methodology },
    { href: '#assistant', label: t.nav.assistant },
    { href: '#founder', label: t.nav.founder },
  ];

  const languageLabel = lang === 'en' ? 'Français' : lang === 'fr' ? 'العربية' : 'English';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#DFE4E8] shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-md bg-[#12365A] text-white flex items-center justify-center font-extrabold text-sm tracking-wider shadow-xs group-hover:bg-[#0B1E33] transition-colors">MPM</div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-[#14202B] leading-tight flex items-center gap-1.5">
              {t.brandName}<Shield className="w-3.5 h-3.5 text-[#B88932]" />
            </span>
            <span className="text-xs text-[#62717F] font-medium leading-none mt-0.5">
              {lang === 'en' ? 'مرصد السياسات العمومية · Morocco' : lang === 'fr' ? 'مرصد السياسات العمومية · Maroc' : 'Morocco Policy Monitor · معلومات مستقلة'}
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-semibold uppercase tracking-wider text-[#34424D] hover:text-[#12365A] transition-colors py-2 border-b-2 border-transparent hover:border-[#12365A]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={onToggleLang} className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#DFE4E8] hover:border-[#12365A] bg-white text-xs font-semibold text-[#14202B] hover:bg-[#F8F9FA] transition-all shadow-2xs cursor-pointer" aria-label={t.languageLabel}>
            <Globe className="w-3.5 h-3.5 text-[#B88932]" />
            <span>{languageLabel}</span>
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded border border-[#DFE4E8] text-[#14202B] hover:bg-[#F8F9FA] transition-colors cursor-pointer" aria-label={t.mobileMenuLabel}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DFE4E8] bg-white px-4 py-4 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-md text-sm font-medium text-[#14202B] hover:bg-[#F1F4F7] transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
