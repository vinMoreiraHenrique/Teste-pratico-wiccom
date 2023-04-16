import { GenericCarousel } from "../GenericCarousel";
import { ProductCard } from "../ProductCard";


export const ProductsCarousel = () => {
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
        <ProductCard categoryText="Proteínas" />
        <ProductCard categoryText="Hipercalóricos" />
        <ProductCard categoryText="Creatina" />
        <ProductCard categoryText="Packs" />
        <ProductCard categoryText="Aminoácidos" />
        <ProductCard categoryText="Saúde" />
      </div>
    </GenericCarousel>
  );
};
