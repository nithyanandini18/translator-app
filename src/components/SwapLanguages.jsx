import React from 'react';

export default function SwapLanguages({ onSwap, disabled = false }) {
  return (
    <div className="flex items-center justify-center pt-2 md:pt-5">
      <button
        type="button"
        onClick={onSwap}
        disabled={disabled}
        aria-label="Swap source and target languages"
        title="Swap languages"
        className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-600 shadow-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
      >
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </button>
    </div>
  );
}
