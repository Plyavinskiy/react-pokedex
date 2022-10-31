import React, { useState } from "react";

import { IPokemon } from "@features/types";
import PokemonDetailDescription from "../PokemonDetailDescription";
import PokemonDetailStatistics from "../PokemonDetailStatistics";
import PokemonDetailTab from "../PokemonDetailTab";
import * as S from "./styles";

const PokemonDetailProfile: React.FC<IPokemon> = ({ ...props }: IPokemon) => {
  const [active, setActive] = useState<number>(0);

  const changeCurrentTab = (event: React.MouseEvent) => {
    const id = parseInt((event.target as HTMLButtonElement).id, 0);
    if (id !== active) {
      setActive(id);
    }
  };

  const data = {
    tabs: [
      {
        tabName: "Description",
        index: 0,
        isActive: active === 0,
        component: <PokemonDetailDescription {...props} />,
      },
      {
        tabName: "Statistics",
        index: 1,
        isActive: active === 1,
        component: <PokemonDetailStatistics {...props} />,
      },
    ],
  };

  const tabElements = data.tabs.map((x) => (
    <PokemonDetailTab
      click={changeCurrentTab}
      isActive={x.isActive}
      index={x.index}
      tabName={x.tabName}
      key={x.tabName}
    />
  ));

  const tabContents = data.tabs.map((x) => (
    <React.Fragment key={x.tabName}>
      {data.tabs[x.index].isActive && x.component}
    </React.Fragment>
  ));

  return (
    <S.Profile>
      <S.TabsList>{tabElements}</S.TabsList>
      <S.Content>{tabContents}</S.Content>
    </S.Profile>
  );
};

export default PokemonDetailProfile;
