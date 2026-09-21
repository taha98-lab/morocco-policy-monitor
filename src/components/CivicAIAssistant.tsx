import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Sparkles, Send, Bot, AlertCircle, Copy, Check, RefreshCw } from 'lucide-react';

interface CivicAIAssistantProps {
  lang: Language;
}

export const CivicAIAssistant: React.FC<CivicAIAssistantProps> = ({ lang }) => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const t = TRANSLATIONS[lang];

  const suggestedQuestions = [
    t.assistant.q1,
    t.assistant.q2,
    t.assistant.q3,
    t.assistant.q4,
  ];

  const handleSubmit = async (queryText?: string) => {
    const q = (queryText || question).trim();
    if (!q || loading) return;

    if (queryText) {
      setQuestion(queryText);
    }

    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const res = await fetch('/api/civic-ai/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          language: lang,
          contextTopic: 'Moroccan Governance & Public Policy',
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server returned error (${res.status})`);
      }

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err: any) {
      console.error('AI assistant error:', err);
      // Helpful fallback response grounded in verified data if offline or key pending
      setError(
        lang === 'en'
          ? 'Notice: AI assistant request could not be completed via server. Please ensure network connectivity or check secret configuration.'
          : 'ملاحظة: تعذر إتمام طلب المساعد الذكي عبر الخادم. يرجى التحقق من الاتصال بالشبكة.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!answer) return;
    navigator.clipboard.writeText(answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="assistant" className="bg-[#F1F4F7] border-y border-[#DFE4E8] py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F5EEDF] border border-[#E8D6B4] text-[#B88932] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.assistant.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14202B] tracking-tight mb-3">
            {t.assistant.title}
          </h2>
          <p className="text-sm sm:text-base text-[#62717F] max-w-xl mx-auto leading-relaxed">
            {t.assistant.desc}
          </p>
        </div>

        {/* Card Interface */}
        <div className="bg-white border border-[#DFE4E8] rounded-md p-6 sm:p-8 shadow-sm">
          {/* Suggested chips */}
          <div className="mb-6">
            <span className="text-xs font-bold text-[#62717F] uppercase tracking-wider block mb-2.5">
              {t.assistant.suggestedQuestions}
            </span>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((sq, i) => (
                <button
                  key={i}
                  onClick={() => handleSubmit(sq)}
                  disabled={loading}
                  className="text-left text-xs bg-[#F8F9FA] hover:bg-[#EEF2F6] hover:border-[#12365A] text-[#34424D] px-3 py-2 rounded-sm border border-[#DFE4E8] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {sq}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex flex-col sm:flex-row gap-2.5 mb-6"
          >
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={t.assistant.inputPlaceholder}
              disabled={loading}
              className="flex-1 px-4 py-3 rounded-sm border border-[#DFE4E8] focus:border-[#12365A] focus:outline-hidden text-xs sm:text-sm bg-white"
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="px-6 py-3 rounded-sm bg-[#12365A] hover:bg-[#0B1E33] disabled:opacity-50 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{lang !== 'ar' ? 'Analyzing…' : 'جارٍ التحليل…'}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.assistant.askBtn}</span>
                </>
              )}
            </button>
          </form>

          {/* Loading status */}
          {loading && (
            <div className="p-6 rounded-sm bg-[#F8F9FA] border border-[#DFE4E8] text-center my-4 animate-pulse">
              <Bot className="w-8 h-8 text-[#12365A] mx-auto mb-2 animate-bounce" />
              <p className="text-xs sm:text-sm font-medium text-[#14202B]">
                {t.assistant.thinking}
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-sm bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5 my-4">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{error}</p>
                <p className="mt-1 text-[11px] text-rose-700">
                  {lang === 'en'
                    ? 'Tip: You can still explore the official indicators, government audits, and budget flows directly on this platform.'
                    : 'تنبيه: يمكنك مواصلة استكشاف المؤشرات الرسمية وسجلات التدقيق عبر أقسام المنصة.'}
                </p>
              </div>
            </div>
          )}

          {/* Answer Display */}
          {answer && (
            <div className="mt-6 p-6 rounded-sm bg-[#F8F9FA] border border-[#DFE4E8] animate-in fade-in">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DFE4E8]">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-[#12365A]" />
                  <span className="text-xs font-bold text-[#14202B] uppercase">
                    {lang !== 'ar' ? 'Evidence-Based Analysis' : 'تحليل مستند للأدلة'}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs text-[#62717F] hover:text-[#14202B] cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? (lang !== 'ar' ? 'Copied' : 'تم النسخ') : (lang !== 'ar' ? 'Copy' : 'نسخ')}</span>
                </button>
              </div>

              {/* Rendered content */}
              <div className="prose prose-sm max-w-none text-xs sm:text-sm text-[#34424D] leading-relaxed whitespace-pre-line space-y-3">
                {answer}
              </div>
            </div>
          )}

          {/* Neutrality Disclaimer */}
          <p className="text-[11px] text-[#8594A3] mt-5 text-center leading-relaxed">
            {t.assistant.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
