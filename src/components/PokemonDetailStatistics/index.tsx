import React from "react";

import { IPokemon } from "@features/types";
import ProgressBar from "../ProgressBar";
import { useSpring } from "react-spring";
import * as S from "./styles";

const PokemonDetailStats: React.FC<IPokemon> = ({ ...props }: IPokemon) => {
  const TransitionEffect = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const statElements = props.stats.map((stat) => {
    return (
      <tbody key={stat.stat.name}>
        <tr>
          <td>
            <S.Label>{stat.stat.name.toUpperCase()}: </S.Label>
          </td>
          <td>
            <ProgressBar baseStat={stat.base_stat} />
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <S.Statistics style={TransitionEffect}>
      <tbody>
        <tr>
          <th>
            <S.Label>
              <p>STATISTIC NAME</p>
            </S.Label>
          </th>
          <th>
            <S.Label>
              <p>MAX 255</p>
            </S.Label>
          </th>
        </tr>
      </tbody>

      {statElements}
    </S.Statistics>
  );
};

export default PokemonDetailStats;
