import { CommonButton } from "../CommonButton";
import { GenericCarousel } from "../GenericCarousel";
import {
  StyledLargeImgCarousel,
  StyledLargeImgContainer,
  StyledTextBox,
} from "./styles";

export const LargeImgCarousel = () => {
  return (
    <GenericCarousel numberOfSlides={3} withIndicators={true}>
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
            <CommonButton />
          </StyledTextBox>
          <img
            src="src\assets\mainImgs\gym_man.png"
            alt="homem levantando peso"
          />
        </StyledLargeImgContainer>
      </StyledLargeImgCarousel>
    </GenericCarousel>
  );
};
