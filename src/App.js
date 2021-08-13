import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import MessageMe from './pages/MessageMe';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/message_me" component={MessageMe} exact />
      </Switch>
    </Router>
  );
}

export default App;
