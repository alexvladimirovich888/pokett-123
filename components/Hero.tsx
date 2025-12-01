import React from 'react';
import { Zap } from 'lucide-react';

interface HeroProps {
  onScrollToCards: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToCards }) => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-gradient-to-b from-pokeBlue to-pokeDarkBlue flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10%)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[500px] h-[500px] border-[50px] border-white rounded-full"></div>
        <div className="absolute w-[200px] h-[50px] bg-white transform -rotate-45"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-6 animate-bounce-slow">
            <div className="relative inline-block">
                 <div className="absolute inset-0 bg-black translate-y-2 rounded-full blur-sm opacity-50"></div>
                 <img 
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png" 
                    alt="Master Ball" 
                    className="w-24 h-24 mx-auto mb-4 animate-spin-slow"
                 />
            </div>
        </div>
        
        <h1 className="font-poke text-5xl md:text-7xl text-pokeYellow mb-4 tracking-wider uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] stroke-black"
            style={{ WebkitTextStroke: '3px #003A70' }}>
          Pokémon Battle Arena
        </h1>
        
        <p className="text-white text-xl md:text-2xl font-body mb-8 max-w-2xl font-bold text-shadow-sm">
          Assemble your team, choose your strategy, and fight for the champion title!
        </p>

        <button 
          onClick={onScrollToCards}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-poke font-bold text-white transition-all duration-200 bg-red-600 rounded-full hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 border-4 border-white shadow-lg overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <span className="relative flex items-center gap-2">
            Choose Pokémon <Zap className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse-fast" />
          </span>
        </button>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#f0f4f8] to-transparent"></div>
    </section>
  );
};

export default Hero;