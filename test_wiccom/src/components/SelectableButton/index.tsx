import {useState} from "react"
import { StyledSelectableButton } from "./styles";

interface ISelectableButton {
    selected?: string;
    textButton: string;
}

export const SelectableButton = ({textButton}: ISelectableButton) => {
    const [selected, setSelected] = useState(false);
    
  
    const handleClick = () => {
      setSelected(!selected);
    };
  
    return (
      <StyledSelectableButton selected={selected} onClick={handleClick}>
        {textButton}
      </StyledSelectableButton>
    );
  };
  
  export default SelectableButton;