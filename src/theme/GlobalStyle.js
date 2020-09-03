import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Walter+Turncoat&display=swap');
    
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
    }
`;

export default GlobalStyle;
