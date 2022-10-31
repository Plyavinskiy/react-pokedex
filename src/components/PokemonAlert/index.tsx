import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Pikachu from "@assets/pikachu.png";
import * as S from "./styles";
import { StyledPokemonCardInfo, StyledIndex } from "../PokemonCard/styles";

interface IProps {
  message: string;
}

const PokemonAlert: React.FC<IProps> = ({ message }: IProps) => {
  return (
    <S.PokemonAlert>
      <StyledPokemonCardInfo>
        <S.Sprite>
          <LazyLoadImage alt="pikachu" effect="blur" src={Pikachu} />
        </S.Sprite>
        <StyledIndex>
          <h1>#000</h1>
        </StyledIndex>
        <p>{message}</p>
      </StyledPokemonCardInfo>
    </S.PokemonAlert>
  );
};

export default PokemonAlert;
