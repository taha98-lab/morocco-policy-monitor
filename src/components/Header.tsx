import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Menu, X, Shield, Globe, ChevronDown } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onChangeLanguage: (language: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onChangeLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navLinks = [
    { path: '/understand', label: t.nav.understand },
    { path: '/economy', label: t.nav.economy },
    { path: '/monitor', label: t.nav.monitor },
    { path: '/money', label: t.nav.money },
    { path: '/methodology', label: t.nav.methodology },
    { path: '/assistant', label: t.nav.assistant },
    { path: '/accountability', label: t.nav.founder },
    { path: '/reports', label: t.nav.reports },
  ];

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#DFE4E8] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        <button onClick={() => navigate('/')} className="flex items-center gap-3 group text-left" aria-label="Morocco Policy Monitor home">
          <div className="w-10 h-10 rounded-md bg-[#12365A] text-white flex items-center justify-center font-extrabold text-sm tracking-wider shadow-xs group-hover:bg-[#0B1E33] transition-colors">
            MPM
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-[#14202B] leading-tight flex items-center gap-1.5">
              {t.brandName}<Shield className="w-3.5 h-3.5 text-[#B88932]" />
            </span>
            <span className="text-xs text-[#62717F] font-medium leading-none mt-0.5">
              {lang === 'ar' ? 'Morocco Policy Monitor · معلومات مستقلة' : lang === 'fr' ? 'مرصد السياسات العمومية · Maroc' : 'مرصد السياسات العمومية · Morocco'}
            </span>
          </div>
        </button>

        <nav className="hidden 2xl:flex items-center gap-4 min-w-0">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="text-[11px] font-semibold uppercase tracking-wide text-[#34424D] hover:text-[#12365A] transition-colors py-2 border-b-2 border-transparent hover:border-[#12365A] whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <label className="relative flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#B88932]" />
            <select
              value={lang}
              onChange={(e) => onChangeLanguage(e.target.value as Language)}
              className="appearance-none pr-7 pl-2 py-1.5 rounded border border-[#DFE4E8] hover:border-[#12365A] bg-white text-xs font-semibold text-[#14202B] cursor-pointer focus:outline-none focus:border-[#12365A]"
              aria-label={t.languageLabel}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
            <ChevronDown className="absolute right-1.5 w-3 h-3 text-[#62717F] pointer-events-none" />
          </label>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="2xl:hidden p-2 rounded border border-[#DFE4E8] text-[#14202B] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
            aria-label={t.mobileMenuLabel}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="2xl:hidden border-t border-[#DFE4E8] bg-white px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-[#14202B] hover:bg-[#F1F4F7]"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
