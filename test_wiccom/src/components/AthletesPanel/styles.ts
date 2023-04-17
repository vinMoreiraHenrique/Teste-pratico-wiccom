import styled, { keyframes } from "styled-components";
import img from "../../assets/mainImgs/athletesBackground.png";
import { theme } from "../../styles/theme";

export const StyledAthletesPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 461px;
  background-image: url(${img});
  margin-top: 64px;
  position: relative;
  margin-bottom: 88px;
  h1 {
    font-family: ${theme.font.robotoCondensed};
    font-size: 40px;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    line-height: 47px;
    margin-right: 11px;
  }
  .white-text {
    color: ${theme.colors.white};
  }
  .orange-text {
    color: ${theme.colors.orange1};
  }
  img {
  }
  .athletes-gallery {
    display: flex;
    /* align-items: center;
    justify-content: center; */
  }

  .mantine-1rgt8xc{
    display: flex;
    width: auto;
    position: static;
    transform: translateY(0px);
  }

  button{
    width: 139px;
    position: absolute;
    bottom: 0;
    transform: translateY(25px);
  }
`;

const changeColor = keyframes`
  0% {
    background-color: black;
  }
  30% {
    background-color: orange;
  }
  100% {
    background-color: blue;
  }
`;

export const StyledImgSpanContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
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
