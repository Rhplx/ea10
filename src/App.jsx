import React, { Component } from "react";
import Home from "./pages/home/home.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
