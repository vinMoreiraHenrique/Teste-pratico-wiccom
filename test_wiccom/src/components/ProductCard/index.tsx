
import { ReactNode, useState } from "react";
import { StyledProductsCarouselContainer, StyledProductsContainer } from "./styles";

interface IProductCard {
    categoryText: string;
}

export const ProductCard = ({categoryText}: IProductCard) => {
    return(
  <StyledProductsContainer>
    <StyledProductsCarouselContainer>
      <div className="circle"></div>
      <img src="src\assets\mainImgs\product1.png" alt="Whey protein" />
      <div></div>
    </StyledProductsCarouselContainer>
    <p>{categoryText}</p>
  </StyledProductsContainer>
    )
};
