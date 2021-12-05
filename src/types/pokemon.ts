interface SpecialType {
  name: string;
  type: string;
}

interface Special {
  special: SpecialType[];
}

export interface IPokemon {
  id: string;
  name: string;
  number: string;
  image: string;
  maxHP: number;
  maxCP: number;
  attacks: Special;
}

export interface PokemonData {
  pokemons: IPokemon[];
}
