import { Carousel } from "@mantine/carousel";
import { StyledCarousel } from "./styles";
import { useState, useEffect } from "react";

interface ICarousel {
  slideSize?: string;
  withIndicators?: boolean;
  withControls?: boolean;
  numberOfSlides: number;
  children: React.ReactNode;
}

export const GenericCarousel = ({
  slideSize,
  withIndicators,
  withControls,
  numberOfSlides,
  children,
}: ICarousel) => {
  const [slides, setSlides] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const newSlides = Array.from({ length: numberOfSlides }, (_, i) => (
      <Carousel.Slide key={i}>{children}</Carousel.Slide>
    ));
  }, [numberOfSlides, children]);

  return (
    <StyledCarousel>
      <Carousel
        slideSize={slideSize || "100%"}
        height={548}
        slideGap="lg"
        controlsOffset="xs"
        controlSize={36}
        withControls={withControls || false}
        withIndicators={withIndicators}
      >
        {slides}
      </Carousel>
    </StyledCarousel>
  );
};
