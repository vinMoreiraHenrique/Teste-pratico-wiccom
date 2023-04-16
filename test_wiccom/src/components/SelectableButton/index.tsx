import { useState } from "react";
import {
  StyledCircleSelectableButton,
  StyledSelectableRectangleButton,
} from "./styles";

interface ISelectableButton {
  selected?: string;
  textButton: string;
  width?: string;
  modelName?: string;
  backgroundColorCircle?: string;
}

export const SelectableButton = ({
  textButton,
  modelName,
  width,
  backgroundColorCircle,
}: ISelectableButton) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <>
      {modelName == "circle" ? (
        <StyledCircleSelectableButton
          onClick={handleClick}
          style={{
            width: width,
            backgroundColor: backgroundColorCircle,
            opacity: 1,
          }}
        >
          {textButton}
        </StyledCircleSelectableButton>
      ) : (
        <StyledSelectableRectangleButton
          selected={selected}
          onClick={handleClick}
          style={{ width: width }}
        >
          {textButton}
        </StyledSelectableRectangleButton>
      )}
    </>
  );
};

export default SelectableButton;
