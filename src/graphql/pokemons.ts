import { gql } from 'apollo-boost';

export const GET_POKEMONS = gql`
  query Pokemons($first: Int!){
    pokemons(first: $first) {
      name
      id
      number
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          type
        }
      }
    }
  }
`;
