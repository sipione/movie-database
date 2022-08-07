import { createGlobalStyle } from "styled-components";

//create global style to normalize all doc in the browsers
const GlobalStyle = createGlobalStyle`
    /* use * because it aplys to html, body and text elments (all elements) */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html{
        overflow-x: hidden;
    }

    a{
        text-decoration: none;
    }
`
export default GlobalStyle;