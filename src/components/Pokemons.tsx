import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled, { ThemeProvider } from "styled-components";
import LazyLoad from "react-lazyload";

import { GET_POKEMONS } from "../graphql/pokemons";
import { IPokemon } from "../__types__/pokemonsTypes";
import theme from "../styles/theme";
import Card from "./Card";

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

  return (
    <Section>
      <h1>Pokemons</h1>

      <ThemeProvider theme={theme}>
        <Grid>
          {loading && !pokemons && <h3>Loading</h3>}
          {pokemons
            ? pokemons.map((item: IPokemon) => (
                <LazyLoad key={item.id} throttle={200} offset={10}>
                  <Card {...item} />
                </LazyLoad>
              ))
            : data && data.pokemons
            ? data.pokemons.map((item: IPokemon) => (
                <LazyLoad key={item.id} throttle={200} offset={10}>
                  <Card {...item} />
                </LazyLoad>
              ))
            : null}
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
