import { Pokemon, Arena } from './types';

export const POKEMON_DATA: Pokemon[] = [
  {
    id: 25,
    name: "Pikachu",
    type: ["Electric"],
    description: "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    stats: { hp: 35, attack: 55, defense: 40, speed: 90 },
    rarity: 'Common',
    color: 'bg-yellow-400'
  },
  {
    id: 6,
    name: "Charizard",
    type: ["Fire", "Flying"],
    description: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    stats: { hp: 78, attack: 84, defense: 78, speed: 100 },
    rarity: 'Rare',
    color: 'bg-orange-500'
  },
  {
    id: 9,
    name: "Blastoise",
    type: ["Water"],
    description: "The water jets on its shell are highly accurate. They can strike a can from over 160 feet away.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    stats: { hp: 79, attack: 83, defense: 100, speed: 78 },
    rarity: 'Rare',
    color: 'bg-blue-500'
  },
  {
    id: 150,
    name: "Mewtwo",
    type: ["Psychic"],
    description: "A Pokémon created by recombining Mew's genes. It's said to have the most savage heart among Pokémon.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    stats: { hp: 106, attack: 110, defense: 90, speed: 130 },
    rarity: 'Legendary',
    color: 'bg-purple-500'
  },
  {
    id: 130,
    name: "Gyarados",
    type: ["Water", "Flying"],
    description: "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    stats: { hp: 95, attack: 125, defense: 79, speed: 81 },
    rarity: 'Rare',
    color: 'bg-sky-600'
  },
  {
    id: 94,
    name: "Gengar",
    type: ["Ghost", "Poison"],
    description: "At night, if your shadow suddenly starts moving on its own, it means a Gengar is close by.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    stats: { hp: 60, attack: 65, defense: 60, speed: 110 },
    rarity: 'Rare',
    color: 'bg-indigo-700'
  }
];

export const ARENAS: Arena[] = [
  {
    id: 1,
    name: "Indigo Plateau",
    matchup: "Charizard vs Blastoise",
    image: "https://picsum.photos/400/300?random=1",
    activeUsers: 1240
  },
  {
    id: 2,
    name: "Cerulean Gym",
    matchup: "Pikachu vs Gyarados",
    image: "https://picsum.photos/400/300?random=2",
    activeUsers: 850
  },
  {
    id: 3,
    name: "Viridian Forest",
    matchup: "Butterfree vs Beedrill",
    image: "https://picsum.photos/400/300?random=3",
    activeUsers: 430
  }
];