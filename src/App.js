import React from 'react';
import './App.css';
import SearchDatabase from './components/SearchDatabase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/result" component={SearchDatabase} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App;
