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


const App = () => {

  return (
    <Router>
      <Navbar/>
      <Dashboard/>
      <Footer/>
      
      <Switch>
     
      </Switch>
    </Router>
  );
}

export default App;
