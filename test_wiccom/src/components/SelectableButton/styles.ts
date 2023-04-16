import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IStyledSelectableButtonProps {
  selected: boolean;
}

export const StyledSelectableButton = styled.button<IStyledSelectableButtonProps>`
  background-color: ${(props) =>
    props.selected ? theme.colors.black1 : theme.colors.white};
  color: ${(props) =>
    props.selected ? theme.colors.white : theme.colors.black1};
  border: 1px solid black;
  width: 70px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  margin: none;
  
  font-family: ${theme.font.barlow};
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
  border-color: ${theme.colors.gray1};
  margin: 4px;
  &hover {
    border-color: ${theme.colors.black1};
    p {
      color: ${(props) =>
    props.selected ? theme.colors.white : theme.colors.black1};
    }
  }
  &:focus {
    outline: none;
    border-color: ${theme.colors.black1};
    color: ${(props) =>
    props.selected ? theme.colors.white : theme.colors.black1}
  }
`;
