import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ProductCarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// export const StyledProductsCarouselContainer = styled.div`
//   border-radius: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: ${theme.colors.gray3};
//   width: 178px;
//   height: 178px;
//   transition: 0.5s ease-in-out;
//   position: relative;
//   .circle{
//     transform: scale(0);
//     width:1px;
//     height:1px;
//     position: absolute;
//     border-radius: 50%;
//     transition: .5s;
//     box-shadow: 0px 0px 0px 4px ${theme.colors.orange2};
//   }
//   &:hover {
//       .circle{
//         transform: scale(1);
//         width: 100%;
//         height: 100%;
//         background-color: ${theme.colors.orange1};
//         opacity: 1;
//       }
//     /* background-color: ${theme.colors.orange1}; */
//     img {
//       transform: scale(1.5);
//     }
//   }
//   img {
//     transition: 0.5s ease-in-out;
//     width: 108px;
//     height: 108px;
//   }
// `;

// export const StyledProductsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 400px;
//   p{
//     color: ${theme.colors.black1}
//   }
// `;
