import { ReactNode, useState } from "react";
import {
  StyledProductsCarouselContainer,
  StyledProductsContainer,
} from "./styles";

interface IProductCard {
  categoryText: string;
}

export const ProductCardCircle = ({ categoryText }: IProductCard) => {
  return (
    <StyledProductsContainer>
      <StyledProductsCarouselContainer>
        <div className="circle"></div>
        <img src="\static\images\product1.png" alt="Whey protein" />
      </StyledProductsCarouselContainer>
      <p>{categoryText}</p>
    </StyledProductsContainer>
  );
};
