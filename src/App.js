import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./Style/Theme";
import { GlobalStyles } from "./Style/GlobalStyles";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Route/Home";
import Watch from "./Route/Watch";
import Search from "./Route/Search";
import Header from "./Component/Header";
import * as firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCgDqCS7ucOypwOTxusD7fQMpKPb6covHo",
  authDomain: "mytube-c3e3a.firebaseapp.com",
  apiKey: "AIzaSyCgDqCS7ucOypwOTxusD7fQMpKPb6covHo",
  authDomain: "mytube-c3e3a.firebaseapp.com",
  databaseURL: "https://mytube-c3e3a.firebaseio.com"
};
firebase.initializeApp(config);

export default function App() {
  const [activeMenu, setActiveMenu] = useState(false);

  function saveWatchLaterItem(data) {
    var newItemKey = firebase
      .database()
      .ref()
      .child("watchlater")
      .push().key;
    var updates = {};
    updates["/watchlater/" + newItemKey] = data;

    return firebase
      .database()
      .ref()
      .update(updates);
  }

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Route
          path="/"
          render={props => (
            <Header
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              {...props}
            />
          )}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} setActiveMenu={setActiveMenu} />}
          />
          <Route
            path="/watch/:id"
            render={props => (
              <Watch {...props} saveWatchLaterItem={saveWatchLaterItem} />
            )}
          />
          <Route path="/search/:keyword" component={Search} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
