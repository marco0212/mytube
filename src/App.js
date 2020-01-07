import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import Theme from "./Style/Theme";
import { GlobalStyles } from "./Style/GlobalStyles";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Route/Home";
import Watch from "./Route/Watch";
import Search from "./Route/Search";
import Header from "./Component/Header";
import * as firebase from "firebase/app";
import "firebase/database";
import WatchLater from "./Route/WatchLater";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const config = {
  apiKey: "AIzaSyCgDqCS7ucOypwOTxusD7fQMpKPb6covHo",
  authDomain: "mytube-c3e3a.firebaseapp.com",
  databaseURL: "https://mytube-c3e3a.firebaseio.com"
};
firebase.initializeApp(config);

export default function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [watchLaterVideos, setWatchLaterVideos] = useState(null);
  const [notification, setNotification] = useState(null);

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
        callNotification("나중에 볼 동영상에 저장", true);
      });
  }
  function removeWatchLaterItem(id) {
    return firebase
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
        {notification && (
          <Notification>
            {notification.message}
            {notification.addLink && (
              <Link to="/watchlater">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Link>
            )}
          </Notification>
        )}
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

const slideUp = keyframes`
0% {
  opacity: 0;
  bottom: 0;
}
10% {
  opacity: 1;
  bottom: 20px;
}
90% {
  bottom: 20px;
}
100% {
  bottom: -60px;
}
`;
const Notification = styled.span`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 20px;
  left: 20px;
  font-size: 14px;
  line-height: 40px;
  padding: 0 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${slideUp} 4s forwards;
  a {
    margin-left: 10px;
  }
`;
