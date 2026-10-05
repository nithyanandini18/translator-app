import React from 'react';

export default function TextInput({
  value,
  onChange,
  onClear,
  onSubmit,
  languageName = "English",
  maxLength = 5000,
  placeholder = "Type or paste your text here...",
  disabled = false
}) {
  const currentLength = value?.length || 0;
  const isNearLimit = currentLength > maxLength * 0.9;
  const isAtLimit = currentLength >= maxLength;

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (onSubmit) onSubmit();
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-2xl border border-slate-200 shadow-sm focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all duration-200 overflow-hidden min-h-[300px]">
      {/* Top Header Label */}
      <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {languageName}
        </span>
        {value && !disabled && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      {/* Textarea Input Body */}
      <div className="relative flex-1 p-5 flex flex-col">
        <label htmlFor="source-text-input" className="sr-only">Source text input</label>
        <textarea
          id="source-text-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={maxLength}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full flex-1 h-full min-h-[200px] resize-none bg-transparent text-slate-900 text-base sm:text-lg leading-relaxed placeholder:text-slate-400 focus:outline-none disabled:bg-slate-50 disabled:text-slate-400 font-sans"
        />
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100 bg-slate-50/70 text-xs">
        <span className="hidden sm:inline text-slate-400 font-medium">
          Press <kbd className="px-1.5 py-0.5 text-[10px] font-bold bg-white border border-slate-200 rounded shadow-xs text-slate-600">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 text-[10px] font-bold bg-white border border-slate-200 rounded shadow-xs text-slate-600">Enter</kbd> to translate
        </span>
        <div className="ml-auto font-semibold text-xs">
          <span className={isAtLimit ? "text-rose-600 font-bold" : isNearLimit ? "text-amber-600 font-bold" : "text-slate-400"}>
            {currentLength.toLocaleString()}
          </span>
          <span className="text-slate-400"> / {maxLength.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
