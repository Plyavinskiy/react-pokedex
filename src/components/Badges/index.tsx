import React, { Fragment } from "react";

import * as S from "./styles";

interface ITypes {
  typeOne: string;
  typeTwo: string;
}

const Badges: React.FC<ITypes> = ({ typeOne, typeTwo }: ITypes) => {
  const hasTypeTwo = !typeTwo ? null : (
    <Fragment>
      <S.Dot />
      <S.Badge type={typeTwo}>{typeTwo}</S.Badge>
    </Fragment>
  );

  return (
    <div>
      <S.Badge type={typeOne}>{typeOne}</S.Badge>
      {hasTypeTwo}
    </div>
  );
};

export default Badges;
