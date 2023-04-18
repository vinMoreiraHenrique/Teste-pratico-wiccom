import { BlogImgContainer } from "../BlogImgContainer";
import { CommonButton } from "../CommonButton";
import { GenericCarousel } from "../GenericCarousel";
import { StyledBlogDetailsContainer, StyledCardContainer } from "./styles";

export const BlogDetailsCarousel = () => {
  return (
    <StyledBlogDetailsContainer>
      <div className="text-button-box">
        <div className="text-box">
          <h1 className="white-text">Confira o</h1>
          <h1 className="orange-text">Nosso blog</h1>
        </div>
        <CommonButton buttonText="ver todos" />
      </div>
      <GenericCarousel  numberOfSlides={3} slidesToScroll={1} withControls={true} widthCarousel="1230px">
      <StyledCardContainer>
        <BlogImgContainer imgSrc="\static\images\blogImg1.png"/>
        <BlogImgContainer imgSrc="\static\images\blogImg2.png"/>
        <BlogImgContainer imgSrc="\static\images\blogImg3.png"/>
      </StyledCardContainer>
      </GenericCarousel>
    </StyledBlogDetailsContainer>
  );
};
