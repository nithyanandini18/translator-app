import React from 'react';

export default function LanguageSelector({ label, value, onChange, languages = [], disabled = false, id }) {
  const selectId = id || `lang-select-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label htmlFor={selectId} className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </label>
      <div className="relative">
        <select
          id={selectId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-label={`${label} language`}
          className="w-full appearance-none bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm sm:text-base font-semibold py-2.5 pl-3.5 pr-10 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-150 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-xs cursor-pointer"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag ? `${lang.flag}  ` : ''}{lang.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
