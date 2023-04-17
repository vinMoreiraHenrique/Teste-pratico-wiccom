import { theme } from "../../styles/theme";
import { CommonButton } from "../CommonButton";
import { StyledBlogImgContainer } from "./styles";
import {CgExternal} from "react-icons/cg"

interface IBlogImgContainer {
  imgSrc: string;
}

export const BlogImgContainer = ({ imgSrc }: IBlogImgContainer) => {
  return (
    <StyledBlogImgContainer>
      <img src={imgSrc} alt="" style={{ width: "376px", height: "200px", margin: 0}} />
      <div>
        <p className="date">03.05.21</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <CommonButton buttonText="ler mais" />
        <CgExternal />
      </div>
    </StyledBlogImgContainer>
  );
};
