import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Nav from "./components/Nav";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;