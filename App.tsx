import React, { useState, useRef } from 'react';
import Hero from './components/Hero';
import PokemonCard from './components/PokemonCard';
import BattleArenas from './components/BattleArenas';
import SelectionArena from './components/SelectionArena';
import Footer from './components/Footer';
import { POKEMON_DATA } from './constants';
import { Pokemon } from './types';

const App: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const cardsSectionRef = useRef<HTMLDivElement>(null);
  const selectionArenaRef = useRef<HTMLDivElement>(null);

  const scrollToCards = () => {
    cardsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setTimeout(() => {
        selectionArenaRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-body text-gray-800 bg-gray-50">
      
      {/* 1. Hero Section */}
      <Hero onScrollToCards={scrollToCards} />

      {/* 2. Pokemon Cards Grid */}
      <section ref={cardsSectionRef} className="py-16 container mx-auto px-4 relative">
         <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-poke text-pokeDarkBlue mb-3">Choose Your Fighter</h2>
            <div className="w-24 h-2 bg-pokeYellow mx-auto rounded-full"></div>
         </div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {POKEMON_DATA.map((poke) => (
              <div key={poke.id} className="w-full max-w-sm h-full">
                <PokemonCard 
                  pokemon={poke} 
                  isSelected={selectedPokemon?.id === poke.id} 
                  onSelect={handleSelectPokemon} 
                />
              </div>
            ))}
         </div>
      </section>

      {/* 3. Battle Arenas */}
      <BattleArenas />

      {/* 5. Mini-Arena Selection & 4. Betting UI (Combined) */}
      <div ref={selectionArenaRef}>
        <SelectionArena selectedPokemon={selectedPokemon} />
      </div>

      {/* 6. Footer */}
      <Footer />
      
    </div>
  );
};

export default App;