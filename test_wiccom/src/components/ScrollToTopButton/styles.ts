import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledScrollButton = styled.button`
  text-align: center;
  position: fixed;
  left: 0;
  z-index: 20;
  background-color: #333;
  color: #fff;
  background-color: ${theme.colors.dark3};
  font-size: 24px;
  border: 2px solid ${theme.colors.gray1};
  width: 56px;
  height: 56px;
  left: 1184px;
  top: 559px;
  cursor: pointer;
`;
