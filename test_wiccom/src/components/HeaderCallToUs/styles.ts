import styled from "styled-components";
import { theme } from "../../styles/theme";


export const StyledHeaderCallToUs = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${theme.colors.dark2};
width: 100%;
height: 32px;
padding: 10px 56px;
color: red;
font-family: ${theme.font.barlow};
font-size: 12px;
font-style: normal;
line-height: 14px;
text-transform: uppercase;
font-weight: 700;
color: ${theme.colors.orange1};
 span{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: 500;
    font-style: normal;
    color: ${theme.colors.gray2};
    line-height: 12px;
 }
`