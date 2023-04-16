import { CommonButton } from "../CommonButton";
import { useState } from "react";
import {
  StyledOuterDiv,
  StyledProductsSquareCarouselContainer,
  StyledProductsSquareContainer,
} from "./styles";
import SelectableButton from "../SelectableButton";
import { ProductsCarouselHiddenMenu } from "../ProductsCarouselHiddenMenu";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { theme } from "../../styles/theme";

interface IProductCard {
  categoryText: string;
  modelName?: string;
}

export const ProductCardSquare = ({
  categoryText,
  modelName,
}: IProductCard) => {
  const [isYellow, setIsYellow] = useState(false);

  function handleClick() {
    setIsYellow(!isYellow);
  }
  return (
    <StyledOuterDiv>
      <StyledProductsSquareContainer>
        <ProductsCarouselHiddenMenu modelName={modelName} />
        <StyledProductsSquareCarouselContainer>
          <div
            className="iconDiv"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              color: theme.colors.gray1,
              right: "3%",
              top: "5%",
              gap: "10px",
            }}
          >
            {isYellow ? (
              <AiTwotoneStar
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                className="favorite"
                color={theme.colors.orange1}
                onClick={handleClick}
              />
            ) : (
              <AiOutlineStar
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                className="favorite"
                color={theme.colors.gray1}
                onClick={handleClick}
              />
            )}

            <BsCart3
              style={{ width: "24px", height: "24px", cursor: "pointer" }}
            />
          </div>
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
