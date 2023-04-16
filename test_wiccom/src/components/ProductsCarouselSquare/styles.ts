import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LaunchingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-family: ${theme.font.robotoCondensed};
    font-size: 32px;
    font-weight: 700;
    font-style: italic;
    line-height: 38px;
    text-transform: uppercase;
    color: ${theme.colors.black1};
  }
`;
