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
  /* margin: 0px 10px; */
  border: 2px solid ${theme.colors.gray3};
  img {
    width: 165px;
    height: 165px;
  }
  + button {
    display: none;
    width: 100%;
    margin-top: 0px;
  }
  &:hover {
    background-color: ${theme.colors.gray3};
    + button {
      display: block;
    }
    .buy-panel {
      height: 60%;
      z-index: 10;
      opacity: 0.95;
      transition: 0.5s;
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
    opacity: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    transition: 0.5s;

    p {
      font-family: ${theme.font.barlow};
      color: ${theme.colors.black1};
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      text-align: left;

      margin-left: 0;
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

export const StyledOuterDiv = styled.div`
  display: block;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0px 10px;
`;
