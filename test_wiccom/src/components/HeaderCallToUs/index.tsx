import { TbTruck } from "react-icons/tb";
import { StyledHeaderCallToUs } from "./styles";
import { theme } from "../../styles/theme";

export const HeaderCallTous = () => {
  return (
    <StyledHeaderCallToUs>
      
          <h4>Fale Conosco</h4>
          <span><TbTruck style={{height: "20px", width: "20px", color: theme.colors.orange1, marginRight: "5px"}}/>Frete grátis a partir de R$ 199,90 para todo Brasil</span>
          <h4>Blog.blackskull</h4>
      
    </StyledHeaderCallToUs>
  );
};
