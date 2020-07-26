import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './pages/Login';
import { Checkbox } from '@material-ui/core';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/home">
          <Checkout />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
