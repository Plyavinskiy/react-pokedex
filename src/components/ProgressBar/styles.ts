import styled from "styled-components";

import { purple } from "@styles/globals";

export const ProgressBar = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  height: 25px;
  border-radius: 20px;
  background-color: #d8d8d8;

  @media (max-width: 600px) {
    width: 180px;
  }
`;

export const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 100%;
  border-radius: 15px;
  color: #fff;
  background: ${purple};
  opacity: 0;
  transition: 1s ease 0.3s;
`;
