import React from 'react';
import { Pokemon } from '../types';
import BettingPanel from './BettingPanel';
import { Sword } from 'lucide-react';

interface SelectionArenaProps {
  selectedPokemon: Pokemon | null;
}

const SelectionArena: React.FC<SelectionArenaProps> = ({ selectedPokemon }) => {
  if (!selectedPokemon) {
    return (
      <section className="py-12 bg-gray-100 text-center">
        <p className="text-xl text-gray-400 font-poke animate-pulse">
            Select a Pokémon from the list above to start the battle...
        </p>
      </section>
    );
  }

  return (
    <section className="py-12 relative bg-gradient-to-br from-gray-100 to-white min-h-[500px] flex items-center justify-center">
       {/* Background Grid */}
       <div className="absolute inset-0" style={{ 
           backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', 
           backgroundSize: '40px 40px',
           opacity: 0.5
       }}></div>

       <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Left: Pokemon Render */}
          <div className="flex-1 flex flex-col items-center">
             <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-pokeYellow rounded-full blur-3xl opacity-30 animate-pulse-fast"></div>
                <img 
                    src={selectedPokemon.image} 
                    alt={selectedPokemon.name}
                    className="relative w-full h-full object-contain drop-shadow-2xl animate-bounce-slow"
                />
             </div>
             <h2 className="text-4xl font-poke text-pokeDarkBlue mt-4">{selectedPokemon.name}</h2>
             <div className="flex gap-2 mt-2">
                {selectedPokemon.type.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-pokeDarkBlue text-white text-sm font-bold uppercase">{t}</span>
                ))}
             </div>
          </div>

          {/* Right: Actions */}
          <div className="flex-1 w-full max-w-md">
             <div className="mb-8 p-4 bg-white/80 backdrop-blur rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-500 uppercase text-xs mb-2">Fighter Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                    <div className="flex justify-between"><span>ATK:</span> <span className="text-red-600 font-bold">{selectedPokemon.stats.attack}</span></div>
                    <div className="flex justify-between"><span>DEF:</span> <span className="text-blue-600 font-bold">{selectedPokemon.stats.defense}</span></div>
                    <div className="flex justify-between"><span>SPD:</span> <span className="text-yellow-600 font-bold">{selectedPokemon.stats.speed}</span></div>
                    <div className="flex justify-between"><span>HP:</span> <span className="text-green-600 font-bold">{selectedPokemon.stats.hp}</span></div>
                </div>
             </div>

             <BettingPanel />

             <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-poke text-2xl py-4 rounded-full shadow-[0_4px_0_rgb(153,27,27)] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-3">
                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" className="w-8 h-8" alt="ball"/>
                 TO BATTLE!
                 <Sword className="w-8 h-8" />
             </button>
          </div>

       </div>
    </section>
  );
};

export default SelectionArena;