import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledHeader = styled.header`
  width: 1280px;
  background-color: ${theme.colors.black1};
  padding: 20px 56px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  height: 72px;
  font-family: ${theme.font.barlow};

  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: center;
  color: ${theme.colors.gray1};
  font-weight: bold;
  ul {
    display: flex;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 103px;
      height: 72px;
      position: relative;
      transition: 0.5s;
      cursor: pointer;
      align-items: center;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background-color: ${theme.colors.orange1};
        transition: width 0.3s ease-in-out;
      }
      &:hover::after {
        width: 100%;
      }
      &:hover {
        background-color: ${theme.colors.gray1};
        &:hover {
          a {
            color: ${theme.colors.white};
          }
        }
      }
      a,
      a:visited {
        font-weight: bold;
        color: ${theme.colors.gray1};
      }
    }
  }
`;

export const StyledSearch = styled.input``;