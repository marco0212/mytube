import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Search from "./component/Search";
import Watch from "./component/Watch";
import Header from "./component/Header";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:keyword" render={() => <Search />} />
          <Route path="/watch/:id" render={() => <Watch />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </Router>
    );
  }
}
