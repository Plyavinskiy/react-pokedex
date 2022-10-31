import React from "react";

import { useSpring } from "react-spring";
import { formatIndex } from "@utils/formatIndex";
import * as S from "./styles";

interface IPokemon {
  name: string;
  index: number;
  type: string;
  sprite: string;
}

const PokemonDetailView: React.FC<IPokemon> = ({
  name,
  index,
  type,
  sprite,
}: IPokemon) => {
  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x: number, y: number) =>
    `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x: number, y: number) =>
    `translate3d(${x / 10}px,${y / 10}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <S.View
      pokemonType={type}
      light
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <S.Name>{name.toUpperCase()}</S.Name>
      <S.Image src={sprite} style={{ transform: props.xy.to(trans2) }} />
      <S.Round style={{ transform: props.xy.to(trans1) }} />
      <S.Index>
        <h1>{formatIndex(index)}</h1>
      </S.Index>
    </S.View>
  );
};

export default PokemonDetailView;
