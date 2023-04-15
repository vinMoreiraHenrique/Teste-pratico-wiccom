import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledLargeImgContainer = styled.div`
  width: 551px;
  height: 548px;
  position: relative;
`;
export const StyledLargeImgCarousel = styled.div`
  width: 100%;
  img {
    height: 548px;
  }
`;

export const StyledTextBox = styled.div`
  position: absolute;
  width: 551px;
  height: 288px;
  left: 27.5%;
  top: 25%;
  display: flex;
  flex-direction: column;

  text-align: left;

  .big-text {
    font-family: ${theme.font.robotoCondensed};
    font-size: 56px;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    line-height: 65.63px;
  }

  .orange-text {
    color: ${theme.colors.orange1};
  }

  .small-text {
    margin-top: 16px;
    font-family: ${theme.font.barlow};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    width: 349px;
  }

  .white-text {
    color: ${theme.colors.white};
  }
`;
