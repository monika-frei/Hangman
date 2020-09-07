import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   
    *,*::before,*::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
         margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
`;

export default GlobalStyle;
