import { useQuery } from "@apollo/react-hooks";
import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";
import { ThemeProvider } from "styled-components";

import Card from "@/components/PokemonCard";
import { GET_POKEMONS } from "@/graphql/pokemons";
import { useLocalStorage } from "@/hooks";
import { IPokemon, PokemonData } from "@/types/pokemon";

import theme from "../../styles/theme";
import { Grid, Section } from "./styles";

export default function PokemonList() {
  const [pokemon, setPokemon] = useLocalStorage<IPokemon[]>("pokemons", []);

  const { loading, data, error } = useQuery<PokemonData>(GET_POKEMONS, {
    variables: { first: -1 },
  });

  useEffect(() => {
    if (data) setPokemon(data.pokemons);
    // eslint-disable-next-line
  }, [data]);

  return (
    <Section>
      <h1>Pokemon's</h1>

      <ThemeProvider theme={theme}>
        <Grid>
          {loading && !pokemon?.length && <h3>Loading</h3>}
          {error && !pokemon?.length && <h3>Error!</h3>}

          {pokemon.map((item) => (
            <LazyLoad key={item.id} throttle={200} offset={10}>
              <Card {...item} />
            </LazyLoad>
          ))}
        </Grid>
      </ThemeProvider>
    </Section>
  );
}
