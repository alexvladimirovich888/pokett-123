import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pokeDarkBlue py-8 border-t-8 border-pokeYellow">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="relative group mb-4 cursor-pointer">
            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png" 
                alt="Logo" 
                className="w-16 h-16 animate-spin-slow group-hover:animate-bounce"
            />
        </div>
        
        <h3 className="font-poke text-white text-xl mb-2">Fan-made Pokémon Arena</h3>
        <p className="text-blue-200 text-sm mb-4 text-center">
            Unofficial project. All rights to characters belong to Nintendo, Game Freak, and The Pokémon Company.
        </p>
        <div className="w-full max-w-xs h-1 bg-gradient-to-r from-transparent via-pokeYellow to-transparent opacity-50"></div>
        <p className="text-blue-400 text-xs mt-4 font-mono">
            Designed for Trainers • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;