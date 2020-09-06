import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/mainTheme";
import MainView from "./components/MainView";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainView />
      </ThemeProvider>
    </>
  );
}

export default App;
