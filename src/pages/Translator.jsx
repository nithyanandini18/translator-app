import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LanguageSelector from '../components/LanguageSelector';
import SwapLanguages from '../components/SwapLanguages';
import TextInput from '../components/TextInput';
import TranslationOutput from '../components/TranslationOutput';
import TranslateButton from '../components/TranslateButton';
import Footer from '../components/Footer';
import { SUPPORTED_LANGUAGES } from '../constants/languages';
import { useTranslator } from '../hooks/useTranslator';

export default function Translator() {
  const {
    inputText,
    setInputText,
    translatedText,
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
    loading,
    error,
    setError,
    translate,
    clearText,
    swapLanguages,
    maxCharLimit
  } = useTranslator();

  const sourceLangName = SUPPORTED_LANGUAGES.find(l => l.code === sourceLanguage)?.name || "English";
  const targetLangName = SUPPORTED_LANGUAGES.find(l => l.code === targetLanguage)?.name || "Translation";

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50 font-sans">
      {/* Top Navbar */}
      <Header />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col justify-center">
        {/* Compact Hero Section */}
        <HeroSection />

        {/* Main SaaS Translator Card */}
        <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-4 sm:p-6 md:p-8 mt-4 mb-8 transition-all">
          
          {/* Top Bar: Language Dropdowns */}
          <section aria-label="Language selection" className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex-1 w-full">
              <LanguageSelector
                label="Translate from"
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
                languages={SUPPORTED_LANGUAGES}
                disabled={loading}
              />
            </div>

            <SwapLanguages onSwap={swapLanguages} disabled={loading} />

            <div className="flex-1 w-full">
              <LanguageSelector
                label="Translate to"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                languages={SUPPORTED_LANGUAGES}
                disabled={loading}
              />
            </div>
          </section>

          {/* Input & Output Panels Grid */}
          <section aria-label="Translation panels" className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
            <div className="flex flex-col h-full w-full">
              <TextInput
                value={inputText}
                onChange={setInputText}
                onClear={clearText}
                onSubmit={translate}
                languageName={sourceLangName}
                maxLength={maxCharLimit}
                placeholder="Type or paste your text here..."
                disabled={loading}
              />
            </div>

            <div className="flex flex-col h-full w-full">
              <TranslationOutput
                translatedText={translatedText}
                loading={loading}
                error={error}
                languageName={targetLangName}
              />
            </div>
          </section>

          {/* Action Footer Bar inside Card */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={clearText}
              disabled={loading || (!inputText && !translatedText && !error)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-sm font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Clear All
            </button>

            <TranslateButton
              onClick={translate}
              loading={loading}
              disabled={loading || !inputText || !inputText.trim()}
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
