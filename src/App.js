import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


//pages

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Detail from './pages/detail'
import Dashboard from './pages/dashboard'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import About from './pages/About';
import CreateEvents from './pages/CreateEvents'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/detail">
          <Detail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create-event">
          <CreateEvents />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
