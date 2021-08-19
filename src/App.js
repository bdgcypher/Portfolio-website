import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import MyWork from './pages/MyWork';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={MyWork} exact />
        <Route path="/message_me" component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;
