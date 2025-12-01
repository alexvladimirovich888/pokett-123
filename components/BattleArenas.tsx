import React from 'react';
import { ARENAS } from '../constants';
import { Swords, Users } from 'lucide-react';

const BattleArenas: React.FC = () => {
  return (
    <section className="py-16 bg-pokeDarkBlue relative overflow-hidden">
        {/* Background Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pokeBlue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pokeYellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-12">
             <Swords className="text-pokeYellow w-8 h-8 md:w-12 md:h-12" />
             <h2 className="text-3xl md:text-5xl font-poke text-white text-center">Active Battle Arenas</h2>
             <Swords className="text-pokeYellow w-8 h-8 md:w-12 md:h-12 flip-horizontal scale-x-[-1]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARENAS.map((arena) => (
            <div key={arena.id} className="relative group perspective-1000">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-full aspect-square border-8 border-gray-700 shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden relative flex items-center justify-center group-hover:border-pokeYellow transition-colors duration-300">
                
                {/* Arena Image Background */}
                <img 
                  src={arena.image} 
                  alt={arena.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-700" 
                />

                {/* Content Overlay */}
                <div className="relative z-10 text-center p-4">
                  <h3 className="font-poke text-2xl text-white mb-2 text-shadow-poke">{arena.name}</h3>
                  <p className="text-pokeYellow font-bold mb-4 text-shadow-sm">{arena.matchup}</p>
                  
                  <div className="flex items-center justify-center gap-2 text-gray-300 mb-6 bg-black/50 rounded-full px-3 py-1 mx-auto w-fit">
                    <Users size={16} />
                    <span className="text-sm font-mono">{arena.activeUsers} watching</span>
                  </div>

                  <button className="bg-red-600 hover:bg-red-500 text-white font-poke py-2 px-6 rounded-full border-2 border-white shadow-lg transform transition-transform group-hover:scale-110 active:scale-95">
                    Join Arena
                  </button>
                </div>

                {/* Tech Rings */}
                <div className="absolute inset-0 border-4 border-dashed border-white/20 rounded-full animate-spin-slow pointer-events-none"></div>
                <div className="absolute inset-4 border-2 border-dotted border-pokeYellow/30 rounded-full animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BattleArenas;