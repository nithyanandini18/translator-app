import React from 'react';
import logoSvg from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 shadow-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-600 p-2 text-white shadow-md shadow-indigo-500/20 flex items-center justify-center">
            <img src={logoSvg} alt="TranslateAI Logo" className="w-full h-full object-contain filter invert brightness-200" />
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-sans">
              Translate<span className="text-indigo-600">AI</span>
            </h1>
            <span className="hidden sm:inline-block h-4 w-px bg-slate-200" />
            <p className="hidden sm:inline-block text-xs sm:text-sm text-slate-500 font-medium">
              Translate words. Connect worlds.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>RapidAPI Active</span>
          </div>
        </div>
      </div>
    </header>
  );
}
