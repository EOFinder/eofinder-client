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
import Dashboard from './pages/dashboard'
import Footer from './components/Footer';
import About from './pages/About';


const App = () => {

  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/">
          <Dashboard/>
      </Route>
      <Route path="/about">
          <About/>
      </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
