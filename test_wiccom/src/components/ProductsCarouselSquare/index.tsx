import { GenericCarousel } from "../GenericCarousel";
import { ProductCardSquare } from "../ProductCardSquare";
import { LaunchingContainer } from "./styles";

export const ProductsCarouselSquare = () => {
  return (
    <LaunchingContainer>
      <h1>lançamentos</h1>
      <GenericCarousel
        numberOfSlides={3}
        withControls={true}
        slidesToScroll={1}
        dragFree={true}
        withIndicators={true}
        slideHeight="450px"
      >
        <div
          style={{
            display: "flex",
            margin: "10px 0px",
            justifyContent: "center",
            alignItems: "center",
            height: "341px",
          }}
        >
          <ProductCardSquare
            categoryText="Whey Zero (Com Lactase) Black Skull - 900G"
            modelName="flavour"
          />
          <ProductCardSquare
            categoryText="Whey Zero (Com Lactase) Black Skull - 900G"
            modelName="flavour"
          />
          <ProductCardSquare categoryText="Whey Zero (Com Lactase) Black Skull - 900G" />
          <ProductCardSquare categoryText="Whey Zero (Com Lactase) Black Skull - 900G" />
        </div>
      </GenericCarousel>
    </LaunchingContainer>
  );
};
