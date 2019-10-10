import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { MAIN_ROUTE, Home_ROUTE } from '../../constants/routeConstants';
import Main from '../Main';
import Home from '../Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={MAIN_ROUTE} component={Main} />
          <Route path={Home_ROUTE} component={Home} />
          <Redirect to={MAIN_ROUTE} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
