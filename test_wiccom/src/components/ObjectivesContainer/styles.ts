import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledObjectivesContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 64px;
  h1 {
    font-family: ${theme.font.robotoCondensed};
    font-size: 32px;
    font-weight: 700;
    font-style: italic;
    line-height: 38px;
    text-transform: uppercase;
    color: ${theme.colors.black1};
  }
  .img-container {
    display: flex;
    gap: 20px;
  }

  .about {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    h1 {
      margin-top: 84px;
      font-family: ${theme.colors.dark1};
      font-style: italic;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      text-align: center;
      text-transform: uppercase;
      position: relative;
    }
    p {
      width: 643px;
      height: 120px;
      font-family: ${theme.font.barlow};
      color: ${theme.colors.dark3};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      position: relative;
    }
    img {
      left: 37.5%;
      justify-self: center;
      display: block;
      text-align: center;
      position: absolute;
    }
  }
`;
