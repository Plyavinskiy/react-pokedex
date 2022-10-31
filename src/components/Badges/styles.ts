import styled from "styled-components";
import { checkPokemonType } from "@utils/checkPokemonType";

interface IProps {
  type: string;
  light?: boolean;
}

export const Badge = styled.div<IProps>`
  display: inline-block;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;

  ${({ type }) => checkPokemonType(type)};

  @media (max-width: 539px) {
    font-size: 14px;
  }
`;

export const Dot = styled.div`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #bbb;
  border-radius: 50%;
  margin: 0 10px 0 10px;
`;