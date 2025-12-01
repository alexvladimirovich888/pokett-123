import React from 'react';
import { Pokemon } from '../types';
import { Shield, Sword, Zap, Star } from 'lucide-react';

interface PokemonCardProps {
  pokemon: Pokemon;
  isSelected: boolean;
  onSelect: (pokemon: Pokemon) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, isSelected, onSelect }) => {
  return (
    <div 
      className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-4 hover:rotate-1 ${isSelected ? 'scale-105 ring-4 ring-pokeYellow rotate-0' : ''}`}
      onClick={() => onSelect(pokemon)}
    >
      {/* Card Container */}
      <div className={`
        relative w-full overflow-hidden rounded-2xl border-4 
        ${isSelected ? 'border-pokeYellow shadow-[0_0_30px_rgba(255,203,5,0.6)]' : 'border-gray-200 shadow-xl'} 
        bg-white flex flex-col h-full
      `}>
        
        {/* Holographic Sheen Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 pointer-events-none z-20 transition-opacity duration-500"></div>

        {/* Header: Name & HP */}
        <div className={`${pokemon.color} p-3 flex justify-between items-center text-white z-10`}>
          <div className="flex flex-col">
             <span className="font-poke text-lg font-bold tracking-wide">{pokemon.name}</span>
             <span className="text-xs uppercase font-bold opacity-90">{pokemon.rarity}</span>
          </div>
          <div className="flex items-center gap-1 font-mono font-bold">
            <span className="text-xs">HP</span>
            <span className="text-lg">{pokemon.stats.hp}</span>
          </div>
        </div>

        {/* Image Area */}
        <div className="relative h-48 bg-gradient-to-b from-gray-100 to-white flex items-center justify-center p-4 overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <img 
             src={pokemon.image} 
             alt={pokemon.name} 
             className="w-40 h-40 object-contain z-10 drop-shadow-2xl transition-transform duration-300 group-hover:scale-110" 
           />
           {/* Decorative Element */}
           <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="ball" className="w-24 h-24" />
           </div>
        </div>

        {/* Stats & Description */}
        <div className="p-4 flex-grow flex flex-col bg-white">
           <div className="flex gap-2 mb-3">
             {pokemon.type.map(t => (
               <span key={t} className="px-2 py-0.5 rounded-full text-xs font-bold uppercase bg-gray-200 text-gray-700 shadow-sm border border-gray-300">
                 {t}
               </span>
             ))}
           </div>
           
           <p className="text-xs text-gray-600 mb-4 line-clamp-3 italic leading-relaxed">
             {pokemon.description}
           </p>

           {/* Stats Bars */}
           <div className="mt-auto space-y-2">
              <div className="flex items-center gap-2">
                 <Sword size={14} className="text-red-500" />
                 <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${(pokemon.stats.attack / 150) * 100}%` }}></div>
                 </div>
                 <span className="text-xs font-bold text-gray-600 w-6 text-right">{pokemon.stats.attack}</span>
              </div>
              <div className="flex items-center gap-2">
                 <Shield size={14} className="text-blue-500" />
                 <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(pokemon.stats.defense / 150) * 100}%` }}></div>
                 </div>
                 <span className="text-xs font-bold text-gray-600 w-6 text-right">{pokemon.stats.defense}</span>
              </div>
              <div className="flex items-center gap-2">
                 <Zap size={14} className="text-yellow-500" />
                 <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${(pokemon.stats.speed / 150) * 100}%` }}></div>
                 </div>
                 <span className="text-xs font-bold text-gray-600 w-6 text-right">{pokemon.stats.speed}</span>
              </div>
           </div>
        </div>

        {/* Button Overlay (only visible when not selected) */}
        {!isSelected && (
            <div className="absolute bottom-4 right-4 z-20">
                <button 
                  className="bg-pokeBlue text-white p-2 rounded-full shadow-lg hover:bg-pokeDarkBlue transition-colors group-hover:scale-110"
                  onClick={(e) => {
                      e.stopPropagation();
                      onSelect(pokemon);
                  }}
                >
                    <Star size={20} fill="white" />
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;