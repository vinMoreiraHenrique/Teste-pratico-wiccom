import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledBlackbox = styled.div`
  width: 475px;
  height: 280px;
  display: flex;
  padding-left: 40px;
  padding-top: 40px;
  position: relative;
  flex-direction: column;
  background-image: linear-gradient(213.8deg, #9a9a9a -17.86%, #0b0b0b 73%);
  &:hover {
    img {
      transform: translateY(-40px) rotate(-90deg);
      
    }
  }
  button {
    padding: 0;
    width: 123px;
    height: 40px;
  }
  h1 {
    font-family: ${theme.font.robotoCondensed};
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-transform: uppercase;
    margin: 0px;
  }
  .text-box {
    text-align: left;
  }
  .white-text {
    color: ${theme.colors.white};
  }
  .orange-text {
    color: ${theme.colors.orange1};
  }
  img {
    width: 180px;
    height: 180px;
    position: absolute;
    bottom: 5%;
    right: 5%;
    transition: all.3s;
    z-index: 9;
  }
`;
