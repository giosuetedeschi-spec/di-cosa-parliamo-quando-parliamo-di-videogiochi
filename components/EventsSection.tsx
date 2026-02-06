
import React from 'react';
import { WORKSHOP_EVENTS } from '../constants';

const EventsSection: React.FC = () => {
    return (
        <section id="events" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em]">Calendario</h2>
                <h3 className="text-4xl md:text-5xl font-bold">Prossimi Appuntamenti</h3>
                <p className="text-zinc-400 max-w-2xl mx-auto italic">
                    Incontri, dibattiti e laboratori per approfondire la cultura del videogioco attraverso lenti interdisciplinari.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {WORKSHOP_EVENTS.map((event, index) => (
                    <div
                        key={index}
                        className="group relative bg-zinc-900/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:bg-zinc-800/60 transition-all duration-500 overflow-hidden"
                    >
                        {/* Ambient Background Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-400/20 transition-all" />

                        <div className="relative z-10 space-y-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="bg-blue-500/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                                    {event.date}
                                </div>
                                <div className="text-zinc-500 text-sm font-medium">
                                    {event.times}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className="text-2xl font-bold leading-tight group-hover:text-blue-200 transition-colors">
                                    {event.name}
                                </h4>
                                <div className="flex items-center text-zinc-400 text-sm">
                                    <span className="mr-2 text-blue-400">📍</span>
                                    {event.location}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <button className="text-xs font-bold flex items-center gap-2 text-zinc-400 hover:text-white uppercase tracking-widest transition-all">
                                    Dettagli Evento
                                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventsSection;
