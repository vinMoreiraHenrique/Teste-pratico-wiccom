import { Carousel } from "@mantine/carousel";
import { StyledCarousel } from "./styles";
import { useState, useEffect } from "react";
import { Center } from "@mantine/core";

interface ICarousel {
  widthCarousel?: string;
  dragFree?: boolean;
  slidesToScroll?: number;
  controlOffset?: string;
  slideGap?: string;
  slideHeight?: string;
  slideSize?: string;
  withIndicators?: boolean;
  withControls?: boolean;
  numberOfSlides: number;
  children: React.ReactNode;
}

export const GenericCarousel = ({
  widthCarousel,
  dragFree,
  slidesToScroll,
  controlOffset,
  slideGap,
  slideHeight,
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

    setSlides(newSlides);
  }, [numberOfSlides, children]);

  return (
    <StyledCarousel>
      <Carousel
        slideSize={slideSize || "100%"}
        height={slideHeight || "100%"}
        slideGap={slideGap || ""}
        controlsOffset={controlOffset || ""}
        controlSize={36}
        withControls={withControls || false}
        withIndicators={withIndicators}
        slidesToScroll={slidesToScroll}
        dragFree={dragFree || false}
        sx={{
          width: widthCarousel || "",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        // align={"center"}
        loop
      >
        {slides}
      </Carousel>
    </StyledCarousel>
  );
};
