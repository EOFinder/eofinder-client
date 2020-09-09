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
import About from './pages/About';

const App = () => {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
