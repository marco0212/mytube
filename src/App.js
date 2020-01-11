import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./Style/Theme";
import { GlobalStyles } from "./Style/GlobalStyles";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Route/Home";
import Watch from "./Route/Watch";
import Search from "./Route/Search";
import Header from "./Component/Header";
import WatchLater from "./Route/WatchLater";
import Notification from "./Component/Notification";
import { FIREBASE_API_KEY } from "./API_KEY";
import * as firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "mytube-c3e3a.firebaseapp.com",
  databaseURL: "https://mytube-c3e3a.firebaseio.com"
};

firebase.initializeApp(config);

export default function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [watchLaterVideos, setWatchLaterVideos] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    getWatchLaterItems();
  }, []);

  function getWatchLaterItems() {
    firebase
      .database()
      .ref("/")
      .on("value", snapshot => {
        if (snapshot.val()) {
          const { watchlater } = snapshot.val();
          setWatchLaterVideos(Object.values(watchlater));
        } else {
          setWatchLaterVideos([]);
        }
      });
  }

  function saveWatchLaterItem(data) {
    const updates = {};

    updates["/watchlater/" + data.id] = {
      ...data,
      id: { videoId: data.id }
    };

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        callNotification("나중에 볼 동영상에 저장", true);
      });
  }

  function removeWatchLaterItem(id) {
    firebase
      .database()
      .ref(`/watchlater/${id}`)
      .remove()
      .then(() => {
        callNotification("나중에 볼 동영상 목록에서 제거");
      });
  }

  function callNotification(message, addLink = false) {
    setNotification({ message, addLink });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  }

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        {notification && <Notification notification={notification} />}
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
