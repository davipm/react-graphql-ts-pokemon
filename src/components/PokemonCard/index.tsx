import React, { memo, useContext } from "react";
import { ThemeContext } from "styled-components";

import { IPokemon } from "@/types/pokemon";

import { Attack, Body, Footer, Wrapper } from "./styles";

const PokemonCard = ({
  name,
  number,
  image,
  maxHP,
  maxCP,
  attacks,
}: IPokemon) => {
  const color = useContext(ThemeContext);

  return (
    <Wrapper data-aos="fade-up" data-aos-duration="2000" data-aos-offset="200">
      <header>
        <div>HP: {maxHP}</div>
        <div>CP: {maxCP}</div>
      </header>

      <img src={image} alt={name} title={name} />

      <Body>
        <h2>{name}</h2>
        <p>#{number}</p>
      </Body>

      <Footer>
        {attacks.special.map((item) => (
          <Attack
            key={item.name}
            style={{
              backgroundColor: `${color[item.type.toLowerCase()]}`,
            }}
          >
            {item.name}
          </Attack>
        ))}
      </Footer>
    </Wrapper>
  );
};

export default memo(PokemonCard);
