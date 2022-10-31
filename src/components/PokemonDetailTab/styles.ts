import styled from "styled-components";

import { purple } from "@styles/globals";

interface IButtonProps {
  active: boolean;
  id: any;
}

export const Tab = styled.button<IButtonProps>`
  font-size: 20px;
  font-weight: 600;
  position: relative;
  height: 35px;
  color: #636363;
  background: none;
  border: none;
  border-radius: 4px;
  margin: 15px 0 0 35px;
  cursor: pointer;

  border-bottom: ${(props) => (props.active ? `3px solid ${purple}` : "")};

  ${(props) =>
    !props.active
      ? `font-weight: 500;
      :before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 35px;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    border-bottom: 3px solid ${purple};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  :hover::before {
    transform: scaleX(1);
  }`
      : ``}

  @media (max-width: 600px) {
    font-size: 16px;
    margin: 15px 0 0 15px;
  }
`;
