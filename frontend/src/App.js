import React from "react";
import { Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import SenBar from "./components/SenBar";
import RoleetBar from "./components/RoleetBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Characters from "./pages/Characters";

const App = () => (
  <div className="App">
    <SenBar />
    <RoleetBar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
