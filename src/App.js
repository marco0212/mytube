import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Route/Home";
import Search from "./Route/Search";
import Watch from "./Route/Watch";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search/:keyword" render={() => <Search />} />
        <Route path="/watch/:id" render={() => <Watch />} />
        <Route exact={true} path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
}
