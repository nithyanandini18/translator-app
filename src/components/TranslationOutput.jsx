import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import CopyButton from './CopyButton';

export default function TranslationOutput({
  translatedText,
  loading = false,
  error = null,
  languageName = "Translation"
}) {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50/80 rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200 min-h-[300px]">
      {/* Top Header Label */}
      <div className="px-5 py-3 border-b border-slate-200/70 bg-slate-100/50 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {languageName}
        </span>
        {translatedText && !loading && (
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Ready
          </span>
        )}
      </div>

      {/* Output Content Body */}
      <div className="relative flex-1 p-5 flex flex-col justify-between">
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center min-h-[200px] py-10 gap-3 text-slate-500 animate-fade-in">
            <LoadingSpinner size="lg" color="text-indigo-600" />
            <p className="text-sm font-semibold text-slate-600">Translating...</p>
          </div>
        ) : error ? (
          <div className="flex-1 flex flex-col items-center justify-center min-h-[200px] py-8 text-center px-4 animate-fade-in">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mb-2.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-sm font-bold text-rose-600 mb-1">Translation Unavailable</p>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm">{error}</p>
          </div>
        ) : translatedText ? (
          <div className="flex-1 min-h-[200px] text-slate-900 text-base sm:text-lg leading-relaxed whitespace-pre-wrap select-text animate-fade-in font-sans">
            {translatedText}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center min-h-[200px] py-10 text-center gap-2.5 text-slate-400 select-none">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-1">
              <svg className="w-5 h-5 stroke-[1.75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <p className="text-sm font-medium text-slate-500">Your translation will appear here</p>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-slate-200/80 bg-white text-xs">
        <span className="text-slate-400 font-medium">Output</span>
        <CopyButton text={translatedText} disabled={loading || !translatedText} />
      </div>
    </div>
  );
}
