import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Route/Home";
import Header from "./Component/Header";
import GlobalStyle from "./style/GlobalStyle";
import { theme } from "./style/theme";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
