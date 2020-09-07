import React from "react";
import { Helmet } from "react-helmet";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/mainTheme";
import MainView from "./components/MainView";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hangman</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Walter+Turncoat&display=swap"
        />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainView />
      </ThemeProvider>
    </>
  );
}

export default App;
