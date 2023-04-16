import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IStyledSelectableRectangleButtonProps {
  selected: boolean;
}

export const StyledSelectableRectangleButton = styled.button<IStyledSelectableRectangleButtonProps>`
  background-color: ${(props) =>
    props.selected ? theme.colors.black1 : theme.colors.white};
  color: ${(props) =>
    props.selected ? theme.colors.white : theme.colors.gray1};
  border: 1px solid ${theme.colors.gray1};
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
  &:hover {
    border: 1px solid black;
    color: ${(props) =>
      props.selected ? theme.colors.white : theme.colors.black1};
  }
  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.selected ? theme.colors.black1 : theme.colors.gray1};
    color: ${(props) =>
      props.selected ? theme.colors.white : theme.colors.gray1};
  }
`;

export const StyledCircleSelectableButton = styled.button`
  display: flex;
  height: 45px;
  border-radius: 50%;
  transform: scale(0.7);
`;
