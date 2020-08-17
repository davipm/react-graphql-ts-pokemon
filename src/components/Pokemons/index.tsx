import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import LazyLoad from "react-lazyload";

import { GET_POKEMONS } from "../../graphql/pokemons";
import { IPokemon } from "../../__types__/pokemonsTypes";
import theme from "../../styles/theme";
import Card from "../Card";

import { Section, Grid } from "./styles";

function Pokemons() {
  const { loading, data, error } = useQuery(GET_POKEMONS, {
    variables: { first: -1 },
  });
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    const cache = localStorage.getItem("pokemons");

    if (cache !== null) {
      setPokemons(JSON.parse(cache));
    } else if (data && data.pokemons) {
      setPokemons(data.pokemons);
    }
  }, [data]);

  useEffect(() => {
    if (pokemons.length)
      localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <Section>
      <h1>Pokemons</h1>

      <ThemeProvider theme={theme}>
        <Grid>
          {loading && !pokemons.length && <h3>Loading</h3>}
          {error && !pokemons.length && <h3>Error!</h3>}

          {pokemons.map((item) => (
            <LazyLoad key={item.id} throttle={200} offset={10}>
              <Card {...item} />
            </LazyLoad>
          ))}
        </Grid>
      </ThemeProvider>
    </Section>
  );
}

export default Pokemons;
