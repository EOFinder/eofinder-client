import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//pages

//components
import Navbar from './components/Navbar'

const App = () => {

  return (
    <Router>
      <Navbar/>
      <Switch>
     
      </Switch>
    </Router>
  );
}

export default App;
