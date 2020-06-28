import React from 'react';
import './App.css';
import SearchDatabase from './components/SearchDatabase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';
import { useState } from 'react';
import logo from "./pickar_logo_white.png";

function App() {

  const [calculationHistory, setCalculationHistory] = useState([]);

  function getCalculations(val) {
    setCalculationHistory(val)

  }

  return (
    <Router>

      <div className="pickar-logo-white">
        <img src={logo}></img>
      </div>
      <Switch>
        <Route path="/result" render={() => <SearchDatabase calculationHistory={calculationHistory} />} />
        <Route path="/" exact render={() => <HomePage getCalculations={getCalculations} />} />
      </Switch>
    </Router>
  )
}

export default App;
