import styled from "styled-components";

import { animated } from "react-spring";

export const Statistics = styled(animated.table)`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    margin-bottom: 10px;
  }

  td,
  th {
    width: 100%;
  }

  tr {
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #636363;
  white-space: nowrap;

  p {
    font-weight: 600;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
