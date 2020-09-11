import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//pages
import Detail from './pages/detail'
import Dashboard from './pages/dashboard'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer';


const App = () => {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Dashboard/>
        </Route>
        <Route path='/:id'>
           <Detail/>
        </Route>
      </Switch>
      <Footer/>     
   </Router>
  );
}

export default App;
