import {
  StyledProductsSquareCarouselContainer,
  StyledProductsSquareContainer,
} from "./styles";

interface IProductCard {
  categoryText: string;
}

export const ProductCardSquare = ({ categoryText }: IProductCard) => {
  return (
    <StyledProductsSquareContainer>
      <div className="buy-panel">
        <p>Sabor</p>
        
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
  );
};
