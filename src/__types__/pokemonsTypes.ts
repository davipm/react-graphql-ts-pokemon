interface ISpecialName {
  name: string;
  type: string
}

interface ISpecial {
  special: ISpecialName[]
}

export interface IPokemon {
  id: string;
  name: string;
  number: string
  image: string
  maxHP: number
  maxCP: number
  attacks: ISpecial
}
