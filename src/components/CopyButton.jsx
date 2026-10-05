import React, { useState } from 'react';

export default function CopyButton({ text, disabled = false, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text || disabled || copied) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const isDisabled = disabled || !text;

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={isDisabled}
      aria-label={copied ? "Text copied to clipboard" : "Copy translated text to clipboard"}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
        copied
          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
          : isDisabled
          ? "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
          : "bg-white text-slate-700 hover:text-indigo-600 hover:bg-slate-50 border border-slate-200 shadow-xs active:scale-95 cursor-pointer"
      } ${className}`}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4 text-emerald-600 animate-fade-in" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Copied!</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4 text-slate-500 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
