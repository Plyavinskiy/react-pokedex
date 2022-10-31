import styled from "styled-components";

import { animated } from "react-spring";
import { darkGrey } from "@styles/globals";

export const Back = styled(animated.button)`
  display: inline-block;
  font-size: 15px;
  position: absolute;
  width: 130px;
  height: 45px;
  top: 12px;
  left: -150px;
  z-index: 1;
  color: inherit;
  color: #ffffff;
  background: transparent;
  background: ${darkGrey};
  border: 0;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  margin-right: 30px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;

  &:hover {
    opacity: 90%;
  }

  @media (max-width: 539px) {
    left: 97.5px;
    top: -50px;
  }
`;
