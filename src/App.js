import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Search from "./component/Search";
import Watch from "./component/Watch";
import Header from "./component/Header";
import { getPopularVideos } from "./functions";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HomeVideos: [],
      isLoading: true
    };
  }
  componentDidMount() {
    getPopularVideos(data => {
      this.setState({ HomeVideos: data, isLoading: false });
    });
  }
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/search/:keyword" render={() => <Search />} />
            <Route path="/watch/:id" render={props => <Watch {...props} />} />
            <Route
              path="/"
              render={() =>
                this.state.isLoading ? (
                  "Loading"
                ) : (
                  <Home HomeVideos={this.state.HomeVideos} />
                )
              }
            />
          </Switch>
        </main>
      </Router>
    );
  }
}
