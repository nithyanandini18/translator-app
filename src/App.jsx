import React from 'react';
import Translator from './pages/Translator';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans flex flex-col antialiased selection:bg-indigo-500 selection:text-white">
      <Translator />
    </div>
  );
}
