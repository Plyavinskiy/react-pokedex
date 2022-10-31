import React from "react";
import { useSelector } from "react-redux";

import { IPokemon } from "@features/types";
import { selectPokemonSpecies } from "@features/speciesSlice";
import { useSpring } from "react-spring";
import { formatIndex } from "@utils/formatIndex";
import Badges from "../Badges";
import * as S from "./styles";

const PokemonDetailDescription: React.FC<IPokemon> = ({
  ...props
}: IPokemon) => {
  const species = useSelector(selectPokemonSpecies);

  const TransitionEffect = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <S.Description style={TransitionEffect}>
      {species && (
        <>
          <S.Label>
            <h1>{props.name.toUpperCase()}</h1>
          </S.Label>
          <span>{species.flavor_text_entries[17].flavor_text}</span>
          <S.Label>
            Index: <p>{formatIndex(props.id)}</p>
          </S.Label>
          <S.Label>
            Weight: <p>{(props.weight * 0.1).toFixed(1)} kg</p>
          </S.Label>
          <S.Label>
            Height: <p>{(props.height * 0.1).toFixed(1)} m </p>
          </S.Label>
          <S.Label>
            Capture Rate: <p>{species.capture_rate} </p> of 255
          </S.Label>
          <S.Label>
            Happiness: <p>{species.base_happiness} </p> of 255
          </S.Label>
          <S.Label>
            Habitat: <p>{species.habitat?.name.toUpperCase() || "UNKNOWN"}</p>
          </S.Label>
          <S.Label>
            Type: &nbsp;
            <Badges
              typeOne={props.types[0].type.name}
              typeTwo={props.types[1] ? props.types[1].type.name : ""}
            />
          </S.Label>
        </>
      )}
    </S.Description>
  );
};

export default PokemonDetailDescription;
