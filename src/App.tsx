import React, { useEffect, useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PrincipleBanner } from './components/PrincipleBanner';
import { UnderstandMorocco } from './components/UnderstandMorocco';
import { EconomySection } from './components/EconomySection';
import { GovernmentMonitor } from './components/GovernmentMonitor';
import { FollowTheMoney } from './components/FollowTheMoney';
import { MethodologySection } from './components/MethodologySection';
import { CivicAIAssistant } from './components/CivicAIAssistant';
import { FounderAccountability } from './components/FounderAccountability';
import { ReportsSection } from './components/ReportsSection';
import { Footer } from './components/Footer';

const ROUTES = new Set([
  '/', '/understand', '/economy', '/monitor', '/money',
  '/methodology', '/assistant', '/accountability', '/reports'
]);

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('mpm-language');
    return saved === 'fr' || saved === 'ar' ? saved : 'en';
  });
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('mpm-language', lang);
  }, [lang]);

  const safePath = ROUTES.has(path) ? path : '/';

  const page = (() => {
    switch (safePath) {
      case '/understand': return <UnderstandMorocco lang={lang} />;
      case '/economy': return <EconomySection lang={lang} />;
      case '/monitor': return <GovernmentMonitor lang={lang} />;
      case '/money': return <FollowTheMoney lang={lang} />;
      case '/methodology': return <MethodologySection lang={lang} />;
      case '/assistant': return <CivicAIAssistant lang={lang} />;
      case '/accountability': return <FounderAccountability lang={lang} />;
      case '/reports': return <ReportsSection lang={lang} />;
      default:
        return (
          <>
            <Hero lang={lang} />
            <PrincipleBanner lang={lang} />
          </>
        );
    }
  })();

  return (
    <div className={`min-h-screen flex flex-col bg-[#F8F9FA] text-[#14202B] ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Header lang={lang} onChangeLanguage={setLang} />
      <main className="flex-1">{page}</main>
      <Footer lang={lang} />
    </div>
  );
}
