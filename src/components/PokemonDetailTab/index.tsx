import React from "react";

import * as S from "./styles";

interface IProps {
  tabName: string;
  click: (event: React.MouseEvent) => void;
  isActive: boolean;
  index: number;
}

const PokemonDetailTab: React.FC<IProps> = ({
  tabName,
  click,
  isActive,
  index,
}: IProps) => {
  return (
    <S.Tab onClick={click} active={isActive} id={index}>
      {tabName}
    </S.Tab>
  );
};

export default PokemonDetailTab;
