export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  description: string;
  image: string;
  stats: PokemonStats;
  rarity: 'Common' | 'Rare' | 'Legendary';
  color: string;
}

export interface Arena {
  id: number;
  name: string;
  matchup: string;
  image: string;
  activeUsers: number;
}