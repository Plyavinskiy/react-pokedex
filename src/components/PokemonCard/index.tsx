import React from "react";
import { useHistory } from "react-router";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import PokemonCardWrapper from "../PokemonCardWrapper";
import { formatIndex } from "@utils/formatIndex";
import { StyledPokemonCardInfo, StyledImage, StyledIndex } from "./styles";
import Badges from "../Badges";

interface IPokemon {
  name: string;
  index: number;
  typeOne: string;
  typeTwo: string;
  sprite: string;
}

const PokemonCard: React.FC<IPokemon> = ({
  name,
  index,
  typeOne,
  typeTwo,
  sprite,
}: IPokemon) => {
  const history = useHistory();

  return (
    <PokemonCardWrapper click={() => history.push(`/pokemon/${index}`)}>
      <StyledPokemonCardInfo>
        <StyledImage>
          <LazyLoadImage alt={name} effect="blur" src={sprite} />
        </StyledImage>
        <StyledIndex>
          <h1>{formatIndex(index)}</h1>
        </StyledIndex>
        <p>{name.toUpperCase()}</p>
        <Badges typeOne={typeOne} typeTwo={typeTwo} />
      </StyledPokemonCardInfo>
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
