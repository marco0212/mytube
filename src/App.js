import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Route/Home";
import Header from "./Component/Header";
import GlobalStyle from "./style/GlobalStyle";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
