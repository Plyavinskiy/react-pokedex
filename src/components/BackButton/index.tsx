import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { useTransition, animated } from "react-spring";
import { useAppDispatch } from "@features/store";

import {
  clearPokemonsReducer,
  selectHideShowAll,
} from "@features/pokemonsSlice";

import * as S from "./styles";

const BackButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const hideShowAll = useSelector(selectHideShowAll);

  const showAllHandler = () => {
    dispatch(clearPokemonsReducer());
  };

  const hideShowAllEffect = useTransition(hideShowAll, {
    from: { opacity: 0, x: 200 },
    enter: { opacity: 0.8, x: 0 },
    leave: { opacity: 0.5, x: 200 },
    config: { duration: 200 },
  });

  return (
    <Fragment>
      {hideShowAllEffect((style, searchButton) =>
        searchButton ? (
          ""
        ) : (
          <animated.div style={style}>
            <S.Back onClick={showAllHandler}>Back</S.Back>
          </animated.div>
        )
      )}
    </Fragment>
  );
};

export default BackButton;
