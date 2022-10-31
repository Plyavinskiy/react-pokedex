import styled from "styled-components";

import { animated } from "react-spring";
import { purple } from "@styles/globals";

export const Description = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: #636363;

  span {
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Label = styled.span`
  display: flex;
  font-weight: 500;
  margin-bottom: 20px;

  p {
    margin: 0px 10px 0 10px;
    font-weight: 600;
  }

  h1 {
    font-size: 20px;
    margin-bottom: -10px;
    color: ${purple};
  }
`;
