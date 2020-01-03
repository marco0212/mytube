import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./Style/Theme";
import { GlobalStyles } from "./Style/GlobalStyles";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Route/Home";
import Watch from "./Route/Watch";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/watch/:id" component={Watch} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
