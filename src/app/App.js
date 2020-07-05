import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { AuthenticationProvider } from './context/authentication';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/home';
import Messenger from './pages/messenger/messenger';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthenticationProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/messenger">
              <Messenger />
            </Route>
          </Switch>
        </AuthenticationProvider>
      </Router>
    </div>
  );
}

export default App;
