import React, { useState, useEffect } from 'react';
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
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  // Synchronize document dir and lang attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#F8F9FA] text-[#14202B] ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* Navigation Header */}
      <Header lang={lang} onToggleLang={handleToggleLang} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero lang={lang} />

        {/* Core Principle Quote Banner */}
        <PrincipleBanner lang={lang} />

        {/* 01 · Understand Morocco (Civic & Constitutional Architecture) */}
        <UnderstandMorocco lang={lang} />

        {/* 02 · The Economy (Indicators & Historical Series) */}
        <EconomySection lang={lang} />

        {/* 03 · Government Monitor (Commitment Audit & Evidence Dossiers) */}
        <GovernmentMonitor lang={lang} />

        {/* 04 · Follow the Money (Loi de Finances Interactive Budget Pipeline) */}
        <FollowTheMoney lang={lang} />

        {/* 05 · Methodology (The 6-Step Evidence Protocol) */}
        <MethodologySection lang={lang} />

        {/* 06 · Citizen Civic AI Analyst */}
        <CivicAIAssistant lang={lang} />

        {/* Project Accountability & Founder Attribution */}
        <FounderAccountability lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
