import styled from "styled-components";

import { StyledImage } from "../PokemonCard/styles";
import { StyledButton } from "../PokemonCardWrapper/styles";

export const PokemonAlert = styled(StyledButton)`
  cursor: auto;
`;

export const Sprite = styled(StyledImage)`
  width: 150px;
  height: 165px;
  margin-bottom: -10px;
`;
