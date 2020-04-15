import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

import Card from "./Card";

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

const GET_POKEMON = gql`
  {
    pokemons(first: -1) {
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

function Pokemons() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const items: string | null = localStorage.getItem('pokemons');
  const { loading, data } = useQuery(GET_POKEMON);

  useEffect(() => {
    if (data && data.pokemons) {
      localStorage.setItem('pokemons', JSON.stringify(data.pokemons));
    }

    if (items) {
      setPokemons(JSON.parse(items));
    }
  }, [items, data]);


  return (
    <Section>
      <h1>Pokemons</h1>

      <ThemeProvider theme={theme}>
        <Grid>
          {(loading && !items) && <h3>Loading</h3>}
          {pokemons.length > 0 ? (
            pokemons.map((item: IPokemon) => (
              <Card key={item.id} {...item} />
            ))
          ): data && data.pokemons ? (
            data.pokemons.map((item: IPokemon) => (
              <Card key={item.id} {...item} />
            ))
          ) : null}
        </Grid>
      </ThemeProvider>
    </Section>
  );
}

export default Pokemons;

const Section = styled.section`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
 
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 2rem auto;
`;
