import React, { useState, useEffect } from "react";
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
import WatchLater from "./Route/WatchLater";

const config = {
  apiKey: "AIzaSyCgDqCS7ucOypwOTxusD7fQMpKPb6covHo",
  authDomain: "mytube-c3e3a.firebaseapp.com",
  databaseURL: "https://mytube-c3e3a.firebaseio.com"
};
firebase.initializeApp(config);

export default function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [watchLaterVideos, setWatchLaterVideos] = useState(null);

  useEffect(() => {
    firebase
      .database()
      .ref("/")
      .on("value", snapshot => {
        if (snapshot.val()) {
          const { watchlater } = snapshot.val();
          setWatchLaterVideos(Object.values(watchlater).reverse());
        } else {
          setWatchLaterVideos([]);
        }
      });
  }, []);

  function saveWatchLaterItem(data) {
    var updates = {};
    updates["/watchlater/" + data.id] = {
      ...data,
      id: { videoId: data.id }
    };
    return firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        notification("나중에 볼 동영상에 저장");
      });
  }
  function removeWatchLaterItem(id) {
    return firebase
      .database()
      .ref(`/watchlater/${id}`)
      .remove()
      .then(() => {
        notification("동영상 목록에서 제거");
      });
  }
  function notification(message) {
    alert(message);
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
          <Route
            path="/watchlater"
            render={() => (
              <WatchLater
                setActiveMenu={setActiveMenu}
                watchLaterVideos={watchLaterVideos}
                removeWatchLaterItem={removeWatchLaterItem}
              />
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
