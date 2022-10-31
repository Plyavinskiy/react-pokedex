import styled from "styled-components";

import { IProps } from "@utils/checkPokemonType";
import { animated } from "react-spring";
import { lightBoxShadow } from "@styles/globals";
import { checkPokemonType } from "@utils/checkPokemonType";

export const View = styled.div<IProps>`
  grid-template-columns: 1fr;
  display: grid;
  place-items: center;
  width: 600px;
  height: 600px;
  border-radius: 30px 30px 30px 0;
  box-shadow: ${lightBoxShadow};

  ${({ pokemonType, light }) => checkPokemonType(pokemonType, light)};

  @media (max-width: 600px) {
    min-width: 250px;
    max-width: 390px;
    max-height: 480px;
    border-radius: 0px 0px 30px 30px;
  }
`;

export const Image = styled(animated.img)`
  grid-row-start: 1;
  grid-column-start: 1;
  width: 250px;
  height: 250px;
  z-index: 3;

  @media (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
`;

export const Name = styled.div`
  font-size: 55px;
  font-weight: 600;
  grid-row-start: 1;
  grid-column-start: 1;
  color: #636363;
  top: 50px;
  z-index: 0;
  margin-bottom: 300px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Index = styled.div`
  font-size: 100px;
  font-weight: 600;
  grid-row-start: 1;
  grid-column-start: 1;
  color: #f2f2f2;
  z-index: 1;

  @media (max-width: 600px) {
    font-size: 65px;
  }
`;

export const Round = styled(animated.div)`
  grid-row-start: 1;
  grid-column-start: 1;
  width: 350px;
  height: 350px;
  background-color: #f2f2f2;
  border-radius: 50%;
  z-index: 2;
  opacity: 0.3;

  @media (max-width: 600px) {
    width: 320px;
    height: 320px;
  }
`;
