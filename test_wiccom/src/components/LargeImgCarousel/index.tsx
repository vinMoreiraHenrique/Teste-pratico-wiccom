import { CommonButton } from "../CommonButton";
import { GenericCarousel } from "../GenericCarousel";
import {
  StyledLargeImgCarousel,
  StyledLargeImgContainer,
  StyledTextBox,
} from "./styles";

export const LargeImgCarousel = () => {
  return (
    <GenericCarousel
      numberOfSlides={3}
      withIndicators={true}
      slideHeight="100%"
    >
      <StyledLargeImgCarousel>
        <StyledLargeImgContainer>
          <StyledTextBox>
            <p className="center-left white-text big-text">
              Ajudando você a ter
            </p>
            <p className="center-left orange-text big-text">mais performance</p>
            <p className="white-text small-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <CommonButton buttonText="Confira" />
          </StyledTextBox>
          <img
            src="\static\images\gym_man.png"
            alt="homem levantando peso"
          />
        </StyledLargeImgContainer>
      </StyledLargeImgCarousel>
    </GenericCarousel>
  );
};
