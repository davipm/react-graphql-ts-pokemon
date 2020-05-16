import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import LazyLoad from "react-lazyload";

import { GET_POKEMONS } from "../../graphql/pokemons";
import { IPokemon } from "../../__types__/pokemonsTypes";
import theme from "../../styles/theme";
import Card from "../Card";

import { Section, Grid } from "./style";

function Pokemons() {
  const { loading, data } = useQuery(GET_POKEMONS, {
    variables: { first: -1 },
  });

  const [pokemons] = useState<IPokemon[]>(() => {
    const testApp = localStorage.getItem("pokemons");
    return JSON.parse(testApp!);
  });

  useEffect(() => {
    if (data && data.pokemons) {
      localStorage.setItem("pokemons", JSON.stringify(data.pokemons));
    }
  }, [data]);

  function PokemonCache() {
    if (pokemons) {
      return (
        <>
          {pokemons.map((item: IPokemon) => (
            <LazyLoad key={item.id} throttle={200} offset={10}>
              <Card {...item} />
            </LazyLoad>
          ))}
        </>
      )
    }

    return (
      <>
        {data && data.pokemons.map((item: IPokemon) => (
          <LazyLoad key={item.id} throttle={200} offset={10}>
            <Card {...item} />
          </LazyLoad>
        ))}
      </>
    )
  }

  return (
    <Section>
      <h1>Pokemons</h1>

      <ThemeProvider theme={theme}>
        <Grid>
          {loading && !pokemons && <h3>Loading</h3>}
          <PokemonCache />
        </Grid>
      </ThemeProvider>
    </Section>
  );
}

export default Pokemons;
