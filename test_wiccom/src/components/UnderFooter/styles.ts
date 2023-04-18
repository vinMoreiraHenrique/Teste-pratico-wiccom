import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledUnderFooter = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
padding: 35px 56px;
border: 1px solid ${theme.colors.dark3};
background-color: ${theme.colors.black1};
div{
    display: flex;
    gap: 20px;
}
  p {
    font-family: ${theme.font.barlow};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;
