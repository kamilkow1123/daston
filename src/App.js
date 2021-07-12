import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Buildings from "./components/gallerypage/Buildings";
import Interiors from "./components/gallerypage/Interiors";
import Plans from "./components/gallerypage/Plans";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/budynki" component={Buildings} exact />
        <Route path="/wnetrza" component={Interiors} exact />
        <Route path="/rzuty" component={Plans} exact />
      </Switch>
    </Router>
  );
}

export default App;
