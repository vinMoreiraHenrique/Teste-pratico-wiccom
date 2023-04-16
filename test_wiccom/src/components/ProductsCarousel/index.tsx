import { GenericCarousel } from "../GenericCarousel";
import { ProductCardCircle } from "../ProductCardCircle";


export const ProductsCarouselCircle = () => {
  return (
    <GenericCarousel
      numberOfSlides={1}
      withControls={true}
      slidesToScroll={6}
      dragFree={true}
    >
      <div
        style={{
          display: "flex",
          margin: "10px 0px",
          justifyContent: "center",
          alignItems: "center",
          height: "300px"
        }}
      >
        <ProductCardCircle categoryText="Proteínas" />
        <ProductCardCircle categoryText="Hipercalóricos" />
        <ProductCardCircle categoryText="Creatina" />
        <ProductCardCircle categoryText="Packs" />
        <ProductCardCircle categoryText="Aminoácidos" />
        <ProductCardCircle categoryText="Saúde" />
      </div>
    </GenericCarousel>
  );
};
