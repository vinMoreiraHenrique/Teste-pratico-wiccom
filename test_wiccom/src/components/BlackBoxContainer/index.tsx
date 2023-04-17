import { BlackBox } from "../BlackBox"
import { StyledBlackBoxContainer } from "./styles"

export const BlackBoxContainer = () => {
    return(
        <StyledBlackBoxContainer>
            <BlackBox whiteText="garanta o" orangeText="frete grátis" imgSrc="src\assets\mainImgs\Package.png" buttonText="Confira"/>
            <BlackBox whiteText="seu dinheiro" orangeText="de volta" imgSrc="src\assets\mainImgs\currencyCoin.png" buttonText="Entenda"/>
        </StyledBlackBoxContainer>
    )
}