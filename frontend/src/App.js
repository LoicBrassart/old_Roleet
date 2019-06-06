import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import SenBar from "./components/SenBar";
import RoleetBar from "./components/RoleetBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Scenarii from "./pages/Scenarii";
import Contributors from "./pages/Contributors";

const App = () => (
  <div className="App">
    <SenBar />
    <RoleetBar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/scenarii" component={Scenarii} />
        <Route exact path="/contributors" component={Contributors} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
