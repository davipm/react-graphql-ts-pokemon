import React, { useContext, memo } from "react";
import { ThemeContext } from "styled-components";

import { IPokemon } from "../../__types__/pokemonsTypes";
import { Wrapper, Name, Image, Title, Attack, Body, Footer } from "./style";

const Card = ({ name, number, image, maxHP, maxCP, attacks }: IPokemon) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Wrapper data-aos="fade-up" data-aos-duration="2000" data-aos-offset="200">
      <Title>
        <div className="item">HP: {maxHP}</div>
        <div className="item">CP: {maxCP}</div>
      </Title>
      <Image src={image} alt={name} />
      <Body>
        <Name>{name}</Name>
        <p>#{number}</p>
      </Body>
      <Footer>
        {attacks.special.map((item) => (
          <Attack
            key={item.name}
            color={`${themeContext[item.type.toLowerCase()]}`}
          >
            {item.name}
          </Attack>
        ))}
      </Footer>
    </Wrapper>
  );
};

export default memo(Card);
