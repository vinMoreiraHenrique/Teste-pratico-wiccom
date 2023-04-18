import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledBlogImgContainer = styled.div`
  border: 1px solid ${theme.colors.dark3};
  width: 376px;
  height: 380px;
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
  overflow: hidden;
  img {
    transition: 0.5s ease-in-out;
    z-index: -1;
  }
  svg {
    color: ${theme.colors.orange1};
    width: 30px;
    height: 30px;
    position: absolute;
    top: 86.5%;
    transform: translateX(90px);
    transition: 0.5s;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
    svg {
      transform: translateX(130px);
    }
  }
  div {
    overflow: hidden;
    background-color: ${theme.colors.dark1};
    height: 100%;
    padding-left: 20px;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: ${theme.font.barlow};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: ${theme.colors.white};
    .date {
      color: ${theme.colors.gray2};
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
    button {
      position: absolute;
      color: ${theme.colors.black1};
      opacity: 1;
      top: 85%;
      width: 127px;
      height: 40px;
      bottom: 0;
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }
  }

  img {
    width: 376px;
    height: 200px;
  }
`;
