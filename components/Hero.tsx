
import React from 'react';
import { WORKSHOP_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl w-full flex flex-col items-center text-center space-y-4">
        <h3 className="text-xl md:text-2xl font-light tracking-[0.3em] text-zinc-400 animate-pulse">
          {WORKSHOP_CONTENT.title}
        </h3>
        <h1 className="text-7xl md:text-9xl font-oswald tracking-tighter text-blue-300 leading-none">
          {WORKSHOP_CONTENT.mainTitle}
        </h1>
        
        <div className="w-full max-w-4xl pt-12">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
             <img 
               src="https://picsum.photos/seed/videogame-art/1200/600" 
               alt="Concept Art" 
               className="w-full h-[400px] md:h-[600px] object-cover filter saturate-[0.8] transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             
             {/* Poster Style Text Overlays */}
             <div className="absolute top-8 left-8 text-left max-w-xs hidden md:block border-l border-blue-400/50 pl-4">
                <p className="text-blue-200 text-lg font-light leading-tight">
                  IN CHE SENSO I VIDEOGIOCHI SONO OPERE D'ARTE? <br/>
                  E CHE COSA POTREBBERO ANCORA DIVENTARE?
                </p>
             </div>
          </div>
        </div>

        <div className="pt-12 max-w-3xl">
          <p className="text-xl md:text-2xl font-semibold text-zinc-200 tracking-wide uppercase">
            {WORKSHOP_CONTENT.subHeader}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
