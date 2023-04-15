import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledCarousel = styled.div`
.mantine-Carousel-indicators{
    display: flex;
    align-items: baseline;
}

  .mantine-1jkjqkp {
    width: 40px;
    height: 2px;
    background-color: ${theme.colors.gray2};
    padding: 2px;
    border-radius: 0px;
  }
  .mantine-1jkjqkp[data-active] {
    background-color: ${theme.colors.orange1};
    width: 40px;
    height: 6px;
  }
`;
