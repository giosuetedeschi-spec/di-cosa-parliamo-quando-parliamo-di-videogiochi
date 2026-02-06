
import React from 'react';
import { WORKSHOP_CONTENT } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Il Progetto</span>
            <h2 className="text-4xl font-bold leading-tight">Un laboratorio interdisciplinare di co-progettazione</h2>
            <div className="w-16 h-1 bg-blue-500"></div>
          </div>
          <p className="text-xl text-zinc-400 leading-relaxed font-light">
            {WORKSHOP_CONTENT.description}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="text-blue-300 text-3xl font-bold mb-2">01</div>
              <p className="text-sm text-zinc-500 uppercase font-bold">Riflessione</p>
              <p className="text-zinc-300 mt-2">Analisi critica del medium.</p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="text-blue-300 text-3xl font-bold mb-2">02</div>
              <p className="text-sm text-zinc-500 uppercase font-bold">Co-Design</p>
              <p className="text-zinc-300 mt-2">Creazione collettiva di prototipi ideali.</p>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-zinc-900 p-10 rounded-2xl border border-zinc-800 flex flex-col items-center text-center">
            <div className="bg-white p-4 rounded-lg mb-8">
              {/* QR Code Placeholder */}
              <div className="w-48 h-48 bg-zinc-100 flex items-center justify-center border-4 border-zinc-200">
                <svg viewBox="0 0 100 100" className="w-full h-full text-black p-2">
                  <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M22,22 h6 v6 h-6 z" fill="currentColor"/>
                  <path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M72,22 h6 v6 h-6 z" fill="currentColor"/>
                  <path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M22,72 h6 v6 h-6 z" fill="currentColor"/>
                  <path d="M50,50 h10 v10 h-10 z M65,65 h5 v5 h-5 z M75,75 h5 v5 h-5 z M60,80 h10 v10 h-10 z M80,60 h10 v10 h-10 z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-500 mb-2">GRUPPO WHATSAPP</h3>
            <p className="text-zinc-400 mb-8 px-4">Scannerizza il codice per entrare a far parte della community del laboratorio.</p>
            <a 
              href="#" 
              className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-10 rounded-full transition-all"
            >
              UNISCITI ORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
