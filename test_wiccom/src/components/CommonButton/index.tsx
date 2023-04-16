import { StyledCommonButton } from "./styles"

interface ICommonButton {
    buttonText: string;
}

export const CommonButton = ({buttonText}: ICommonButton) => {
    return(
    <StyledCommonButton>
        <p>{buttonText}</p>
    </StyledCommonButton>
    )
}