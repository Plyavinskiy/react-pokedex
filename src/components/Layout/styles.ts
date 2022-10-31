import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 4.5fr;
  grid-template-areas: "header" "pokemons";
  height: 100vh;
`;
