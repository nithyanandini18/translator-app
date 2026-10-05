import React from 'react';
import LoadingSpinner from './LoadingSpinner';

export default function TranslateButton({ onClick, loading = false, disabled = false, className = "" }) {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      className={`inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-base text-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:scale-[0.98] ${
        isDisabled
          ? "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
          : "bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/30 cursor-pointer"
      } ${className}`}
    >
      {loading ? (
        <>
          <LoadingSpinner size="sm" color="text-white" />
          <span>Translating...</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <span>Translate</span>
        </>
      )}
    </button>
  );
}
