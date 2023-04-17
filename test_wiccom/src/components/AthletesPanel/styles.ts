import styled from "styled-components";
import img from "../../assets/mainImgs/athletesBackground.png";
import { theme } from "../../styles/theme";

export const StyledAthletesPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 1280px; */
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
    align-items: center;
    justify-content: center;
    gap: 18px;
    
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

