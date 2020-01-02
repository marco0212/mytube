import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./Style/Theme";
import { GlobalStyles } from "./Style/GlobalStyles";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <div>App</div>
    </ThemeProvider>
  );
}
