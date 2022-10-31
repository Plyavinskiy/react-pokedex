import styled from "styled-components";

import { purple } from "@styles/globals";

export const SearchBar = styled.div`
  grid-area: "pokemons";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 190px;

  div {
    position: relative;
  }
`;

export const SearchInput = styled.input`
  width: 400px;
  height: 25px;
  background: #fbfbfb;
  font: inherit;
  position: relative;
  z-index: 3;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 30px;
  outline: 0;
  font-size: 16px;
  padding: 22px 18px;
  transition: box-shadow 0.3s;

  &:focus {
    color: ${purple};
    box-shadow: 0 10px 10px 0 rgb(61, 52, 139, 0.25);
    transition: box-shadow 0.3s;
  }

  @media (max-width: 600px) {
    width: 250px;
    font-size: 14px;
    height: 15px;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  position: relative;
  color: inherit;
  background: transparent;
  z-index: 5;
  border: 0;
  transition: all 200ms ease-in;
  cursor: pointer;
  margin-left: -60px;
  background: ${purple};
  color: #ffffff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  font-size: 15px;
  width: 100px;
  height: 45px;
  opacity: 80%;

  &:hover {
    opacity: 90%;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    width: 70px;
    height: 40px;
    margin-left: -20px;
  }
`;

export const SearchButtonClicked = styled(SearchButton)`
  opacity: 60%;
  cursor: auto;

  &:hover {
    opacity: 60%;
  }
`;
