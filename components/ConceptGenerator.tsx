
import React, { useState } from 'react';
import { generateGameConcept } from '../services/geminiService';
import { GameConcept } from '../types';
import { WORKSHOP_CONTENT } from '../constants';

const ConceptGenerator: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(WORKSHOP_CONTENT.questions[0]);
  const [concept, setConcept] = useState<GameConcept | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateGameConcept(selectedPrompt);
      setConcept(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto" id="generator">
      <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 text-center">Laboratorio di Immaginazione Critica</h2>
        <p className="text-zinc-400 mb-8 text-center max-w-2xl mx-auto">
          Utilizziamo l'intelligenza artificiale per esplorare nuove forme di gioco basate su interrogativi filosofici reali.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <select 
            className="flex-1 bg-zinc-800 text-white p-4 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedPrompt}
            onChange={(e) => setSelectedPrompt(e.target.value)}
          >
            {WORKSHOP_CONTENT.questions.map((q, idx) => (
              <option key={idx} value={q}>{q}</option>
            ))}
          </select>
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20"
          >
            {loading ? "Riflettendo..." : "Progetta Gioco"}
          </button>
        </div>

        {concept && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="border-l-4 border-blue-400 pl-6 py-2">
              <h3 className="text-2xl font-oswald text-blue-300 uppercase tracking-wider">{concept.title}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Filosofia</h4>
                <p className="text-zinc-200 leading-relaxed">{concept.philosophy}</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Meccaniche</h4>
                <p className="text-zinc-200 leading-relaxed">{concept.mechanics}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-800">
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Il Mondo</h4>
              <p className="text-zinc-400 italic">"{concept.worldDescription}"</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConceptGenerator;
