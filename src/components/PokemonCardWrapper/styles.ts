import styled from "styled-components";

import { animated } from "react-spring";
import { lightBoxShadow, darkBoxShadow } from "@styles/globals";

export const StyledButton = styled(animated.button)`
  flex-basis: 26%;
  min-width: 400px;
  height: 250px;
  margin: 30px 30px 30px 30px;
  background-color: #fbfbfb;
  box-shadow: ${lightBoxShadow};
  transition: box-shadow 0.2s;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: ${darkBoxShadow};
    transition: box-shadow 0.2s;
  }

  @media (max-width: 539px) {
    min-width: 320px;
    height: 200px;
  }
`;