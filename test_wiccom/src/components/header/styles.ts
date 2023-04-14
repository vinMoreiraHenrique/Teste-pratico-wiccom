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
      justify-content: center;
      width: 103px;
      height: 72px;
      transition: 0.5s;
      cursor: pointer;
      align-items: center;
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
