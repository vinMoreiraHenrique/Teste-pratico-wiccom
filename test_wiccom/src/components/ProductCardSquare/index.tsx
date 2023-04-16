import { CommonButton } from "../CommonButton";
import { useState } from "react";
import {
  StyledOuterDiv,
  StyledProductsSquareCarouselContainer,
  StyledProductsSquareContainer,
} from "./styles";
import SelectableButton from "../SelectableButton";
import { ProductsCarouselHiddenMenu } from "../ProductsCarouselHiddenMenu";

interface IProductCard {
  categoryText: string;
  modelName?: string;
}

export const ProductCardSquare = ({
  categoryText,
  modelName,
}: IProductCard) => {
  return (
    <StyledOuterDiv>
      <StyledProductsSquareContainer>
        <ProductsCarouselHiddenMenu modelName={modelName} />
        <StyledProductsSquareCarouselContainer>
          <img src="src\assets\mainImgs\product2.png" alt="Whey protein" />
        </StyledProductsSquareCarouselContainer>
        <div>
          <p className="product-name">{categoryText}</p>
          <p className="product-price">R$ 349,90</p>
          <p className="product-creditCard">ou 12x de R$ 29,16</p>
        </div>
      </StyledProductsSquareContainer>
      <CommonButton buttonText="Comprar" />
    </StyledOuterDiv>
  );
};
