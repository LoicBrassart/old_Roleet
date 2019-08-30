import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import SenBar from "./components/SenBar";
import RoleetBar from "./components/RoleetBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyProfile from "./pages/MyProfile";
import Characters from "./pages/Characters";
import Scenarii from "./pages/Scenarii";
import Contributors from "./pages/Contributors";
import EditCharacter from "./pages/EditCharacter";
import Modal from "./modals/Modal";

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user && user.user.isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const App = user => (
  <div className="App">
    <SenBar />
    <RoleetBar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/newChar" component={EditCharacter} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/scenarii" component={Scenarii} />
        <Route exact path="/contributors" component={Contributors} />
        <Route path="/profile/:idUser" component={Profile} />
        <PrivateRoute exact path="/profile" user={user} component={MyProfile} />
      </Switch>
    </div>
    <Footer />
    <Modal />
  </div>
);

const mapStateToProps = store => ({
  user: store.user
});
export default connect(mapStateToProps)(App);
