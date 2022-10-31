import React from "react";

import Header from "../Header";
import * as S from "./styles";

export interface ILayoutProp {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProp> = ({ children }: ILayoutProp) => {
  return (
    <S.Layout>
      <Header />
      {children}
    </S.Layout>
  );
};

export default Layout;
