import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Explore from "./components/explore/Explore";
import Subs from "./components/subs/Subs";
import Library from "./components/library/Library";
import History from "./components/history/History";
import WatchLater from "./components/watchlater/WatchLater";
import LikedVideos from "./components/likedvideos/LikedVideos";
// import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login, selectUser } from "./features/userSlice";
// import { auth } from "./firebase";

function App() {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch(
  //         login({
  //           displayName: user.displayName,
  //           email: user.email,
  //           photoUrl: user.photoUrl,
  //         })
  //       );
  //     }
  //   });
  // }, []);

  return (
    <Router>
      {/* {!user ? (
        <Login />
      ) : ( */}
      <div className="app">
        <Header />
        <div className="appContainer">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/subs" component={Subs} />
            <Route path="/library" component={Library} />
            <Route path="/history" component={History} />
            <Route path="/watchlater" component={WatchLater} />
            <Route path="/likedvideos" component={LikedVideos} />
          </Switch>
        </div>
      </div>
      {/* )} */}
    </Router>
  );
}

export default App;

// https://www.googleapis.com/auth/youtube.force-ssl
