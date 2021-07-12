import React from "react";
import Home from "./components/homepage/Home";
import Buildings from "./components/gallerypage/Buildings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/budynki" component={Buildings} exact />
      </Switch>
    </Router>
  );
}

export default App;
