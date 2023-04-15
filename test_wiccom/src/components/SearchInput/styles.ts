import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledSearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.dark1};
  width: 216px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.dark3};
  /* padding-right: 8px; */
  position: relative;
  span {
    display: block;
    position: absolute;
    right: 0;
    margin-right: 0px;
    display: flex;
    background-color: transparent;
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledSearchInput = styled.input`
  background-color: ${theme.colors.dark1};
  height: 100%;
  width: 100%;
  border: none;
  /* outline: none; */
  padding-left: 16px;

  &::placeholder {
    font-family: ${theme.font.barlow};
    font-weight: 500;
    font-size: 12px;
    line-height: 14.4px;
  }
`;
