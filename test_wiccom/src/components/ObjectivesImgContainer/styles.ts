import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledObjectivesImgContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .part1 {
    background-color: ${theme.colors.orange1};
    z-index: 1;
    margin-left: 10px;
    transform: skew(-30deg);
    width: 10px;
    transition: 0.4s;
  }
  .part2 {
    background-color: ${theme.colors.orange1};
    z-index: 1;
    margin-left: 10px;
    transform: skew(-30deg);
    width: 10px;
    transition: 0.3s;
  }
  div {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${theme.colors.orange1};
    transform: skew(-30deg) translateX(-20px);
    width: 212px;
    height: 40px;
    z-index: 10;

    p {
      transform: skew(30deg);
      font-family: ${theme.font.barlow};
      font-style: italic;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      position: absolute;
      left: 15%;
      color: ${theme.colors.black1};
      z-index: 9;
    }
  }
  :hover {
    .part1 {
      transform: translate(200px) skew(-30deg);
    }
    .part2 {
      transform: translate(220px) skew(-30deg);
    }
    img {
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }

  img {
    filter: grayscale(1);
    height: 340px;
    width: 277px;
    transition: 0.3s;
  }
`;
