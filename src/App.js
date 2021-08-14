import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio/" component={Home} exact />
        <Route path="/portfolio/message_me" component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;
