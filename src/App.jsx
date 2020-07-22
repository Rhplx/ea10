import React, { Component } from "react";
import Home from "./pages/home/home.jsx";
import Tratamientos from "./pages/tratamientos/tratamientos.jsx";
import Nomina from "./pages/nomina/nomina.jsx";
import Personales from "./pages/personales/personales.jsx";
import PYMES from "./pages/PYMES/pymes.jsx";
import Quienes from "./pages/quienes/quienes.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tratamientos" component={Tratamientos} />
            <Route path="/nomina" component={Nomina} />
            <Route path="/personales" component={Personales} />
            <Route path="/pymes" component={PYMES} />
            <Route path="/quienes" component={Quienes} />
          </Switch>
        </div>
      </Router>
    );
  }
}
