import React from 'react';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import EventsSection from './components/EventsSection';
import { WORKSHOP_CONTENT } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-oswald text-xl tracking-widest text-blue-300 uppercase">
            VIDEOGIOCHI?
          </div>
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">Chi Siamo</a>
            <a href="#events" className="hover:text-white transition-colors">Eventi</a>
            <a href="#join" className="bg-white text-black px-6 py-2 rounded-full hover:bg-blue-300 transition-all">Partecipa</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />

        <div id="about">
          <InfoSection />
        </div>

        <EventsSection />

        {/* Footer CTA */}
        <section id="join" className="py-32 px-4 text-center bg-gradient-to-b from-transparent to-zinc-950">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              {WORKSHOP_CONTENT.callToAction}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-12 rounded-2xl text-xl shadow-2xl shadow-blue-500/20 transition-all">
                Iscriviti al Workshop
              </button>
              <button className="border border-zinc-700 hover:border-zinc-500 text-white font-bold py-5 px-12 rounded-2xl text-xl transition-all">
                Leggi il Manifesto
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2024 Laboratorio di Riflessione Filosofica sul Videogioco.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">WhatsApp</a>
            <a href="#" className="hover:text-blue-400">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
