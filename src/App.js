import React, { Component } from "react";
import { Link, Route, Switch, Router } from "react-router-dom";

import "./App.css";

import Home from "./pages/home/home.js";
import WorkHistory from "./pages/work-history/work-history.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={Home} />,
            <Route exact path="/work-history" component={WorkHistory} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
