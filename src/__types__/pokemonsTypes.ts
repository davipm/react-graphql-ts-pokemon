export interface IPokemon {
  id: string;
  name: string;
  number: string;
  image: string;
  maxHP: number;
  maxCP: number;
  attacks: {
    special: {
      name: string;
      type: string;
    }[];
  };
}
