import styled from "styled-components";

import { lightBoxShadow } from "@styles/globals";

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 600px;
  border: none;
  border-radius: 30px 0px 30px 30px;
  background-color: #fbfbfb;
  box-shadow: ${lightBoxShadow};


  @media (max-width: 600px) {
    min-width: 250px;
    max-width: 390px;
    max-height: 530px;
    border-radius: 30px 30px 0px 0px;
  }
`;

export const TabsList = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  width: 85%;

  @media (max-width: 600px) {
    width: 85%;
  }
`;