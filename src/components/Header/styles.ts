
import styled from "styled-components";

export const Wrapper = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 300px;
  min-height: 120px;
  z-index: 10;
  background-color: #263238;
  --box-shadow-color: #3d348b;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  text-align: center;

  div {
    display: flex;
    margin-top: -5px;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const Image = styled.img`
  width: 264px;
  height: 100px;
  cursor: pointer;
`;