import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import LazyLoad from "react-lazyload";

import { useLocalStorage } from "../../hooks";
import { GET_POKEMONS } from "../../graphql/pokemons";
import { IPokemon } from "../../__types__/pokemonsTypes";
import theme from "../../styles/theme";
import Card from "../Card";

import { Section, Grid } from "./styles";

function Pokemons() {
  const [pokemons, setPokemons] = useLocalStorage<IPokemon[]>("pokemons", []);

  const { loading, data, error } = useQuery(GET_POKEMONS, {
    variables: { first: -1 },
  });

  useEffect(() => {
    if (data) setPokemons(data.pokemons);
    // eslint-disable-next-line
  }, [data]);

  return (
    <Section>
      <h1>Pokemons</h1>

      <ThemeProvider theme={theme}>
        <Grid>
          {loading && !pokemons?.length && <h3>Loading</h3>}
          {error && !pokemons?.length && <h3>Error!</h3>}

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
