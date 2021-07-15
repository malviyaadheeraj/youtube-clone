import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Subs from "./pages/subs/Subs";
import Library from "./pages/library/Library";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="appContainer">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/subs" component={Subs} />
            <Route path="/Library" component={Library} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
