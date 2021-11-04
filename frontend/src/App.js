import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import SenBar from './components/SenBar';
import RoleetBar from './components/RoleetBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyProfile from './pages/MyProfile';
import Characters from './pages/Characters';
import Scenarii from './pages/Scenarii';
import Contributors from './pages/Contributors';
import Modal from './modals/Modal';
import SApp from './SApp';
import './styles.css';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      user.user.isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const App = (user) => (
  <SApp className='App'>
    <SenBar />
    <RoleetBar />
    <div className='content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/scenarii' component={Scenarii} />
        <Route exact path='/contributors' component={Contributors} />
        <Route path='/profile/:idUser' component={Profile} />
        <PrivateRoute exact path='/profile' user={user} component={MyProfile} />
      </Switch>
    </div>
    <Footer />
    <Modal />
  </SApp>
);

export default App;
