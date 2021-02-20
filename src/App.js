import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={'Home'} />
          <Route path='/services' component={'Services'} />
          <Route path='/products' component={'Product'} />
          <Route path='/sign-up' component={'Sing up'} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
