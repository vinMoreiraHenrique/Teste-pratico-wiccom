import { CommonButton } from "../CommonButton";
import { useState } from "react";
import {
  StyledOuterDiv,
  StyledProductsSquareCarouselContainer,
  StyledProductsSquareContainer,
} from "./styles";
import SelectableButton from "../SelectableButton";

interface IProductCard {
  categoryText: string;
}

export const ProductCardSquare = ({ categoryText }: IProductCard) => {

  return (
    <StyledOuterDiv>
      <StyledProductsSquareContainer>
        <div
          className="buy-panel"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{marginBottom: "7px"}}>Sabor</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              width: "170px"
            }}
          >
            <SelectableButton textButton="toffee" />
            <SelectableButton textButton="chocolate" />
            <SelectableButton textButton="morango" />
            <SelectableButton textButton="baunilha" />
          </div>
        </div>
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
