import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledBlogDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 540px;
  background: ${theme.gradient.gradientDark};
  margin-bottom: 64px;
  h1 {
    font-family: ${theme.font.robotoCondensed};
    font-size: 40px;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    line-height: 47px;
    margin-right: 11px;
  }
  .white-text {
    color: ${theme.colors.white};
  }
  .orange-text {
    color: ${theme.colors.orange1};
  }
  .text-button-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    align-items: center;
    width: 100%;
    padding: 0 55px;
    .text-box {
      display: flex;
      text-align: left;
    }
    button {
      width: 127px;
      height: 40px;
      bottom: 0;
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
