import styled from "styled-components";

import Pokeball from "@assets/pokeball.svg";
import { lightGrey } from "@styles/globals";

export const PokemonsListPage = styled.div`
  grid-area: pokemons;
  overflow-y: scroll;
  flex-wrap: wrap;
  overflow-x: hidden;
  background-color: ${lightGrey};
  background-image: url(${Pokeball});
  background-repeat: no-repeat;
  background-size: 1500px;
  background-position: center;
`;

export const PokemonsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: -20px;
`;
