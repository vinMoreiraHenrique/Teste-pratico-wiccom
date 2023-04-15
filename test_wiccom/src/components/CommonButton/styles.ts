import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledCommonButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  background-color: ${theme.colors.orange1};
  border: 0;
  color: ${theme.colors.black1};
  width: 120px;
  border-radius: 4px;
  font-family: ${theme.font.barlow};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-top: 32px;
  &:hover {
    background-color: ${theme.colors.orange2};
  }
`;
