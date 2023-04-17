import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledImgSpanContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  :hover {
    p {
      opacity: 1;
      transform: translateY(0);
      transition: 0.9s;
    }
  }

  .athlete-name {
    overflow: hidden;
    transition: 0.9s;
    transform: translateY(-1);
    opacity: 0;
    font-family: ${theme.font.robotoCondensed};
    font-size: 15px;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    line-height: 20px;
    

    color: ${theme.colors.orange1};
    text-align: left;
    &:after {
      content: "";
      display: flex;
      align-self: center;
      justify-content: center;
      width: 100%;
      height: 1px;
      background-color: white;
      display: block;
      margin: 10px 0px;
    }
  }
  .athlete-more-info{
    overflow: hidden;
    transition: 0.9s;
    transform: translateY(-1);
    opacity: 0;
    font-family: ${theme.font.robotoCondensed};
    font-size: 12px;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    line-height: 16px;
    margin-top: 10px;
    color: ${theme.colors.white};
    text-align: left;
  }
  .athlete-info {
    display: block;
    width: 100%;
    height: 35%;
    position: absolute;
    padding: 20px;
    background-color: ${theme.colors.orange2};
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    transition: 0.3s;
    opacity: 0.98;
  }
  &:hover .athlete-info {
    transform: translateX(0);
    background-color: ${theme.colors.dark3};
    transition: 0.5s;
    opacity: 0.95;
  }
`;
