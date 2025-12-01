import React, { useState } from 'react';
import { Coins, ChevronRight } from 'lucide-react';

const BettingPanel: React.FC = () => {
  const [amount, setAmount] = useState<string>('');

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-xl border-4 border-pokeBlue overflow-hidden">
      <div className="bg-pokeBlue p-3 flex items-center justify-center gap-2">
        <Coins className="text-pokeYellow" />
        <h3 className="text-white font-poke text-xl uppercase tracking-wider">Battle for SOL</h3>
      </div>
      
      <div className="p-6 bg-gray-50">
        <p className="text-center text-gray-600 mb-4 font-bold">Bet on your Pokémon's victory</p>
        
        <div className="relative flex items-center mb-6">
            <span className="absolute left-4 font-poke text-gray-400 font-bold">SOL</span>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.5"
              className="w-full pl-14 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pokeBlue focus:ring-2 focus:ring-pokeBlue/20 font-mono text-xl text-gray-800 transition-all"
            />
        </div>

        <button className="w-full bg-pokeYellow hover:bg-yellow-400 text-pokeDarkBlue font-poke text-lg py-3 rounded-lg shadow-md border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2">
            Place Bet <ChevronRight size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default BettingPanel;