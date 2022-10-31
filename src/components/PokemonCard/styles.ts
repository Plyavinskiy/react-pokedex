import styled from "styled-components";

export const StyledPokemonCardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: -45px;

  p {
    font-size: 23px;
    font-weight: 600;
    color: #636363;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;

    div {
      margin: 0px 7px;
    }
  }

  @media (max-width: 539px) {
    margin-top: -25px;

    p {
      font-size: 19px;
    }
  }
`;

export const StyledImage = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  justify-self: center;
  margin: 20px 0 15px 0px;
  z-index: 2;

  img {
    height: 130px;
    width: 130px;
  }

  @media (max-width: 539px) {
    img {
      height: 110px;
      width: 110px;
    }
  }
`;

export const StyledIndex = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  font-size: 60px;
  font-weight: 600;
  color: #e9e9e9;
  z-index: 1;

  @media (max-width: 539px) {
    font-size: 40px;
  }
`;
