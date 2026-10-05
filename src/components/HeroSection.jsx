import React from 'react';

export default function HeroSection() {
  return (
    <section className="w-full max-w-3xl mx-auto text-center pt-6 pb-4 px-4">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
        <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span>Instant Multi-Language Translation</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        Translate anything, anywhere.
      </h2>
      <p className="text-base sm:text-lg text-slate-600 font-normal mt-2.5 max-w-xl mx-auto">
        Enter your text in English and instantly translate it into the language you choose.
      </p>
    </section>
  );
}
