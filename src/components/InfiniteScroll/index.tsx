import React, { Fragment } from "react";

import { Waypoint } from "react-waypoint";
import * as S from "./styles";

interface IProps {
  children: React.ReactNode;
  callBack(args: Waypoint.CallbackArgs): void;
}

const InfiniteScroll = ({ children, callBack }: IProps) => {
  return (
    <Fragment>
      {children}
      <Waypoint bottomOffset="-20px" onEnter={callBack}>
        <S.LoadingSpace />
      </Waypoint>
    </Fragment>
  );
};

export default InfiniteScroll;
