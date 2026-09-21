import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PrincipleBanner } from './components/PrincipleBanner';
import { UnderstandMorocco } from './components/UnderstandMorocco';
import { EconomySection } from './components/EconomySection';
import { GovernmentMonitor } from './components/GovernmentMonitor';
import { FollowTheMoney } from './components/FollowTheMoney';
import { ReportsSection } from './components/ReportsSection';
import { MethodologySection } from './components/MethodologySection';
import { CivicAIAssistant } from './components/CivicAIAssistant';
import { FounderAccountability } from './components/FounderAccountability';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <div className={`min-h-screen flex flex-col bg-[#F8F9FA] text-[#14202B] ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Header lang={lang} onToggleLang={() => setLang((prev) => prev === 'en' ? 'fr' : prev === 'fr' ? 'ar' : 'en')} />

      <main className="flex-1">
        <Hero lang={lang} />
        <PrincipleBanner lang={lang} />
        <UnderstandMorocco lang={lang} />
        <EconomySection lang={lang} />
        <GovernmentMonitor lang={lang} />
        <FollowTheMoney lang={lang} />
        <ReportsSection lang={lang} />
        <MethodologySection lang={lang} />
        <CivicAIAssistant lang={lang} />
        <FounderAccountability lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
