import { BlackBox } from "../BlackBox"
import { StyledBlackBoxContainer } from "./styles"

export const BlackBoxContainer = () => {
    return(
        <StyledBlackBoxContainer>
            <BlackBox whiteText="garanta o" orangeText="frete grátis" imgSrc="\static\images\Package.png" buttonText="Confira"/>
            <BlackBox whiteText="seu dinheiro" orangeText="de volta" imgSrc="\static\images\currencyCoin.png" buttonText="Entenda"/>
        </StyledBlackBoxContainer>
    )
}