import styled from "styled-components";

import Pokeball from "@assets/pokeball.svg";
import { lightGrey } from "@styles/globals";

export const PokemonDetailPage = styled.div`
  grid-area: pokemons;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${lightGrey};
  background-image: url(${Pokeball});
  background-repeat: no-repeat;
  background-size: 1500px;
  background-position: center;

  @media (max-width: 600px) {
    max-width: auto;
  }
`;
