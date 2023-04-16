import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledProductsSquareContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.white};
  width: 277px;
  height: 100%;
  transition: 0.5s ease-in-out;
  position: relative;
  margin: 0px 10px;
  border: 2px solid ${theme.colors.gray3};
  background-color: ${theme.colors.white};
  img {
    width: 165px;
    height: 165px;
  }
  &:hover {
    background-color: ${theme.colors.gray3};
    .buy-panel {
      height: 70%;

      z-index: 10;
    }
  }
  p {
    text-align: left;
    font-family: ${theme.font.barlow};
    font-style: normal;
    margin-left: 24px;
  }

  .buy-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0;
    background-color: ${theme.colors.white};
    opacity: 0.95;
    bottom: 0;
    position: absolute;
    width: 100%;
    p {
      font-family: ${theme.font.barlow};
      color: ${theme.colors.black1};
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
  .product-name {
    margin-top: 24px;
    margin-bottom: 16px;
    color: ${theme.colors.black1};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    width: 182px;
    height: 32px;
  }
  .product-price {
    color: ${theme.colors.orange1};
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-transform: uppercase;
    margin-bottom: 3px;
  }
  .product-creditCard {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: ${theme.colors.dark3};
  }
`;

export const StyledProductsSquareCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledInvisibleMenu = styled.div`
  &:hover {
    height: 70%;
    position: absolute;
    bottom: 0%;
    z-index: 10;
  }
`;
