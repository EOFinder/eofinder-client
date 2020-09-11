import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//pages
import Register from './pages/Register/Register';

//components
import Navbar from './components/Navbar'
import Dashboard from './pages/dashboard'
import Footer from './components/Footer';
import About from './pages/About';
import CreateEvents from './pages/CreateEvents'



const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
            <Dashboard/>
        </Route>
        <Route path="/about">
<<<<<<< HEAD
          <About />
        </Route>
        <Route path="/register">
          <Register />
=======
            <About/>
        </Route>
        <Route path="/create-event">
            <CreateEvents/>
>>>>>>> 2fc50d808ea793e4cc2615c48a77363fcfc5b13c
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
