import { createGlobalStyle } from "styled-components";
import "@fontsource/inter";

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, button,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, select, text-area {
        margin: 0;
        padding: 0;
        vertical-align: baseline;
        box-sizing: border-box;
        list-style: none;
    }
    body{
        background-color: var(--dark1);
    }
    button{
        cursor: pointer;
    }
     input:-webkit-autofill {
    box-shadow: 0 0 0 30px #fff inset;

    }
    input:-webkit-autofill {
        -webkit-text-fill-color: #000 !important;
    }

    :root{
    //black tones
    --black1:#0B0B0B;
    --dark1:#1C1C1E;
    --dark2:#2C2C2E;
    --dark3:#3A3A3C;
    //white tones
    --white:#FFFFFF;
    //grey tones
    --gray1:#F1F1F1;
    --gray2:#CACACA;
    --gray3:#9A9A9A;
    //orange tones
    --orange1:#FFC470;
    --orange2:#FF9601;
  }
    `;
